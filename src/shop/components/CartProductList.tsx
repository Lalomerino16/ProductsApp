
import type { CartItem } from "../types/CartItem.interface";
import { CartProduct } from "./CartProduct";

interface CartProductListProps{
    cartProducts: CartItem[];
}


export const CartProductList = ({ cartProducts }: CartProductListProps) => {

    return(
        <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
            {cartProducts.map((cartProduct => (
                <CartProduct
                    key={cartProduct.id}
                    cartProduct={cartProduct}
                />
            )))}
        </ul>
    );

}