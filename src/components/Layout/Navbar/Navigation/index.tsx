import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import useTheme from "../../../../hooks/useTheme";

const Navigation = () => {
  const { styles }: any = useTheme();
  return (
    <div className="flex gap-x-5 mr-5">
      <Link to={".."}>
        <AiOutlineArrowLeft
          className={`${styles.navbar.navigation.color} cursor-pointer`}
        />
      </Link>
      <AiOutlineArrowRight
        className={`${styles.navbar.navigation.color} cursor-pointer`}
      />
    </div>
  );
};

export default Navigation;
