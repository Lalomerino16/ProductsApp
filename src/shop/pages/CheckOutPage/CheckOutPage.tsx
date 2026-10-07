import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { checkOutSchema, type CheckOutFormValues } from "@/shop/schemas/check-out-page.schema";
import { useCartStore } from "@/store/cart.store";
import { useOrderStore } from "@/store/order.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";





export const CheckOutPage = () => {


    const items = useCartStore((state) => state.items);
    const total = useCartStore((state) => state.total());
    const clearCart = useCartStore((state) => state.clearCart);
    const addOrder = useOrderStore((state) => state.addOrder);
    

    const { 
        register,     
        handleSubmit, 
        formState: { errors } 
    } = useForm<CheckOutFormValues>({
        resolver: zodResolver(checkOutSchema),
    });


    const handleConfirmOrder = () => {

    }


    return(
        <section className="container max-w-4xl mx-auto px-4 py-12">
            <h1>Finalizar compra</h1>


            <div className="grid md:grid-cols-2 gap-10">

                <form 
                    className="space-y-4" 
                    onSubmit={handleSubmit(handleConfirmOrder)}
                >
                    <div className="space-y-2">
                        <Label htmlFor="fullName" >Nombre completo:</Label>
                        <Input 
                            id="fullName"
                            value="ejemplo"
                            placeholder="Ingresa nombre completo"
                            {...register("fullName")}
                        />
                        {errors.fullName && (
                            <p className="text-sm text-red-500">{errors.fullName.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Direccion:</Label>
                        <Input 
                            id="address"
                            placeholder="Direccion"
                            {...register("address")}
                        />
                        {errors.address && (
                            <p className="text-sm text-red-500">{errors.address.message}</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">Ciudad:</Label>
                            <Input 
                                id="city"
                                placeholder="Ciudad"
                                {...register("city")}
                            />
                            {errors.city && (
                                <p className="text-sm text-red-500">{errors.city.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="zipCode">Codigo Postal: </Label>
                            <Input 
                                id="zipCode"
                                placeholder="Eje: 12345"
                                {...register("zipCode")}
                            />
                            {errors.zipCode && (
                                <p className="text-sm text-red-500">{errors.zipCode.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefono:</Label>
                        <Input 
                            id="phone"
                            placeholder="Eje: 1234"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 mt-4"
                    >
                        Confirmar pedido
                    </Button>
                </form>
                <div className="border border-border rounded-xl p-6 h-fit space-y-4">
                    <h2 className="font-semibold">Resumen del pedido</h2>
                    <ul className="space-y-3">
                        {items.map((item) => (
                            <li key={item.id} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">
                                    {item.title} × {item.quantity}
                                </span>
                                <span className="tabular-nums">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="tabular-nums">${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}