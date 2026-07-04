import type { Repository } from "../../types/github";

import RepositoryHealthBadge
from "./RepositoryHealthBadge";

import { calculateRepositoryHealth }
from "../../utils/repositoryHealth";
import { usePagination } from "../../hooks/usePagination";
type Props={
    repositories:Repository[];
};

function RepositoryTable({
    repositories,
}:Props){
    const sortedRepositories =
    [...repositories].sort(
        (a,b)=>
        b.stargazers_count-
        a.stargazers_count
    );

const {

page,

totalPages,

currentData,

nextPage,

previousPage,

}=usePagination(
sortedRepositories,
20
);

    return(

<div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">

<div className="overflow-auto max-h-[700px]">

<table className="w-full">

<thead className="bg-slate-100 sticky top-0">
<tr className="hover:bg-blue-50 transition border-b">

<th className="text-left p-3">
Repository
</th>

<th className="text-left p-3">
Language
</th>

<th className="text-left p-3">
Stars
</th>

<th className="text-left p-3">
Forks
</th>

<th className="text-left p-3">
Health
</th>

<th className="text-left p-3">
Updated
</th>

</tr>

</thead>

<tbody>

{

currentData.map(repo=>(

<tr
key={repo.id}
className="border-b hover:bg-slate-50"
>

<td className="p-3">

<a

href={repo.html_url}

target="_blank"

className="text-blue-600 hover:underline"

>

{repo.name}

</a>

</td>

<td className="p-3">

{repo.language ?? "-"}

</td>

<td className="p-3">

⭐ {repo.stargazers_count}

</td>

<td className="p-3">

🍴 {repo.forks_count}

</td>

<td className="p-3">

<RepositoryHealthBadge

score={
calculateRepositoryHealth(repo)
}

/>

</td>

<td className="p-3">

{

new Date(

repo.updated_at

).toLocaleDateString()

}

</td>

</tr>

))

}

</tbody>

</table>
<div className="flex items-center justify-between mt-6">

<p className="text-sm text-gray-500">

Showing page

<b> {page} </b>

of

<b> {totalPages}</b>

</p>

<div className="flex gap-3">

<button

onClick={previousPage}

disabled={page===1}

className="px-4 py-2 rounded-lg border disabled:opacity-40"

>

Previous

</button>

<button

onClick={nextPage}

disabled={page===totalPages}

className="px-4 py-2 rounded-lg border disabled:opacity-40"

>

Next

</button>

</div>

</div>

</div>

</div>

);

}

export default RepositoryTable;