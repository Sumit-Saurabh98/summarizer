import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getVerificationTokenByEmail } from "./verification-token";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();

  const existingToken = await getVerificationTokenByEmail(email);

  // Check if user exists first
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return token; // Just return the generated token if user doesn't exist yet
  }

  if (existingToken) {
    await db.user.update({
      where: {
        email,
      },
      data: {
        verificationToken: token,
      },
    });
  }

  const verificationToken = await db.user.update({
    where: { email },
    data: { verificationToken: token },
  });

  return verificationToken.verificationToken;
};
