import { persist } from 'zustand/middleware';
import type { Order } from "@/shop/types/order.interface";
import { create } from "zustand";


interface OrderState{
    orders: Order[],
    addOrder: (order: Order) => void;
    getOrderById: (id: string) => Order | undefined;  
}


export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) => set({ orders: [...get().orders, order] }),
      getOrderById: (id) => get().orders.find((o) => o.id === id),
    }),
    { name: "order-storage" }
  )
);