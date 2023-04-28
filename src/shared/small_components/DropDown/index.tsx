import React, { useState, useRef, ReactNode, ReactElement } from "react";

import useTheme from "../../../hooks/useTheme";

const liClass = `hover:bg-[#ffffff1a]  rounded block px-4 py-2  flex text-xs  items-center`;
const dropDownIconClass = `h-[20px] w-[20px] mr-2`;

const Dropdown = ({ className, button, content, isShowTop }: any) => {
  const [isShow, setIsShow] = useState(false);
  const { styles }: any = useTheme();
  return (
    <div>
      {button(() => {
        setIsShow((prevState) => !prevState);
      })}
      {isShow ? (
        <div className="relative z-[999]">
          <div
            className={` ${styles.dropdown.backgroundColor} ${
              styles.dropdown.textColor
            } z-10   rounded-lg shadow   absolute ${
              isShowTop && "bottom-full"
            } right-0 mt-3 py-0.5 px-2`}
          >
            {content}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
export { liClass, dropDownIconClass };
