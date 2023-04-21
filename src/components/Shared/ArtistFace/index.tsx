import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { getFile } from "../../../constant/file";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import { MdPersonAddAlt } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineCheck } from "react-icons/ai";

const ArtistFace = ({ item, index, className }: any) => {
  const { albumId, isPlaying, handleLikeArtist }: any = useAudio();
  const { userProfile }: any = useAuth();
  const { styles }: any = useTheme();

  const [isLiked, setIsLiked] = useState(
    item?.followers?.includes(userProfile?._id)
  );
  const [followers, setFollowers] = useState(item?.followers?.length || 0);
  const imageRef = useRef([]);

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
      className="cursor-pointer max-w-[200px] h-max rounded-full flex flex-col items-center "
      key={item?._id}
      onMouseEnter={() => handleMouseEnter(index, item?._id)}
      onMouseLeave={() => handleMouseLeave(index, item?._id)}
    >
      <Link
        to="/nghe-si"
        state={{ artistId: item?._id }}
        className={`overflow-hidden rounded-full relative ${className} `}
      >
        <img
          src={getFile(item?.avatar ?? "")}
          ref={(node) => adNodeImage(index, node)}
          className="rounded-full duration-700  absolute "
        />
      </Link>
      <Link
        to="/nghe-si"
        state={{ artistId: item?._id }}
        className={`${styles.body.textColor} ${styles.body.hover.textColor} font-bold text-sm mt-3 max-w-[200px] truncate`}
      >
        {item?.name}
      </Link>
      <p className="text-xs text-[hsla(0,0%,100%,0.5)] ">
        {" "}
        {new Intl.NumberFormat("vi-VN").format(followers)} quan tâm
      </p>
      <div
        onClick={() => {
          handleLikeArtist(item._id);
          setIsLiked((prevState: any) => !prevState);
          !isLiked
            ? setFollowers((prevState: any) => prevState + 1)
            : setFollowers((prevState: any) => prevState - 1);
        }}
        className={`${
          isLiked ? "" : "bg-[#9B4DE0] "
        } mt-2  max-w-max  cursor-pointer text-white flex px-5 py-1 items-center justify-center rounded-full border-[1px] border-[${
          styles.dropdown.borderColor
        }] `}
      >
        {isLiked ? <AiOutlineCheck /> : <MdPersonAddAlt />}
        <p className="text-xs uppercase ml-2">{isLiked ? "Đã " : ""}quan tâm</p>
      </div>
    </div>
  );
};

export default ArtistFace;
