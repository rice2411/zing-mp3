import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useTheme from "../../../../hooks/useTheme";

const Navigation = () => {
  const { styles }: any = useTheme();
  return (
    <div className="flex gap-x-5 mr-5">
      <AiOutlineArrowLeft
        className={`${styles.navbar.navigation.color} cursor-pointer`}
      />
      <AiOutlineArrowRight
        className={`${styles.navbar.navigation.color} cursor-pointer`}
      />
    </div>
  );
};

export default Navigation;
