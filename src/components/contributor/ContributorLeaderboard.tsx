import type { ContributorStat } from "../../types/contributor";

type Props = {
  contributors: ContributorStat[];
};

function ContributorLeaderboard({
  contributors,
}: Props) {

  return (

<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6  h-full">
<h2 className="text-2xl font-bold mb-5">

Top Contributors

</h2>

<div className="space-y-3">

{

contributors

.slice(0,10)

.map((user,index)=>(

<div
key={user.id}
className="flex justify-between items-center border rounded-lg p-3"
>

<div className="flex items-center gap-3">

<span className="font-bold">

#{index+1}

</span>

<img
src={user.avatar_url}
className="w-10 h-10 rounded-full"
/>

<div>

<p className="font-semibold">

{user.login}

</p>

</div>

</div>

<div className="font-bold">

{user.contributions}

commits

</div>

</div>

))

}

</div>

</div>

);

}

export default ContributorLeaderboard;