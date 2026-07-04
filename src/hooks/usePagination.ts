import { useState } from "react";

export function usePagination<T>(
    data: T[],
    itemsPerPage = 20
) {

    const [page, setPage] = useState(1);

    const totalPages =
        Math.ceil(data.length / itemsPerPage);

    const start =
        (page - 1) * itemsPerPage;

    const end =
        start + itemsPerPage;

    const currentData =
        data.slice(start, end);

    function nextPage() {
        setPage((prev) =>
            Math.min(prev + 1, totalPages)
        );
    }

    function previousPage() {
        setPage((prev) =>
            Math.max(prev - 1, 1)
        );
    }

    return {

        page,

        totalPages,

        currentData,

        nextPage,

        previousPage,

        setPage,

    };

}