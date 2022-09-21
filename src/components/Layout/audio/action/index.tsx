import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows } from "react-icons/vsc";
import { BsFillVolumeUpFill } from "react-icons/bs";
const Actions = () => {
  return (
    <div className="flex gap-x-7 text-white w-1/5 min-w-[300px]">
      <MdOutlineOndemandVideo />
      <GiMicrophone />
      <VscMultipleWindows />
      <BsFillVolumeUpFill />
    </div>
  );
};

export default Actions;
