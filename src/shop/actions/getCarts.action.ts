import { dummyApi } from "@/api/dummyApi";
import type { CartResponse } from "../types/cart.response";






export const getCarts = async(): Promise<CartResponse> => {

    const { data } = await dummyApi.get('/carts');

    return data;

}