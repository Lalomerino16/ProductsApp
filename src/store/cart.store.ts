import type { CartItem } from "@/shop/types/CartItem.interface";
import { create } from "zustand";

interface CartState{
    items: CartItem[];
}

interface Actions {

    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    decreaseItem: (id: number) => void;
    clearCart: () => void;

    totalItems: () => number;
    total: () => number;
}


export const useCartStore = create<CartState & Actions>()((set, get) => ({
    items: [],

    addItem: (item) => {
        const items = get().items;

        const existingItem = items.find(
            (cartItem) => cartItem.id === item.id
        );

        if (existingItem) {
            set({
                items: items.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1
                        }
                        : cartItem
                )
            });
        } else {
            set({
                items: [...items, item]
            });
        }
    },
    removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) })
    },
    clearCart(){
        set({ items: [] })
    },
    total: () => {
        const items = get().items;

        return items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        )
    },
    totalItems: () => {
        return get().items.reduce(
            (total, item) => total + item.quantity,
            0
        );
    },
    decreaseItem: (id) => {
        const items = get().items;

        set({
            items: items.map((item) => item.id === id ? { ...item, quantity: item.quantity -1 } : item).filter((item) => item.quantity > 0)
        })
    },


}));