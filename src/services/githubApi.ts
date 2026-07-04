import axios from "axios";
import { BASE_URL } from "../constants/api";

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export function setGithubToken(token: string) {
  if (token?.trim()) {
    githubApi.defaults.headers.common.Authorization = `Bearer ${token.trim()}`;
  } else {
    delete githubApi.defaults.headers.common.Authorization;
  }
}

export default githubApi;