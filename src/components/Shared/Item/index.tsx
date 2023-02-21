import React, { useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import useTheme from "../../../hooks/useTheme";

const Item = ({ item, index, className }: any) => {
  const itemRef = useRef([]);
  const imageRef = useRef([]);
  const { styles }: any = useTheme();
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
      className="cursor-pointer max-w-[200px] h-max"
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <div className={`  overflow-hidden relative ${className}`}>
        <img
          src={item.avatar}
          ref={(node) => adNodeImage(index, node)}
          className="rounded duration-700  absolute "
        />
        <div
          className=" bg-gray-900 bg-opacity-70 h-full w-full absolute  justify-center items-center hidden"
          ref={(node) => adNodeItem(index, node)}
        >
          <div className="text-white flex  items-center justify-between w-full px-5">
            <AiOutlineHeart className="mr-2" />
            <BsPlayCircle className="text-5xl " />
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <h3
        className={`${styles.body.textColor} ${styles.body.hover.textColor} font-bold text-sm mt-3 max-w-[130px]`}
      >
        {item.name}
      </h3>

      <h6 className="text-gray-500 font-normal text-xs leading-3 mt-1.5">
        {item.author?.map((author: any, idx: any) => (
          <>{idx != item.author.length - 1 ? author + ", " : author}</>
        ))}
      </h6>
    </div>
  );
};

export default Item;
