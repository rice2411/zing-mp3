import React, { useEffect, useState } from "react";

export default function Pagination({
  fetchData,
  paginate,
  setIsLoading = null,
  params,
  scrollTo = false,
}: any) {
  const [pagination, setPagination] = useState(null);
  const [pageNeighbours, setPageNeighbours] = useState(3);
  function onPaginateChange(page: any) {
    const windowGlobal = typeof window !== "undefined" && window;
    if (windowGlobal && scrollTo) {
      windowGlobal.scrollTo(0, 0);
    }
    if (setIsLoading) {
      setIsLoading(true);
    }
    params = { ...params, page: page };
    fetchData(params);
  }
  function fetchPagination(currentPage: any) {
    let pagina = [];
    let startPage = Math.max(1, currentPage - pageNeighbours);
    let endPage = Math.min(
      paginate?.totalPages || 1,
      currentPage + pageNeighbours
    );

    const totalNumbers = pageNeighbours * 2 + 3;

    if (currentPage - startPage < pageNeighbours) {
      endPage = Math.min(
        paginate?.totalPages || 1,
        endPage + pageNeighbours - (currentPage - startPage) + 1
      );
    }
    if (endPage - currentPage < pageNeighbours) {
      startPage = Math.max(
        1,
        startPage - (pageNeighbours - (endPage - currentPage)) - 1
      );
    }

    if (startPage > 1) {
      pagina.push(
        <li key={123}>
          <a
            onClick={() =>
              fetchPagination(currentPage - 2 * pageNeighbours - 1)
            }
            className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
            </svg>
          </a>
        </li>
      );
    }

    for (let i = startPage; i <= endPage; ++i) {
      pagina.push(
        <li key={i}>
          <a
            onClick={() => onPaginateChange(i)}
            className={`${
              paginate?.page == i
                ? "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
                : ""
            } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i}
          </a>
        </li>
      );
    }

    if (paginate?.totalPages - endPage >= 1)
      pagina.push(
        <li key={321}>
          <a
            onClick={() =>
              fetchPagination(currentPage + 2 * pageNeighbours + 1)
            }
            className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
            </svg>
          </a>
        </li>
      );
    setPagination(pagina);
  }

  useEffect(() => {
    fetchPagination(paginate?.page || 1);
  }, [paginate]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">{pagination}</ul>
    </nav>
  );
}
