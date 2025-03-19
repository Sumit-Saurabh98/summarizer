import { db } from "@/lib/db"

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where:{
                email
            }
        })

        return user;
    } catch (error) {
        console.log(error, "error while getting user by email")
        return null
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            }
        })

        return user;
    } catch (error) {
        console.log(error, "error while getting user by id")
        return null
    }
}

export const getUserByToken = async (token: string) => {
    try {
        const user = await db.user.findFirst({
            where: {
                verificationToken: token
            }
        })

        return user;
    } catch (error) {
        console.log(error, "error while getting user by id")
        return null
    }
}