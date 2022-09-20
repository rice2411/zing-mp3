import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddPLayList = () => {
  return (
    <div className="hidden xl:flex xl lg:flex justify-center items-center  cursor-pointer w-[-webkit-fill-available] p-3 pt-3 text-base text-white  font-medium  border-t border-gray-700">
      <AiOutlinePlus />
      <span className="ml-2 "> Tạo playlist mới</span>
    </div>
  );
};

export default AddPLayList;
