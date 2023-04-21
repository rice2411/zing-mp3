import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../../../../hooks/useTheme";

const Navigation = () => {
  const { styles }: any = useTheme();
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-5 mr-5 ">
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <AiOutlineArrowLeft
          className={`${styles.navbar.navigation.color} cursor-pointer`}
        />
      </div>
      <div
        onClick={() => {
          navigate(1);
        }}
      >
        <AiOutlineArrowRight
          className={`${styles.navbar.navigation.color} cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Navigation;
