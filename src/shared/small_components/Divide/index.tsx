import React from "react";
import useTheme from "../../../hooks/useTheme";

const Divide = ({ className }: any) => {
  const { styles }: any = useTheme();
  return (
    <div
      className={` border-t-[1px] border-[${styles.dropdown.borderColor}] ${
        className ?? ""
      }`}
    ></div>
  );
};

export default Divide;
