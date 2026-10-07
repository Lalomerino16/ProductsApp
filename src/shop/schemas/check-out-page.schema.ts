import z from "zod";



export const checkOutSchema = z.object({
    fullName: z
        .string()
        .min(1, "El campo es requerido")
        .max(100),
    address: z.string().min(5).max(200),
    city: z.string().min(2).max(100),
    zipCode: z.string().regex(/^\d{5}$/),
    phone: z.string().regex(/^\d{10}$/)
})


export type  CheckOutFormValues = z.infer<typeof checkOutSchema>