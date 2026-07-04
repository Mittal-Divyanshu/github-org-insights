export const GITHUB_ENDPOINTS = {
  organization: (org: string) => `/orgs/${org}`,

  repositories: (org: string, page: number) =>
    `/orgs/${org}/repos?per_page=100&page=${page}`,

  contributors: (owner: string, repo: string) =>
    `/repos/${owner}/${repo}/contributors`,

  languages: (owner: string, repo: string) =>
    `/repos/${owner}/${repo}/languages`,

  commitActivity: (owner: string, repo: string) =>
    `/repos/${owner}/${repo}/stats/commit_activity`,

  rateLimit: () => "/rate_limit",
};