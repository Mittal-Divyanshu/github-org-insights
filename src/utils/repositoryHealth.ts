import type { Repository } from "../types/github";

export function calculateRepositoryHealth(
  repo: Repository
): number {

  let score = 100;

  // -----------------------------
  // Recent Activity (40 points)
  // -----------------------------

  const daysSinceLastPush =
    (Date.now() - new Date(repo.pushed_at).getTime()) /
    (1000 * 60 * 60 * 24);

  if (daysSinceLastPush > 365) {
    score -= 40;
  } else if (daysSinceLastPush > 180) {
    score -= 25;
  } else if (daysSinceLastPush > 90) {
    score -= 15;
  }

  // -----------------------------
  // Open Issues (20 points max)
  // -----------------------------

  score -= Math.min(repo.open_issues_count, 20);

  // -----------------------------
  // Archived Repository
  // -----------------------------

  if (repo.archived) {
    score -= 25;
  }

  // -----------------------------
  // Community Interest (Stars)
  // -----------------------------

  score += Math.min(
    repo.stargazers_count / 100,
    10
  );

  // Clamp score between 0–100
  return Math.max(
    0,
    Math.min(score, 100)
  );
}