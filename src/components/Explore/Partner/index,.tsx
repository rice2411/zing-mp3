import React from "react";
import { data } from "./data";

const Partner = () => {
  return (
    <div className="mt-10 text-center ">
      <p className="text-gray-500 font-bold text-xs mb-5">ĐỐI TÁC ÂM NHẠC</p>
      <div className="flex flex-wrap  justify-center items-center">
        {data.map((item, index) => (
          <div className="rounded  bg-white  mr-5 mb-5">
            <img src={item} className="w-[121px] h-[68px] p-2 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
