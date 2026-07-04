import type { Repository } from "../types/github";
import { calculateRepositoryHealth } from "./repositoryHealth";

export interface OverviewStats {
  totalRepositories: number;
  totalStars: number;
  totalForks: number;
  totalIssues: number;
}

export interface AliveDeadStats {
  alive: number;
  dead: number;
}

export interface LanguageStat {
  name: string;
  value: number;
}

export function getOverviewStats(
  repositories: Repository[]
): OverviewStats {
  return {
    totalRepositories: repositories.length,

    totalStars: repositories.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    ),

    totalForks: repositories.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
    ),

    totalIssues: repositories.reduce(
      (sum, repo) => sum + repo.open_issues_count,
      0
    ),
  };
}

export function getAliveDead(
  repositories: Repository[]
): AliveDeadStats {

  let alive = 0;
  let dead = 0;

  repositories.forEach((repo) => {

    const days =
      (Date.now() -
        new Date(repo.pushed_at).getTime()) /
      (1000 * 60 * 60 * 24);

    if (days <= 90)
      alive++;
    else
      dead++;

  });

  return {
    alive,
    dead,
  };
}

export function getLanguageStats(
  repositories: Repository[]
): LanguageStat[] {

  const map: Record<string, number> = {};

  repositories.forEach((repo) => {

    if (!repo.language) return;

    map[repo.language] =
      (map[repo.language] || 0) + 1;

  });

  const languages = Object.entries(map)
    .map(([name, value]) => ({
      name,
      value,
    }))
    .sort((a, b) => b.value - a.value);

  // Top 8 languages
  const topLanguages = languages.slice(0, 8);

  // Merge remaining languages into "Others"
  const others = languages
    .slice(8)
    .reduce((sum, lang) => sum + lang.value, 0);

  if (others > 0) {
    topLanguages.push({
      name: "Others",
      value: others,
    });
  }

  return topLanguages;
}

export function getAverageHealth(
  repositories: Repository[]
): number {

  if (repositories.length === 0)
    return 0;

  const total =
    repositories.reduce(
      (sum, repo) =>
        sum +
        calculateRepositoryHealth(repo),
      0
    );

  return Math.round(
    total / repositories.length
  );

}

export function getMostStarredRepo(
  repositories: Repository[]
) {
    if (repositories.length === 0) {
    return null;
  }

  return repositories.reduce((a, b) =>
    a.stargazers_count >
    b.stargazers_count
      ? a
      : b
  );

}

export function getRecentlyUpdatedRepo(
  repositories: Repository[]
) {
    if (repositories.length === 0) {
    return null;
  }

  return repositories.reduce((a, b) =>
    new Date(a.updated_at).getTime() >
    new Date(b.updated_at).getTime()
      ? a
      : b
  );

}