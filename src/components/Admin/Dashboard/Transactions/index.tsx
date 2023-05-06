import * as React from "react";
import { useState, useEffect } from "react";
import TransactionService from "../../../../service/transaction";
import { convertToDate } from "../../../../utils/helpers";
function Transactions() {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await TransactionService.getAll();
      const dataRaw = response?.data?.data;

      if (dataRaw) {
        setData(dataRaw);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-lg  mt-3 rounded">
      <div className="p-5">
        <b> Danh sách giao dịch </b>
        <p> Các giao dịch gần đây</p>
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
      </div>
    </div>
  );
}

export default Transactions;
