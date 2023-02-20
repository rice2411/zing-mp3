import React, { useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

import Item from "../../Shared/Item";

const Recently = () => {
  const { styles }: any = useTheme();

  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Gần đây
        </h2>
        <a
          href="#"
          className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-sm uppercase flex items-center justify-center`}
        >
          Tất cả
          <RiArrowRightSLine />
        </a>
      </div>
      <div className="flex justify-between mt-3">
        {data.map((item, index) => (
          <>
            <Item index={index} item={item} className={` h-36 w-36 `} />
          </>
        ))}
      </div>
    </>
  );
};

export default Recently;
