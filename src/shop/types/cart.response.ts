import type { Cart } from "./cart.interface";

export interface CartResponse {
    carts: Cart[],
    total: number,
    skip:  number,
    limit: number
}