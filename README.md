# GitHub Org Insights Dashboard

A modern GitHub Organization Analytics Dashboard built with **React, TypeScript, Vite, Tailwind CSS, React Query, Axios, and Recharts**.

The application analyzes an entire GitHub organization and provides meaningful insights beyond the GitHub API by computing repository health, contributor rankings, language distribution, and organization-wide statistics.

---

#Deployed Link->To use on your device go to 
https://github-org-insights.vercel.app/

## Features

### Organization Overview
- Organization profile information
- Total repositories
- Total stars
- Total forks
- Total open issues

### Repository Analytics
- Repository Health Score (Computed Metric)
- Alive vs Dead repository analysis
- Language distribution chart
- Repository health comparison chart

### Contributor Insights
- Top contributors leaderboard
- Ranked by total contributions across repositories

### GitHub API
- Personal Access Token support
- GitHub Rate Limit monitoring
- Remaining API requests displayed

### Performance Optimizations
- React Query client-side caching
- Automatic pagination for organizations with more than 100 repositories
- Request throttling using `p-limit`
- Repository table pagination
- Background cache management

---

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Axios
- Recharts
- p-limit

---

## Installation

Clone the repository

```bash
git clone https://github.com/Mittal-Divyanshu/github-org-insights
```

Go to project folder

```bash
cd github-org-insights
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

## Personal Access Token

GitHub allows only **60 requests/hour** without authentication.

For large organizations, create a Personal Access Token.

1. Open GitHub
2. Settings
3. Developer Settings
4. Personal Access Tokens
5. Fine-grained Personal Access Token
6. Generate Token
7. Paste the token on the Home page

Only **Read-only Repository Metadata** permission is required.

---

## Repository Health Score

Repository Health is a computed metric and is **not provided by the GitHub API**.

The score is calculated using:

- Recent repository activity
- Open issues count
- Archived repository status
- Repository popularity (Stars)

Final score ranges from **0 to 100**.

---

## Caching Strategy

The application uses React Query.

- Client-side caching
- Configurable stale time
- Background refetch disabled
- Cached organization data reused on repeat searches

---

## Concurrency Strategy

Fetching contributors and language data for many repositories can generate hundreds of API requests.

To avoid GitHub API throttling, the application uses:

- `p-limit`
- Maximum **5 concurrent requests**

This prevents overwhelming the GitHub API while maintaining good performance.

---

## Pagination Strategy

Large organizations may contain hundreds of repositories.

The application:

- Automatically fetches all repository pages
- Displays repositories using client-side pagination
- Prevents rendering hundreds of rows simultaneously

---

## Error Handling

The application handles:

- Invalid organization names
- Invalid GitHub tokens
- GitHub API failures
- Network errors

