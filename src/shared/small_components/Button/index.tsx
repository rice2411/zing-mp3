import React from "react";

const ButtonIcon = ({ className, ...props }: any) => {
  return (
    <button
      className={`inline-flex items-center justify-center mr-2  transition-colors duration-150  rounded-full ${className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
