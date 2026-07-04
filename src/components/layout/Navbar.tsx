import RateLimitWidget from "../rateLimit/RateLimitWidget";

function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="flex items-center gap-4">


          <div>

            <h1 className="text-2xl font-bold">

              GitHub Org Insights

            </h1>

            <p className="text-slate-400 text-sm">

              Organization Analytics Dashboard

            </p>

          </div>

        </div>

        <RateLimitWidget/>

      </div>

    </header>
  );
}

export default Navbar;