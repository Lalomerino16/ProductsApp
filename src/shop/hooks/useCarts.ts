import { useQuery } from "@tanstack/react-query"
import { getCarts } from "../actions/getCarts.action"


export const useCarts = () => {

    const query = useQuery({
        queryKey: ['carts'],
        queryFn: getCarts,
        staleTime: 1000 * 60 * 5,
    })

    return query;
}