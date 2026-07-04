import type { Repository } from "../../types/github";

import StatCard from "./StatCard";

type Props = {
  repositories: Repository[];
};

function OverviewCards({
  repositories,
}: Props) {

  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const totalIssues = repositories.reduce(
    (sum, repo) => sum + repo.open_issues_count,
    0
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      <StatCard
        title="Repositories"
        value={repositories.length}
      />

      <StatCard
        title="Stars"
        value={totalStars.toLocaleString()}
      />

      <StatCard
        title="Forks"
        value={totalForks.toLocaleString()}
      />

      <StatCard
        title="Open Issues"
        value={totalIssues.toLocaleString()}
      />

    </div>
  );
}

export default OverviewCards;