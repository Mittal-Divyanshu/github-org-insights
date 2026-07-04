import { useQuery } from "@tanstack/react-query";

import githubApi from "../services/githubApi";

import { GITHUB_ENDPOINTS } from "../services/githubEndpoints";

import queue from "../services/requestQueue";

import type { Repository } from "../types/github";

import {
  aggregateLanguages,
  type LanguageMap,
} from "../utils/aggregateLanguages";

export function useLanguages(
  organization: string,
  repositories: Repository[]
) {

  return useQuery({

    queryKey: ["languages", organization],

    enabled: repositories.length > 0,

    queryFn: async () => {

      const requests = repositories.map((repo) =>
        queue(() =>
          githubApi.get<LanguageMap>(
            GITHUB_ENDPOINTS.languages(
              organization,
              repo.name
            )
          )
        )
      );

      const responses =
        await Promise.all(requests);

      return aggregateLanguages(
        responses.map((r) => r.data)
      );

    },

    staleTime: 1000 * 60 * 30,
  });
}