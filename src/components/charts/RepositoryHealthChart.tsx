import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
} from "recharts";

import type { Repository } from "../../types/github";

import {
calculateRepositoryHealth,
} from "../../utils/repositoryHealth";

type Props={
repositories:Repository[];
};

function RepositoryHealthChart({
repositories,
}:Props){

const data=

repositories

.slice(0,10)

.map(repo=>({

name:repo.name,

health:

calculateRepositoryHealth(repo),

}));

return(

<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 w-full h-[420px]">
<h2 className="text-xl font-semibold text-slate-700 mb-6">
Top Repository Health

</h2>

<ResponsiveContainer
width="100%"
height="90%"
>

<BarChart
data={data}
>

<XAxis
dataKey="name"
hide
/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="health"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}

export default RepositoryHealthChart;