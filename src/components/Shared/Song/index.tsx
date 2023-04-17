import React, { useState, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Song = ({
  song,
  index,
  timeData,
  authorName,
  className = "",
  isShowIndex = true,
}: any) => {
  const location = useLocation();
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const { handlePlayOneSong, handleLikeSong }: any = useAudio();

  const [isHover, setIsHover] = useState(false);
  const [isLiked, setIsLiked] = useState(
    song.followers.includes(userProfile._id) || false
  );

  const likeRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHover(true);
    likeRef.current.classList.remove("hidden");
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    likeRef.current.classList.add("hidden");
  };

  return (
    <div
      key={index}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={`px-2 flex items-center py-3 hover:bg-[hsla(0,0%,100%,0.1)]  rounded  border-b-[1px] border-[${styles.dropdown.borderColor}] ${className}`}
      >
        {isShowIndex && (
          <p
            className={`${styles.album.subTextColor} text-center font-bold mr-5 pl-2 min-w-[25px]`}
          >
            {index + 1}
          </p>
        )}
        <div className="flex">
          <div
            className="relative hover:cursor-pointer flex items-center justify-center"
            onClick={() => {
              const { albumId } = location?.state;
              handlePlayOneSong(song, albumId);
            }}
          >
            <div className="w-[40px] h-[40px] overflow-hidden rounded-md ">
              <img
                src={getFile(song.image)}
                className={`w-full h-full ${isHover ? "opacity-50" : ""}`}
              />
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5 ${
                isHover ? "opacity-75 block" : "hidden"
              }`}
            >
              <BsPlayFill className="text-2xl " />
            </div>
          </div>
          <div className="ml-2">
            <p
              className={`${
                styles.album.textColor
              } font-bold text-sm flex items-center  ${
                song?.is_vip && !userProfile?.is_vip ? "opacity-60" : ""
              }`}
            >
              {song.name}
              <div className={`ml-2 ${song?.is_vip ? "" : "hidden"} `}>
                <span className="overflow-hidden ">
                  <div className="vip_label"></div>
                </span>
              </div>
            </p>
            <p className={`${styles.album.subTextColor} text-xs mt-0.5`}>
              {song?.artist?.name}
            </p>
          </div>
        </div>

        <div
          className={`flex items-center ml-auto pr-2 text-xs ${styles.album.subTextColor}`}
        >
          <div
            className="cursor-pointer p-2.5 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full mr-2 flex items-center justify-center "
            onClick={() => {
              handleLikeSong(song._id);
              setIsLiked((preState: any) => !preState);
            }}
          >
            {isLiked ? (
              <AiFillHeart className="text-[#9B4DE0]  text-lg" />
            ) : (
              <div ref={likeRef} className="hidden text-lg">
                <AiOutlineHeart />
              </div>
            )}
          </div>
          {timeData}
        </div>
      </div>
    </div>
  );
};

export default Song;
