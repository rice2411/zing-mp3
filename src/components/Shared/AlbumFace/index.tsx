import React, { useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import MusicWave from "../../../shared/small_components/MusicWave";

const AlbumFace = ({ item, index, className, isShowDesc = true }: any) => {
  const {
    handlePlayAlbum,
    albumId,
    isPlaying,
    setIsPlaying,
    handleLikeAlbum,
  }: any = useAudio();
  const navigate = useNavigate();

  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();

  const [isLiked, setIsLiked] = useState(
    item?.followers?.includes(userProfile._id) || false
  );

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
  const handleMouseEnter = (index: number, id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current[index].classList.add("scale-110");
    } else {
      itemRef.current[index].classList.remove("hidden");
      itemRef.current[index].classList.add("flex");
      imageRef.current[index].classList.add("scale-110");
    }
  };
  const handleMouseLeave = (index: number, id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current[index].classList.remove("scale-110");
    } else {
      itemRef.current[index].classList.remove("flex");
      itemRef.current[index].classList.add("hidden");
      imageRef.current[index].classList.remove("scale-110");
    }
  };
  const handleClick = (e: any, idx: any, albumId: any) => {
    if (e.target === itemRef.current[idx]) {
      navigate("/album", { state: { albumId } });
    }
  };

  return (
    <div
      className="cursor-pointer max-w-[200px] h-max"
      key={item._id}
      onMouseEnter={() => handleMouseEnter(index, item._id)}
      onMouseLeave={() => handleMouseLeave(index, item._id)}
    >
      <div className={`  overflow-hidden relative ${className}`}>
        <img
          src={item.avatar ? item.avatar : getFile(item.image)}
          ref={(node) => adNodeImage(index, node)}
          className="rounded duration-700  absolute "
        />

        <div
          onClick={(e: any) => {
            handleClick(e, index, item._id);
          }}
          className={` bg-gray-900 bg-opacity-70 h-full w-full absolute  justify-center items-center ${
            isPlaying && albumId == item._id ? "flex" : "hidden"
          } `}
          ref={(node) => adNodeItem(index, node)}
        >
          <div className="text-white flex  items-center justify-between w-full px-3">
            <div
              onClick={() => {
                handleLikeAlbum(item._id);
                setIsLiked((prevState: any) => !prevState);
              }}
              className=" p-1 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full mr-2 flex items-center justify-center "
            >
              {isLiked ? (
                <AiFillHeart className="text-[#9B4DE0]  text-[20px]" />
              ) : (
                <AiOutlineHeart className="text-[20px]" />
              )}
            </div>
            {isPlaying && albumId == item._id ? (
              <>
                <MusicWave
                  className="text-6xl cursor-pointer "
                  onClick={() => {
                    setIsPlaying((preState: any) => !preState);
                  }}
                />
              </>
            ) : (
              <>
                <BsPlayCircle
                  className="text-[45px] cursor-pointer "
                  onClick={() => {
                    handlePlayAlbum(item._id);
                  }}
                />
              </>
            )}{" "}
            <div className="text-[20px] ml-2 p-1 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full mr-2 flex items-center justify-center ">
              <FiMoreHorizontal />
            </div>
          </div>
        </div>
      </div>
      <h3
        className={`${styles.body.textColor} ${styles.body.hover.textColor} font-bold text-sm mt-3 !truncate`}
      >
        {item.name}
      </h3>

      <h6 className="text-gray-500 font-normal text-xs  mt-1.5  leading-tight min-h-[50px]">
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
      </h6>
    </div>
  );
};

export default AlbumFace;
