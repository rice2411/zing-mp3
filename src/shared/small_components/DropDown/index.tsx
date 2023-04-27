import React, { useState, useRef, ReactNode, ReactElement } from "react";

import useTheme from "../../../hooks/useTheme";

const Dropdown = ({ className, button, content }: any) => {
  const { styles }: any = useTheme();
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      {button(() => {
        setIsShow((prevState) => !prevState);
      })}
      {isShow ? content : ""}
    </div>
  );
};

export default Dropdown;
