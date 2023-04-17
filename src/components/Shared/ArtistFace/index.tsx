import React, { useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";

const ArtistFace = ({ item, index, className, isShowDesc = true }: any) => {
  const { handlePlayAlbum, albumId, isPlaying, setIsPlaying }: any = useAudio();

  const imageRef = useRef([]);
  const { styles }: any = useTheme();

  const navigate = useNavigate();

  const adNodeImage = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      imageRef.current[idx] = node;
    }
  };
  const handleMouseEnter = (index: number, id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current[index].classList.add("scale-110");
    } else {
      imageRef.current[index].classList.add("scale-110");
    }
  };
  const handleMouseLeave = (index: number, id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current[index].classList.remove("scale-110");
    } else {
      imageRef.current[index].classList.remove("scale-110");
    }
  };

  return (
    <div
      className="cursor-pointer max-w-[200px] h-max rounded-full text-center "
      key={item?._id}
      onMouseEnter={() => handleMouseEnter(index, item?._id)}
      onMouseLeave={() => handleMouseLeave(index, item?._id)}
    >
      <div className={`  overflow-hidden rounded-full relative ${className}`}>
        <img
          src={getFile(item?.avatar ?? "")}
          ref={(node) => adNodeImage(index, node)}
          className="rounded-full duration-700  absolute "
        />
      </div>
      <h3
        className={`${styles.body.textColor} ${styles.body.hover.textColor} font-bold text-sm mt-3 max-w-[200px] truncate`}
      >
        {item?.name}
      </h3>

      {/* <h6 className="text-gray-500 font-normal text-xs leading-3 mt-1.5  leading-tight">
        {item.authors?.map((author: any, idx: any) => (
          <span key={idx}>
            {idx != item.authors.length - 1 ? author.name + ", " : author.name}
          </span>
        ))}
        {item.author?.map((author: any, idx: any) => (
          <span key={idx}>
            {idx != item.author.length - 1 ? author + ", " : author}
          </span>
        ))}
        {isShowDesc ? item.description : ""}
      </h6> */}
    </div>
  );
};

export default ArtistFace;
