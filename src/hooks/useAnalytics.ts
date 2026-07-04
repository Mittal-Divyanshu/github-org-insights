import type { Repository } from "../types/github";

import {
    getOverviewStats,
    getAliveDead,
    getLanguageStats,
    getAverageHealth,
    getMostStarredRepo,
    getRecentlyUpdatedRepo,
} from "../utils/analytics";

export function useAnalytics(
    repositories: Repository[]
) {

    if (repositories.length === 0) {

        return {

            overview: {
                totalRepositories: 0,
                totalStars: 0,
                totalForks: 0,
                totalIssues: 0,
            },

            aliveDead: {
                alive: 0,
                dead: 0,
            },

            languages: [],

            averageHealth: 0,

            mostStarred: null,

            recentlyUpdated: null,

        };

    }

    return {

        overview:
            getOverviewStats(repositories),

        aliveDead:
            getAliveDead(repositories),

        languages:
            getLanguageStats(repositories),

        averageHealth:
            getAverageHealth(repositories),

        mostStarred:
            getMostStarredRepo(repositories),

        recentlyUpdated:
            getRecentlyUpdatedRepo(repositories),

    };

}