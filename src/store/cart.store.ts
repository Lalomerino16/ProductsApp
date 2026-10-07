import type { CartItem } from "@/shop/types/CartItem.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: CartItem[];
}

interface CartActions {
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  isInCart: (id: number) => boolean;
  getItemQuantity: (id: number) => number;
  totalItems: () => number;
  total: () => number;
}

export const useCartStore = create<CartState & CartActions>()(
    persist(
        (set, get) => ({
        items: [],

        addItem: (product, quantity = 1) => {
            const items = get().items;
            const existing = items.find((i) => i.id === product.id);

            if (existing) {
                const newQty = Math.min(existing.quantity + quantity, existing.stock);
                set({
                items: items.map((i) =>
                    i.id === product.id ? { ...i, quantity: newQty } : i
                ),
                });
            } else {
                set({
                items: [...items, { ...product, quantity: Math.min(quantity, product.stock) }],
                });
            }
        },

        removeItem: (id) => {
            set({ items: get().items.filter((i) => i.id !== id) });
        },

        increaseItem: (id) => {
            set({
            items: get().items.map((i) =>
                i.id === id && i.quantity < i.stock
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            });
        },

        decreaseItem: (id) => {
            set({
            items: get()
                .items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
                )
                .filter((i) => i.quantity > 0),
            });
        },

        updateQuantity: (id, quantity) => {
            if (quantity <= 0) {
            get().removeItem(id);
            return;
            }
            set({
            items: get().items.map((i) =>
                i.id === id
                ? { ...i, quantity: Math.min(quantity, i.stock) }
                : i
            ),
            });
        },

        clearCart: () => set({ items: [] }),

        isInCart: (id) => get().items.some((i) => i.id === id),
        getItemQuantity: (id) =>
            get().items.find((i) => i.id === id)?.quantity ?? 0,

        total: () =>
            get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),

        totalItems: () =>
            get().items.reduce((acc, i) => acc + i.quantity, 0),
        }),

        {
            name: "cart-storage",
            partialize: (state) => ({ items: state.items }), // no persistas funciones
        }
    )
);