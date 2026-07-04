import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

type Props = {
  alive: number;
  dead: number;
};

function AliveDeadChart({
  alive,
  dead,
}: Props) {

  const data = [

    {
      name: "Alive",
      value: alive,
    },

    {
      name: "Dead",
      value: dead,
    },

  ];

  return (

<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 w-full h-[420px]">
<h2 className="text-xl font-semibold text-slate-700 mb-6">
Repository Status

</h2>

<ResponsiveContainer
width="100%"
height="90%"
>

<PieChart>

<Pie
data={data}
dataKey="value"
outerRadius={120}
label
>

<Cell fill="#22c55e"/>

<Cell fill="#ef4444"/>

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

);

}

export default AliveDeadChart;