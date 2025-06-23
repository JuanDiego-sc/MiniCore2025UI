import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";
import type { Rule } from "../types/types";

export const useRules = () =>{

    const {data: rules} = useQuery({
        queryKey: ['rules'],
        queryFn: async () => {
            const response = await agent.get<Rule[]>('/Rules')
            return response.data;
        }
    });

    return {
        rules
    }
}