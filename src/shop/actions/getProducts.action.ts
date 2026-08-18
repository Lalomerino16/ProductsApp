import { dummyApi } from "../../api/dummyApi"
import type { ProductResponse } from "../types/products.response"

interface Options{
    limit: number;
    skip: number;
    category: string;
    searchQuery: string;
}

export const getProductsAction = async({ limit, skip, category, searchQuery }: Options): Promise<ProductResponse> => {

  const endpoint = category
    ? `/products/category/${category}`
    : '/products';

    const { data } = await dummyApi.get<ProductResponse>(endpoint, {
        params: {
            limit,
            skip,
            category,
            q: searchQuery
        }
    });
    
    return data;

}