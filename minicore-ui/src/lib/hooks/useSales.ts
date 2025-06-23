import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";
import type { Sale } from "../types/types";

export const useSales = () =>{

    const {data: sales} = useQuery({
        queryKey: ['sales'],
        queryFn: async () => {
            const response = await agent.get<Sale[]>('/Sales')
            return response.data;
        }
    });

    return {
        sales
    }
}