import * as React from "react";
import { useState, useEffect } from "react";
import TransactionService from "../../../../service/transaction";
import { convertToDate } from "../../../../utils/helpers";
import { debounce } from "lodash";
import Pagination from "../../../Shared/Pagination";
function Transactions() {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchData, setIsFetchData] = useState(false);
  const [contentSearch, setContentSearch] = useState("");
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 0,
    totalDocs: 0,
    totalPages: 0,
  });

  const params = {
    page: 1,
    limit: 5,
    search: contentSearch || "",
  };

  const handleChangeSearch = (e: any) => {
    setContentSearch(e.target.value);
    handleDebounceSearch(e.target.value);
  };
  // eslint-disable-next-line
  const handleDebounceSearch = React.useCallback(
    debounce((searchValue) => {
      fetchData({
        ...params,
        search: searchValue,
      });
    }, 400),
    []
  );
  const fetchData = async (params: any) => {
    const param = {
      ...params,
      search: params.search || "",
    };
    setIsLoading(true);

    try {
      const response: any = await TransactionService.getAll(param);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
        setPagination(response?.data?.paginate);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(params);
    setContentSearch("");
  }, [isFetchData]);
  return (
    <div className="relative overflow-x-auto shadow-lg  mt-3 rounded">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div>
            <b> Danh sách giao dịch </b>
            <p> Các giao dịch gần đây</p>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2  w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhấn vào đây để tìm kiếm.."
            value={contentSearch || ""}
            onChange={handleChangeSearch}
          />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {" "}
              <th scope="col" className="px-6 py-3">
                MÃ GIAO DỊCH
              </th>
              <th scope="col" className="px-6 py-3">
                NỘI DUNG GIAO DỊCH
              </th>
              <th scope="col" className="px-6 py-3">
                NGÀY TẠO
              </th>
              <th scope="col" className="px-6 py-3">
                GIÁ TRỊ
              </th>
              <th scope="col" className="px-6 py-3">
                TÌNH TRẠNG
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: any) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.transaction?.app_trans_id}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Giao dịch của{" "}
                  <b>{item?.user?.first_name + " " + item?.user?.last_name}</b>:{" "}
                  {item?.transaction?.description}
                </th>
                <td className="px-6 py-4">
                  {convertToDate(item?.transaction?.createdAt)}
                </td>
                <td className="px-6 py-4">
                  {item?.transaction?.value.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {item?.transaction?.status == 1 ? "Hoàn thành" : ""}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-3">
          {pagination?.totalPages > 1 && (
            <Pagination
              setIsLoading={setIsLoading}
              fetchData={fetchData}
              paginate={pagination}
              params={params}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
