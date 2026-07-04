export interface Organization {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  description: string;
  blog: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  archived: boolean;
  size: number;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
}

export interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface RateLimit {
  limit: number;
  remaining: number;
  reset: number;
}