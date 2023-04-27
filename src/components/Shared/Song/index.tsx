import React, { useState, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MusicWave from "../../../shared/small_components/MusicWave";
import cookies from "js-cookie";

const Song = ({
  song,
  index,
  timeData,
  className = "",
  isShowIndex = true,
  isHiddenBorder = false,
  isShowTime = true,
  customTextArtist = "",
}: any) => {
  const location = useLocation();
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const {
    handlePlayOneSong,
    handleLikeSong,
    isPlaying,
    setIsPlaying,
    songId,
    setIsLoading,
  }: any = useAudio();

  const [isHover, setIsHover] = useState(false);
  const [isLiked, setIsLiked] = useState(
    song?.followers?.includes(userProfile._id) || false
  );

  const likeRef = useRef(null);
  const handleMouseEnter = () => {
    setIsHover(true);
    likeRef?.current?.classList.remove("hidden");
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    likeRef?.current?.classList.add("hidden");
  };

  return (
    <div
      key={index}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={` flex justify-between items-center py-3 hover:bg-[hsla(0,0%,100%,0.1)] ${
          !isShowIndex ? "px-2" : ""
        } ${songId == song?._id && "bg-[hsla(0,0%,100%,0.1)]"}  rounded ${
          isHiddenBorder
            ? ""
            : `border-b-[1px] border-[${styles.dropdown.borderColor}]`
        } ${className}`}
      >
        <div className="flex items-center min-w-[300px] max-w-max">
          {isShowIndex && (
            <p
              className={`${styles.album.subTextColor} text-center font-bold mr-3  min-w-[25px]`}
            >
              {index + 1}
            </p>
          )}
          <div
            className="relative hover:cursor-pointer flex items-center justify-center"
            onClick={() => {
              const { albumId } = location?.state;
              const albumIdStorage =
                typeof cookies.get("albumId") !== "undefined"
                  ? JSON.parse(cookies.get("albumId"))
                  : null;
              handlePlayOneSong(song, albumId || albumIdStorage);
            }}
          >
            <div className="w-[40px] h-[40px] overflow-hidden rounded-md ">
              <img
                src={getFile(song?.image)}
                className={`w-full h-full ${
                  isHover || (isPlaying && songId == song?._id)
                    ? "opacity-50"
                    : ""
                }`}
              />
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between ${
                isHover || (isPlaying && songId == song?._id)
                  ? "opacity-75 block"
                  : "hidden"
              }`}
            >
              {isPlaying && songId == song._id ? (
                <MusicWave
                  className="text-sm cursor-pointer "
                  onClick={() => {
                    setIsPlaying((preState: any) => !preState);
                    setIsLoading(false);
                  }}
                  isSong={true}
                />
              ) : (
                <BsPlayFill className="text-2xl " />
              )}
            </div>
          </div>
          <div className="ml-2">
            <div
              className={`${
                styles.album.textColor
              } font-bold text-sm flex items-center !truncate  ${
                song?.is_vip && !userProfile?.is_vip ? "opacity-60" : ""
              }`}
            >
              {song?.name}
              <div className={`ml-2 ${song?.is_vip ? "" : "hidden"} `}>
                <span className="overflow-hidden ">
                  <div className="vip_label"></div>
                </span>
              </div>
            </div>
            <p
              className={`${styles.album.subTextColor} ${customTextArtist} text-xs mt-0.5`}
            >
              {song?.artist?.name}
            </p>
          </div>
        </div>
        {song?.album && (
          <div className="w-max flex min-w-[250px] ml-1">
            <p
              className={`${styles.album.subTextColor} text-xs  hover:underline cursor-pointer hover:text-[#c273ed]`}
            >
              {song?.album?.name || ""}
            </p>
          </div>
        )}

        <div
          className={`flex items-center  pr-2 text-xs justify-between min-w-[80px] ${styles.album.subTextColor}`}
        >
          <div
            className="cursor-pointer p-2.5 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full flex items-center justify-center"
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
          {isShowTime && timeData}
        </div>
      </div>
    </div>
  );
};

export default Song;
