import { useQuery } from "@tanstack/react-query";

import githubApi from "../services/githubApi";
import { GITHUB_ENDPOINTS } from "../services/githubEndpoints";

import type { Repository } from "../types/github";

export function useRepositories(org: string) {
  return useQuery({
    queryKey: ["repositories", org],

    queryFn: async (): Promise<Repository[]> => {
      let page = 1;

      const repositories: Repository[] = [];

      while (true) {
        const response = await githubApi.get(
          GITHUB_ENDPOINTS.repositories(org, page)
        );

        repositories.push(...response.data);

        if (response.data.length < 100) {
          break;
        }

        page++;
      }

      return repositories;
    },

    enabled: !!org,

    staleTime:1000*60*10,

gcTime:1000*60*30,

retry:false,

refetchOnWindowFocus:false,
  });
}