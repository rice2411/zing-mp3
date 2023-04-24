import React from "react";

const ButtonIcon = ({ onClick, className, refButton, ...props }: any) => {
  return (
    <button
      ref={refButton}
      onClick={onClick}
      className={`inline-flex items-center justify-center mr-2 transition-colors duration-150  ${className}`}
    >
      {props.children}
    </button>
  );
};

export default ButtonIcon;
