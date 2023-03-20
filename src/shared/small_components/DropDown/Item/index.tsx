import React from "react";

const DropdownItem = ({ ...props }: any) => {
  return (
    <>
      <li>{props.children}</li>
    </>
  );
};

export default DropdownItem;
