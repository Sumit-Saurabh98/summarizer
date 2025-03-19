import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "./utils/user";
import { getAccountByUserId } from "./utils/account";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      usename: string;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
  interface JWT {
    role?: string;
    isOAuth: boolean;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          verificarionStatus: true,
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "github") {
        return true;
      }

      // For credentials provider, check if user exists and is verified
      const existingUser = await getUserById(user.id as string);

      // prevent signing in if email is not verified
      if (!existingUser) {
        return false;
      }

      return true;
    },

    async session({ token, session }) {

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
        session.user.usename = token.name as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) {
        return token;
      }

      const existingAccount = await getAccountByUserId(existingUser.id);
      token.isOAuth = existingAccount?.[0]?.provider ? true : false;
      token.name = existingUser.name;
      token.email = existingUser.email;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
