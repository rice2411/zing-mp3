import * as React from "react";
import { useState, useEffect } from "react";
import TransactionService from "../../../../service/transaction";
import { convertToDate } from "../../../../utils/helpers";
import { debounce } from "lodash";
import Pagination from "../../../Shared/Pagination";
import SongService from "../../../../service/song";
import { getFile } from "../../../../constant/file";
import ArtistService from "../../../../service/artist";
function AdminArtist() {
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
    limit: 10,
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
      const response: any = await ArtistService.getAll(param);
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
            <p>
              <b> Danh sách nghệ sĩ</b>
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Thêm mới
            </button>
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
              <th scope="col" className="px-6 py-3">
                STT
              </th>
              <th scope="col" className="px-6 py-3">
                TÊN
              </th>

              <th scope="col" className="px-6 py-3">
                HÀNH ĐỘNG
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, index: any) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {10 * (pagination?.page - 1) + index + 1}
                </td>
                <td
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={getFile(item?.avatar)}
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold flex items-center">
                      {item?.name}{" "}
                      <div
                        className={`ml-2 ${
                          item?.is_vip ? "" : "hidden"
                        } h-5 w-5`}
                      >
                        <span className="overflow-hidden ">
                          <img
                            src="/icon/vip-label.svg"
                            className="w-full h-full"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Xoá
                  </button>
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

export default AdminArtist;
