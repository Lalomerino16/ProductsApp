import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/getProducts.action"
import type { ProductResponse } from "../types/products.response"
import { useSearchParams } from "react-router";




export const useProducts = () => {

    const [searchParams ] = useSearchParams();
    
    const queryPage = searchParams.get('page') || '1'; // numero de pagina en string('1')
    const page = isNaN(+queryPage) ? 1 :  +queryPage; // parseo a number
    
    const queryLimit = searchParams.get('limit') || "30";
    const limit = isNaN(+queryLimit) ? 30 :  +queryLimit;
    
    const skip = (page - 1) * limit;
    const category = searchParams.get('category') ?? '';

    const searchQuery = searchParams.get('query') || '';

    const query = useQuery<ProductResponse>({
        queryKey: ['products', page, limit, category, searchQuery],
        queryFn: () => getProductsAction({ 
            limit, 
            skip, 
            category,
            searchQuery 
        
        }),
        staleTime: 1000 *  60 * 5, 
    })
    
    const totalPages = query.data
    ? Math.ceil(query.data.total / limit)
    : 0;


    return {
        ...query,
        totalPages
    }


}