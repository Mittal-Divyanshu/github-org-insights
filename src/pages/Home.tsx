import { useNavigate } from "react-router-dom";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import SearchInput from "../components/common/SearchInput";

import { useToken } from "../context/TokenContext";

function Home() {
  const navigate = useNavigate();

  const { organization, token, setOrganization, setToken } = useToken();

  const handleAnalyze = () => {
    if (!organization.trim()) {
      alert("Please enter a GitHub organization.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 px-4">
      <Card>
        <div className="w-full space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              GitHub Org Insights
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Analyze any GitHub organization with good analytics, charts and
              contributor insights.
            </p>
          </div>

          <div className="space-y-5">
            <SearchInput
              label="Organization Name"
              placeholder="microsoft"
              value={organization}
              onChange={setOrganization}
            />

            <SearchInput
              label="GitHub Personal Access Token (Optional)"
              placeholder="ghp_xxxxxxxxxxxxxxxxx"
              value={token}
              onChange={setToken}
            />

<div style={{ marginTop: "8px" }}>
    <Button
        title="Analyze Organization"
        onClick={handleAnalyze}
    />
</div>          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-gray-500 text-sm mb-5">
              Dashboard Features
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-slate-100 hover:bg-slate-200 transition p-6 text-center">
                <div className="text-3xl">📊</div>
                <p className="font-semibold mt-2">Analytics Dashboard</p>
              </div>

              <div className="rounded-2xl bg-slate-100 hover:bg-slate-200 transition p-6 text-center">
                <div className="text-3xl">📈</div>
                <p className="font-semibold mt-2">Charts</p>
              </div>

              <div className="rounded-2xl bg-slate-100 hover:bg-slate-200 transition p-6 text-center">
                <div className="text-3xl">👥</div>
                <p className="font-semibold mt-2">Contributors</p>
              </div>

              <div className="rounded-2xl bg-slate-100 hover:bg-slate-200 transition p-6 text-center">
                <div className="text-3xl">⚡</div>
                <p className="font-semibold mt-2">Rate Limit</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;