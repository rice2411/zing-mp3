import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import { getFile } from "../../../constant/file";
import useTheme from "../../../hooks/useTheme";
import Button from "../../../shared/small_components/Button/Basic";
import NewReleaseItem from "../../Shared/NewReleaseItem";
import useAudio from "../../../hooks/useAudio";

const ItemChart = ({ item, index, handleHightLightLine, rank }: any) => {
  const { styles }: any = useTheme();
  const { handlePlayOneSong }: any = useAudio();
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    handleHightLightLine(index);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    handleHightLightLine(-1);
    setIsHover(false);
  };
  const rankSong = (index: number) => {
    const rankClass = ["number_1", "number_2", "number_3"];
    return rankClass[index];
  };
  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className={`mb-3 flex items-center ${
        isHover || rank ? "bg-[hsla(0,0%,100%,.2)]" : ""
      } rounded-md w-full min-w-[380px] px-2 py-1 bg-[hsla(0,0%,100%,.07)] relative`}
    >
      <span className={`number ${rankSong(index)} text-4xl font-black mx-2`}>
        {index + 1}
      </span>
      <div className="group items-center  overflow-hidden">
        <div className="p-2 flex items-center grid grid-cols-5 place-content-center">
          <div
            className="relative hover:cursor-pointer flex items-center justify-center"
            onClick={() => {
              handlePlayOneSong(item);
            }}
          >
            <div className="min-w-[60px] min-h-[60px] overflow-hidden rounded-md relative">
              <img
                src={getFile(item?.image)}
                className={`w-full h-full absolute `}
              />

              <div
                className={`bg-gray-900 w-full h-full  ${
                  isHover || rank ? "absolute opacity-50" : ""
                }`}
              ></div>
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5  ${
                isHover || rank ? "opacity-75" : "hidden"
              }  `}
            >
              <BsPlayFill className="text-3xl " />
            </div>
          </div>
          <div className="leading-6 col-span-4 ml-2 group-hover:col-span-3">
            <div className="flex">
              <h2
                className={`text-white text-sm truncate cursor-default mr-2 font-medium max-w-[120px]  ${
                  item?.is_vip ? "opacity-60" : ""
                }`}
              >
                {item?.name}
              </h2>
              <div
                className={`text-yellow-300 text-xl flex flex-col items-center justify-center ${
                  item?.is_vip ? "" : "hidden"
                } `}
              >
                <span className="overflow-hidden ">
                  <div className="vip_label"></div>
                </span>
              </div>
            </div>
            <div>
              <a
                key={index}
                className={`text-[#86828C] ${styles.body.hover.textColor} ${
                  item?.is_vip ? "opacity-60" : ""
                } text-xs font-normal mt-1 truncate cursor-pointer hover:decoration-1 hover:underline `}
              >
                {item?.artist?.name}
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-md font-bold text-white hover:block ml-10 absolute right-[10px]">
        {isHover ? "39%" : ""}
      </p>
    </div>
  );
};

export default ItemChart;
