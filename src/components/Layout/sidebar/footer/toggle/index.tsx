import React from "react";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const Toggle = ({ handleToggleSidebar, isToggle }: any) => {
  return (
    <button
      className={`${
        isToggle ? "ml-auto mr-2" : ""
      } text-center h-10 w-10  button rounded-full text-white bg-[#40384E] px-3 block xl:hidden lg:hidden hover:bg-[#3D354B] mb-3`}
      onClick={handleToggleSidebar}
    >
      {isToggle ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
    </button>
  );
};
