import * as React from "react";
import { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { FaItunesNote } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import TransactionService from "../../../../service/transaction";
function Statistic() {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await TransactionService.statistic();
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
    <div className="flex justify-between  rounded">
      <div className="max-w-sm p-6 flex justify-between items-center min-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 ">
              Doanh thu
            </h5>
          </a>
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-white">
            {data?.total?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="text-white p-3 text-3xl  text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
          <RiMoneyDollarCircleLine />
        </div>
      </div>
      <div className="max-w-sm p-6 flex justify-between items-center min-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 ">
              Người dùng
            </h5>
          </a>
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-white">
            {data?.users}
          </p>
        </div>
        <div className="text-white text-3xl p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
          <BiUser />
        </div>
      </div>
      <div className="max-w-sm p-6 flex justify-between items-center min-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 ">
              Bài hát
            </h5>
          </a>
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-white">
            {data?.songs}
          </p>
        </div>
        <div className="text-white p-3 text-3xl  text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
          <FaItunesNote />
        </div>
      </div>
      <div className="max-w-sm p-6 flex justify-between items-center min-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 ">
              Album
            </h5>
          </a>
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-white">
            {data?.albums}
          </p>
        </div>
        <div className="text-white p-3 text-3xl  text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
          <BsMusicNoteList />
        </div>
      </div>
    </div>
  );
}

export default Statistic;
