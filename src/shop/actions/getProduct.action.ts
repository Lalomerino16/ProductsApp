import { dummyApi } from "@/api/dummyApi"
import type { Product } from "../types/product.interface"





export const getProductAction = async(idProduct: number) => {
    const { data } = await dummyApi.get<Product>(`/products/${idProduct}`)

    return data


}