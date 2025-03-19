import {z} from 'zod'

export const RegisterSchema = z.object({
    name: z.string().min(3, {
        message: 'name must be at least 3 characters',
    }),
    email: z.string().email({
        message: 'Email is required',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters',
    })
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {message: "Password is required"}),
    code: z.optional(z.string())
})