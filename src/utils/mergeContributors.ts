import type { ContributorStat } from "../types/contributor";

export function mergeContributors(
  contributors: ContributorStat[][]
): ContributorStat[] {

  const map = new Map<number, ContributorStat>();

  contributors.forEach((repoContributors) => {

    repoContributors.forEach((contributor) => {

      const existing = map.get(contributor.id);

      if (existing) {

        existing.contributions += contributor.contributions;

      } else {

        map.set(contributor.id, {
          ...contributor,
        });

      }

    });

  });

  return [...map.values()].sort(
    (a, b) =>
      b.contributions - a.contributions
  );
}