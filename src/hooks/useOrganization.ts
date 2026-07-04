import { useQuery } from "@tanstack/react-query";

import githubApi from "../services/githubApi";
import { GITHUB_ENDPOINTS } from "../services/githubEndpoints";

import type { Organization } from "../types/github";

export function useOrganization(org: string) {
  return useQuery({
    queryKey: ["organization", org],

    queryFn: async (): Promise<Organization> => {
      const response = await githubApi.get(
        GITHUB_ENDPOINTS.organization(org)
      );

      return response.data;
    },

    enabled: !!org,

    staleTime: 1000 * 60 * 10,
     gcTime: 1000 * 60 * 30,

    retry: false,

    refetchOnWindowFocus: false,
  });
}