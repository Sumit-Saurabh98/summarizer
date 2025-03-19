"use server";
import {z} from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { getUserByEmail } from "@/utils/user";
import { generateVerificationToken } from "@/lib/token";
export const register = async (values: z.infer<typeof RegisterSchema>) =>{
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: "Invalid email or password",
        };
    }

    const {email, password, name} = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {
            error: "User already exists",
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = await generateVerificationToken(email);

    const user = await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            verificationToken,
            image:`https://avatar.iran.liara.run/username?username=${name}`,
        }
    });

    if(!user){
        return {
            error: "Something went wrong",
        };
    }

    //TODO: send verification email
    
    await sendVerificationEmail(email, verificationToken!);

    return {
        success: "Kindly check your email to verify your account",
    };
}