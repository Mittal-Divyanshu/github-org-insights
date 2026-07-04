type Props = {
    score: number;
};

function RepositoryHealthBadge({
    score,
}: Props) {

    let color =
        "bg-red-500";

    if (score >= 80)
        color =
            "bg-green-500";

    else if (score >= 60)
        color =
            "bg-yellow-500";

    return (

        <span
            className={`${color} text-white px-3 py-1 rounded-full text-sm`}
        >

            {score}%

        </span>

    );
}

export default RepositoryHealthBadge;