import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useTheme from "../../../../../hooks/useTheme";

const AddPLayList = () => {
  const { styles }: any = useTheme();
  return (
    <div
      style={{ borderColor: styles.sideBar.divide.color }}
      className={`${styles.sideBar.active.textColor} ${styles.sideBar.hover.textDark} hidden xl:flex xl lg:flex justify-center items-center  cursor-pointer w-[-webkit-fill-available] p-3 pt-3 text-base  font-medium  border-t `}
    >
      <AiOutlinePlus />
      <span className="ml-2 "> Tạo playlist mới</span>
    </div>
  );
};

export default AddPLayList;
