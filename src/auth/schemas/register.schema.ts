
import * as z from "zod"; 





export const registerSchema = z.object({
    name: z
        .string()
        .min(1, "El campo es requerido"),
    lastName: z
        .string()
        .min(1, "El campo es requerido"),
    username: z
        .string()
        .min(1, "El campo es requerido"),
    password: z
        .number()
        .min(1, "El campo es requerido"),
    email: z
        .string()
        .min(1, "El campo es requerido")

})


export type RegisterFormValues = z.infer<typeof registerSchema>