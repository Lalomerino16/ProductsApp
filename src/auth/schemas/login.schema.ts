import * as z from "zod"; 


export const loginSchema = z.object({
    username: z
        .string()
        .min(1, "El campo es requerido"),

    password: z
    .string()
    .min(1, "El campo es requerido"),
});


export type LoginFormValues = z.infer<typeof loginSchema>;