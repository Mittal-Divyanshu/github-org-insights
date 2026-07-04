import { useQuery } from "@tanstack/react-query";

import githubApi from "../services/githubApi";
import { GITHUB_ENDPOINTS } from "../services/githubEndpoints";
import queue from "../services/requestQueue";

import type { Repository } from "../types/github";
import type { ContributorStat } from "../types/contributor";

import { mergeContributors } from "../utils/mergeContributors";

export function useContributors(
  organization: string,
  repositories: Repository[]
) {

  return useQuery({

    queryKey: [
      "contributors",
      organization,
    ],

    enabled:
      repositories.length > 0,

    queryFn: async () => {

      const topRepositories = [...repositories]
        .sort(
          (a, b) =>
            b.stargazers_count -
            a.stargazers_count
        )
        .slice(0, 20);

      const requests =
        topRepositories.map((repo) =>
          queue(async () => {

            const response =
              await githubApi.get<
                ContributorStat[]
              >(
                GITHUB_ENDPOINTS.contributors(
                  organization,
                  repo.name
                )
              );

            return response.data;

          })
        );

      const responses =
        await Promise.all(requests);

      return mergeContributors(
        responses
      );

    },

    staleTime:
      1000 * 60 * 15,

  });

}