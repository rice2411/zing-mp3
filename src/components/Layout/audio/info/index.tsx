import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";

const Info = ({ image, title, artist }: any) => {
  const { styles }: any = useTheme();
  return (
    <div
      className={`info flex items-center ju ml-3 min-w-[250px] w-1/5 ${styles.audio.info.textColor}`}
    >
      <img src={`${image}`} className="h-16 w-16 rounded mr-3" />
      <div className="flex flex-col mr-6">
        <span className="w-max font-semibold text-sm">{title}</span>
        <span
          className={`${styles.audio.info.textDark}  font-extralight text-xs`}
        >
          {artist}
        </span>
      </div>
      <div className="action flex ml-auto">
        <AiOutlineHeart className="mr-2" />
        <FiMoreHorizontal />
      </div>
    </div>
  );
};

export default Info;
