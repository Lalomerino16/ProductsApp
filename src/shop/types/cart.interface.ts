import type { ProductCart } from "./productCart.interface";




export interface Cart{
    id: number,
    products: ProductCart[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}