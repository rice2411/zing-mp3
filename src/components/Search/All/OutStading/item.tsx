import React, { useState } from "react";
import { getFile } from "../../../../constant/file";
import { BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useAudio from "../../../../hooks/useAudio";
import MusicWave from "../../../../shared/small_components/MusicWave";

const OutStadingItem = ({ item }: any) => {
  const {
    handlePlayOneSong,
    albumId,
    isPlaying,
    setIsPlaying,
    songId,
    setIsLoading,
    handlePlayAlbum,
  }: any = useAudio();
  const navigate = useNavigate();
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
      className={` flex items-center bg-[#231B2E]  min-w-[370px] min-h-[94px] rounded`}
    >
      <div className="p-3 flex items-center">
        <div
          className="relative hover:cursor-pointer flex items-center justify-center"
          onClick={() => {
            const id = item?._id;
            item?.avatar
              ? navigate("/nghe-si", { state: { artistId: id } })
              : item?.publicationYear
              ? handlePlayAlbum(item._id)
              : handlePlayOneSong(item);
          }}
        >
          <div className="w-[84px] h-[84px] overflow-hidden rounded-md ">
            <img
              src={getFile(item?.avatar || item?.image)}
              className={` ${
                item?.avatar ? "rounded-full duration-700" : "rounded"
              }  ${
                (isHover && !item?.avatar) ||
                (isPlaying && songId == item._id) ||
                (isPlaying && albumId == item._id)
                  ? "opacity-50"
                  : ""
              } ${isHover && item?.avatar ? " scale-110" : ""}`}
            />
          </div>
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5 ${
              (isHover && !item?.avatar) ||
              songId == item._id ||
              (isPlaying && albumId == item._id)
                ? "opacity-75 block"
                : "hidden"
            }`}
          >
            {isPlaying ||
            (isPlaying && songId == item?._id) ||
            (isPlaying && albumId == item._id) ? (
              <MusicWave
                className="text-sm cursor-pointer "
                onClick={() => {
                  setIsPlaying((preState: any) => !preState);
                  setIsLoading(false);
                }}
                isSong={true}
              />
            ) : (
              <BsPlayFill className="text-3xl " />
            )}
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
            {item?.avatar
              ? `${item?.followers?.length} quan tâm`
              : item?.publicationYear
              ? item?.authors[0]?.name
              : item?.artist?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutStadingItem;
