import React, { useState } from "react";
import { getFile } from "../../../../constant/file";
import { BsPlayFill } from "react-icons/bs";

const OutStadingItem = ({ item }: any) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className=" flex items-center bg-[#231B2E] hover:bg-[#2F2739] min-w-[370px] min-h-[94px] rounded"
    >
      <div className="p-3 flex items-center">
        <div
          className="relative hover:cursor-pointer flex items-center justify-center"
          onClick={() => {
            // handlePlayOneSong(song, albumId);
          }}
        >
          <div className="w-[84px] h-[84px] overflow-hidden rounded-md ">
            <img
              src={getFile(item?.avatar || item?.image)}
              className={`${item?.avatar ? "rounded-full" : "rounded"}  ${
                isHover ? "opacity-50" : ""
              }`}
            />
          </div>
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5 ${
              isHover ? "opacity-75 block" : "hidden"
            }`}
          >
            <BsPlayFill className="text-3xl " />
          </div>
        </div>

        <div className="ml-3">
          <p className="text-xs text-[hsla(0,0%,100%,0.5)]">
            {item?.avatar
              ? "Nghệ sĩ"
              : item?.publicationYear
              ? "Album"
              : "Bài hát"}
          </p>
          <p className="font-bold text-white">{item?.name}</p>
          <p className="text-xs text-[hsla(0,0%,100%,0.5)]">
            {item?.avatar ? `${item?.followers} quan tâm` : item?.artist?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutStadingItem;
