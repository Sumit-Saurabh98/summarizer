"use server";

import { db } from "@/lib/db";
import { getUserByToken } from "@/utils/user";

export const verification = async (token: string) => {

    const userWithToken = await getUserByToken(token);

    if(!userWithToken){
        return {
            error: "User has not exist!"
        };
    }

    const isTokenMatched = userWithToken.verificationToken === token;

    if(!isTokenMatched){
        return {
            error: "Invalid token!"
        };
    }

    await db.user.update({
        where: {
            email: userWithToken.email
        },
        data: {
            verificarionStatus: true
        }
    })

    return{
        success: "Email has been verified!"
    }

}