import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import type { LanguageStat } from "../../utils/analytics";

type Props = {
  data: LanguageStat[];
};

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
];

function LanguageChart({ data }: Props) {
  return (
<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 w-full h-[420px]">
<h2 className="text-xl font-semibold text-slate-700 mb-6">        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            label
            outerRadius={120}
          >

            {data.map((_, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

            <Legend />
        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default LanguageChart;