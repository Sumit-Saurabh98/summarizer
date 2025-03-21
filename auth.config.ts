import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./utils/user";
import bcrypt from "bcryptjs";

export default {
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {

                    const {email, password} = validatedFields.data;

                    const user = await getUserByEmail(email);

                    if(!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if(passwordsMatch) return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;