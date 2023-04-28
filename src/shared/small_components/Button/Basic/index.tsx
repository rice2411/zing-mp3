import React from "react";
import useTheme from "../../../../hooks/useTheme";

function Button({
  text,
  isActive = false,
  className,
  activeClass,
  isDisabled = false,
  onClick,
}: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`${className ? className : "h-10 w-10"} ${
          styles.body.textColor
        }  ${isActive ? activeClass : ""}`}
      >
        {text ? text : "button"}
      </button>
    </>
  );
}

export default Button;
