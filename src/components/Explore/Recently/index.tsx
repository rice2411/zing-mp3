import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

const Recently = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className="flex justify-between">
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
      <div className="flex gap-x-4 justify-between mt-3">
        {data.map((item) => (
          <div>
            <img src={item.avatar} />
            <h3
              className={`${styles.body.subTextColor} ${styles.body.hover.textColor} `}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recently;
