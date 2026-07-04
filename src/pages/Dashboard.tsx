import Layout from "../components/layout/Layout";

import OrganizationInfo from "../components/overview/OrganizationInfo";
import OverviewCards from "../components/overview/OverviewCards";

import { useOrganization } from "../hooks/useOrganization";
import { useRepositories } from "../hooks/useRepositories";

import { useToken } from "../context/TokenContext";
import { setGithubToken } from "../services/githubApi";
import { useEffect } from "react";
import RepositoryTable from "../components/repository/RepositoryTable";
import LanguageChart from "../components/charts/LanguageChart";
import AliveDeadChart from "../components/charts/AliveDeadChart";
import RepositoryHealthChart from "../components/charts/RepositoryHealthChart";
import { useContributors } from "../hooks/useContributors";

import ContributorLeaderboard from "../components/contributor/ContributorLeaderboard";
import { useAnalytics } from "../hooks/useAnalytics";
import ErrorMessage from "../components/common/ErrorMessage";
function Dashboard() {

    const { organization,token } = useToken();
   useEffect(() => {

   setGithubToken(token);

}, [token]);
console.log(token);
    const {
        data: org,
        isLoading: loadingOrg,
        error:orgError,
        refetch:refetchOrg,
    } = useOrganization(organization);

    const {
        data: repos,
        isLoading: loadingRepos,
        error:repoError,
        refetch:refetchRepos,
    } = useRepositories(organization);

    
    const analytics =
  useAnalytics(repos ?? []);
  const {
  data: contributors = [],
} = useContributors(
  organization,
  repos ?? []
);

    
    if (loadingOrg || loadingRepos)
        return <h1 className="p-10">Loading...</h1>;

   if(orgError){

return(

<ErrorMessage

title="Organization Not Found"

message="Please check the organization name and try again."

retry={()=>{

refetchOrg();

}}

 />

);

}

if(repoError){

return(

<ErrorMessage

title="Unable to Load Repositories"

message="GitHub API returned an error."

retry={()=>{

refetchRepos();

}}

 />

);

}

    return (
  <Layout>
    {/* Top Section */}
    <div className="space-y-6">

      <div className="mb-8">
    <OrganizationInfo organization={org} />
</div>

<div className="mb-8">
    <OverviewCards repositories={repos} />
</div>

      {/* Analytics Cards */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-2 mb-10">
        <div className="bg-green-50 rounded-2xl border border-green-200 p-6 shadow-sm">
          <p className="text-sm text-green-700 font-medium">
            Average Health
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.averageHealth}%
          </h2>
        </div>

        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 shadow-sm">
          <p className="text-sm text-blue-700 font-medium">
            Alive Repositories
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.aliveDead.alive}
          </h2>
        </div>

        <div className="bg-red-50 rounded-2xl border border-red-200 p-6 shadow-sm">
          <p className="text-sm text-red-700 font-medium">
            Dead Repositories
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.aliveDead.dead}
          </h2>
        </div>

        <div className="bg-purple-50 rounded-2xl border border-purple-200 p-6 shadow-sm">
          <p className="text-sm text-purple-700 font-medium">
            Top Language
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {analytics.languages[0]?.name}
          </h2>
        </div>

      </div>

      {/* ================= Repository Analytics ================= */}

<section className="mt-10">

  <div className="flex items-center mb-8"  style={{ marginTop: "8px",marginBottom: "8px" }} >

    <h2 className="text-4xl font-bold text-slate-800 whitespace-nowrap mb-8">

        Repository Analytics

    </h2>

    <div className="flex-1 h-px bg-gray-300 ml-6" ></div>

</div>

  {/* Top Charts */}

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <LanguageChart data={analytics.languages} />

    <AliveDeadChart
      alive={analytics.aliveDead.alive}
      dead={analytics.aliveDead.dead}
    />

  </div>

  {/* Full Width Health */}

  <div className="mt-6">

    <RepositoryHealthChart repositories={repos} />

  </div>

  {/* Bottom */}

  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

    <div className="xl:col-span-2">

      <RepositoryTable repositories={repos} />

    </div>

    <div>

      <ContributorLeaderboard
        contributors={contributors}
      />

    </div>

  </div>

</section>
    </div>

  </Layout>
);
}

export default Dashboard;