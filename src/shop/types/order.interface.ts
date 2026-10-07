import type { CartItem } from "./CartItem.interface";



export interface ShippingInfo {
    fullName: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
}




export interface Order{
    id: string;
    items: CartItem[];
    shipping: ShippingInfo;
    total: number;
    crateAt: string
}