import React, { useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";
import { getFile } from "../../constant/file";
import { useNavigate } from "react-router-dom";

const HubItem = ({ item, index, isCountry = false, isTopic = false }: any) => {
  const navigate = useNavigate();

  const itemRef = useRef([]);
  const imageRef = useRef([]);

  const adNodeItem = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      itemRef.current[idx] = node;
    }
  };
  const adNodeImage = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      imageRef.current[idx] = node;
    }
  };
  const handleMouseEnter = (index: number) => {
    itemRef.current[index].classList.remove("hidden");
    itemRef.current[index].classList.add("flex");
    imageRef.current[index].classList.add("scale-110");
  };
  const handleMouseLeave = (index: number) => {
    itemRef.current[index].classList.remove("flex");
    itemRef.current[index].classList.add("hidden");
    imageRef.current[index].classList.remove("scale-110");
  };

  return (
    <div
      className="cursor-pointer min-w-[275px] min-h-[154px] "
      key={item._id}
      onClick={() => {
        navigate(`${`/hub/detail`}`, {
          state: { hubId: item._id },
        });
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <div
        className={` overflow-hidden relative  flex items-center justify-center min-w-[275px] min-h-[154px]`}
      >
        <img
          src={item?.image}
          ref={(node) => adNodeImage(index, node)}
          className="rounded duration-700  absolute min-w-[275px] min-h-[154px]"
        />

        <div
          className={` min-w-[275px] min-h-[154px] absolute  justify-center items-center $`}
          ref={(node) => adNodeItem(index, node)}
        ></div>
        <h3
          className={`text-white text-3xl font-bold absolute  mt-3 !truncate ${
            isTopic ? "!text-xl uppercase" : ""
          }`}
        >
          {isCountry ? item.label : item?.name}
        </h3>
      </div>
    </div>
  );
};

export default HubItem;
