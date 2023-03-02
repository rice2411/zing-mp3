import React from "react";
import useTheme from "../../../../hooks/useTheme";

function Button({ text, isActive, className, activeClass }: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <button
        className={`${styles.body.textColor} ${
          className ? className : "h-10 w-10"
        } ${
          isActive != null ? (isActive ? activeClass[0] : activeClass[1]) : ""
        }`}
      >
        {text ? text : "button"}
      </button>
    </>
  );
}

export default Button;
