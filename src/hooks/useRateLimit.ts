import { useQuery } from "@tanstack/react-query";
import githubApi from "../services/githubApi";
import { GITHUB_ENDPOINTS } from "../services/githubEndpoints";

export function useRateLimit() {

    return useQuery({

        queryKey:["rate-limit"],

        queryFn:async()=>{

            const response=
            await githubApi.get(
                GITHUB_ENDPOINTS.rateLimit()
            );

            return response.data.rate;

        },

        staleTime:30000

    });

}