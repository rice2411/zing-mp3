import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className="flex gap-x-5 mx-10">
      <AiOutlineArrowLeft />
      <AiOutlineArrowRight />
    </div>
  );
};

export default Navigation;
