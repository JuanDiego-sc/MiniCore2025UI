import { useQuery} from "@tanstack/react-query"
import agent from "../api/agent";
import type { Seller } from "../types/types";

export const useSeller = (startDate: string, endDate: string) =>{

    const {data: sellers} = useQuery({
        queryKey: ['sellers', startDate, endDate],
        queryFn: async () => {
            const response = await agent.get<Seller[]>(`/Commissions/calculate?StartDate=${encodeURIComponent(startDate)}&EndDate=${encodeURIComponent(endDate)}`)
            return response.data;
        },
        enabled: !!startDate && !!endDate, // Only run query when both dates are provided
    });

    return {
        sellers
    }
}