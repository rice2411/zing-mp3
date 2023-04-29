import React, { useState, useRef } from "react";
import { BsDownload, BsPlayFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import useAuth from "../../../hooks/useAuth";
import { AiFillHeart, AiOutlineHeart, AiOutlineLink } from "react-icons/ai";
import { CiHeadphones } from "react-icons/ci";
import MusicWave from "../../../shared/small_components/MusicWave";
import cookies from "js-cookie";
import { FiMoreHorizontal } from "react-icons/fi";
import Moment from "react-moment";
import "moment/locale/vi";
import Dropdown, {
  dropDownIconClass,
  liClass,
} from "../../../shared/small_components/DropDown";
import { HiOutlineBan } from "react-icons/hi";
import { MdOutlineLyrics, MdPlaylistAdd } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiShare } from "react-icons/bi";
import fileDownload from "js-file-download";
import axios from "axios";

const Song = ({
  song,
  index,
  timeData,
  className = "",
  isShowIndex = true,
  isHiddenBorder = false,
  isShowTime = true,
  customTextArtist = "",
  isNewReleaseItem = false,
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
    handleAddToPlayingList,
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
  const handleDownload = () => {
    axios
      .get(getFile(song?.audio), {
        responseType: "blob",
      })
      .then((res: any) => {
        fileDownload(res.data, song?.audio);
      });
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
              const { albumId } = location?.state
                ? location?.state
                : { albumId: null };
              const albumIdStorage =
                typeof cookies.get("albumId") !== "undefined"
                  ? JSON.parse(cookies.get("albumId"))
                  : null;
              handlePlayOneSong(song, albumId || albumIdStorage);
            }}
          >
            <div
              className={`${
                isNewReleaseItem ? "w-[60px] h-[60px]" : "w-[40px] h-[40px]"
              } overflow-hidden rounded-md `}
            >
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
                isHover || (isPlaying && songId == song?._id) || false
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
            <h3
              className={`${styles.body.subTextColor} text-xs font-normal mt-1 truncate cursor-default`}
            >
              {isNewReleaseItem && <Moment fromNow>{song?.createdAt}</Moment>}
            </h3>
          </div>{" "}
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
          className={`flex items-center  pr-2 text-xs justify-between min-w-[100px] ${styles.album.subTextColor}`}
        >
          {!isNewReleaseItem && (
            <div
              className="cursor-pointer p-2.5 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full flex items-center justify-center"
              onClick={() => {
                if (userProfile._id) {
                  handleLikeSong(song._id);
                  setIsLiked((preState: any) => !preState);
                }
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
          )}
          {isHover ? (
            <Dropdown
              button={(onClick: any) => {
                return (
                  <div
                    className="item-center flex justify-end "
                    onClick={onClick}
                  >
                    <div className="col-span-1 w-[40px] h-[40px] transition cursor-pointer rounded-full overflow-hidden relative text-white hover:bg-[hsla(0,0%,100%,0.1)] ">
                      <FiMoreHorizontal className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                );
              }}
              isShowTop={index == 0 || index == 1 || index == 2 ? false : true}
              content={(onclick: any) => {
                return (
                  <ul className="min-w-[250px] py-2 text-sm  ">
                    <li className="flex">
                      <img
                        src={getFile(song?.image)}
                        className={`w-[40px] h-[40px] `}
                      />
                      <div className="ml-2">
                        <p className="text-white font-bold hover:text-[#c273ed]">
                          {song?.name}
                        </p>
                        <div className="flex text-[#a0a0a0] text-xs">
                          <div className="flex  items-center">
                            <AiOutlineHeart />{" "}
                            <span>{song?.followers.length}</span>
                          </div>
                          <div className="flex items-center ml-2">
                            <CiHeadphones /> <span>{song?.totalViews}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-[#493961] my-2 rounded text-xs flex justify-between">
                      <div
                        onClick={() => {
                          handleDownload();
                          onclick();
                        }}
                        className="flex flex-col items-center py-2 px-1 hover:bg-[#594B6F] rounded w-full"
                      >
                        <BsDownload /> <span>Tải Xuống</span>
                      </div>
                      <div className="flex flex-col items-center py-2 px-1 hover:bg-[#594B6F] rounded w-full">
                        <MdOutlineLyrics /> <span>Lời bài hát</span>
                      </div>
                      <div className="flex flex-col items-center py-2 px-1 hover:bg-[#594B6F] rounded w-full">
                        <HiOutlineBan /> <span>Chặn</span>
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          handleAddToPlayingList(song?._id);
                          onclick();
                        }}
                        className={`${liClass} cursor-pointer`}
                      >
                        <MdPlaylistAdd className={`${dropDownIconClass}`} />
                        Thêm vào danh sách phát
                      </div>
                    </li>
                    <li>
                      <a href="#" className={`${liClass} `}>
                        <IoAddCircleOutline
                          className={`${dropDownIconClass}`}
                        />
                        Thêm vào playlist
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://zing-mp3-taupe.vercel.app/"
                        target="_blank"
                        className={`${liClass} `}
                      >
                        <BiShare className={`${dropDownIconClass}`} />
                        Chia sẻ
                      </a>
                    </li>
                  </ul>
                );
              }}
            />
          ) : (
            <> {isShowTime && timeData}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Song;
