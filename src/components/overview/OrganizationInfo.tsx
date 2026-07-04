import type { Organization } from "../../types/github";

type Props = {
  organization: Organization;
};

function OrganizationInfo({ organization }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">

      <div className="flex items-center gap-5">

        <img
          src={organization.avatar_url}
          alt={organization.login}
          className="w-16 h-16 rounded-full border"
        />

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            {organization.name || organization.login}
          </h1>

          <p className="text-gray-500 mt-1">
            {organization.description || "No description available"}
          </p>

          <a
            href={`https://github.com/${organization.login}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            github.com/{organization.login}
          </a>

        </div>

      </div>

    </div>
  );
}

export default OrganizationInfo;