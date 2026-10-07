import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem } from "../types/CartItem.interface";
import { useCartStore } from "@/store/cart.store";
import { useNavigate } from "react-router";


interface CartProductProps{
    cartProduct: CartItem

}




export const CartProduct = ({ cartProduct }: CartProductProps) => {

    const navigate = useNavigate();
    const removeItem = useCartStore((state) => state.removeItem);
    const addItem = useCartStore((state) => state.addItem);
    const decreaseItem = useCartStore((state) => state.decreaseItem);
    
    const handleProductDetail = (id: number) => {
        navigate(`/product/${id}`) 
    }

    return(
        <li className="flex gap-4 py-5">            
            <div className="size-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                <img 
                    className="size-full object-cover"
                    src={cartProduct.thumbnail}
                    alt={cartProduct.title}
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <a 
                            onClick={() => handleProductDetail(cartProduct.id)} 
                            className="truncate text-sm font-medium hover:underline cursor-pointer hover:text-primary"
                        >
                            {cartProduct.title}
                        </a>
                    </div>
                    <button
                        onClick={() => removeItem(cartProduct.id)}
                        aria-label={`Eliminar ${cartProduct.title}`}
                        className="cursor-pointer text-muted-foreground transition-colors hover:text-destructive"
                    >
                        <Trash2 className="size-4" />
                    </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-lg border border-border">
                        <button
                            onClick={() => decreaseItem(cartProduct.id)}
                            aria-label={`Quitar una unidad de ${cartProduct.title}`}
                            className="cursor-pointer flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
                            disabled={cartProduct.quantity <= 1}
                        >
                            <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium tabular-nums">
                            {cartProduct.quantity}
                        </span>
                        <button
                            onClick={() => addItem(cartProduct)}
                            aria-label={`Añadir una unidad de ${cartProduct.title}`}
                            className="cursor-pointer flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Plus className="size-3.5" />
                        </button>
                    </div>
                    <p className="text-sm font-semibold tabular-nums">
                        ${(cartProduct.price * cartProduct.quantity).toFixed(2)}
                    </p>
                </div>
            </div>
        </li>
    );


}