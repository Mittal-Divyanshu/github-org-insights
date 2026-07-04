import { useRateLimit } from "../../hooks/useRateLimit";

function RateLimitWidget() {

    const { data } = useRateLimit();

    if (!data) return null;

    const percent =
        (data.remaining / data.limit) * 100;

    return (

<div className="bg-slate-800 rounded-xl px-5 py-3 min-w-[220px]">

<div className="flex justify-between text-sm">

<span>

API Remaining

</span>

<span>

{data.remaining}/{data.limit}

</span>

</div>

<div className="w-full h-2 rounded bg-slate-700 mt-3">

<div

className="h-2 rounded bg-green-500"

style={{

width:`${percent}%`

}}

>

</div>

</div>

</div>

);

}

export default RateLimitWidget;