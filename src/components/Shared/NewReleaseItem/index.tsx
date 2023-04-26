import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiVipFill } from "react-icons/ri";
import { getFile } from "../../../constant/file";
import useTheme from "../../../hooks/useTheme";
import "./styles.scss";
import Moment from "react-moment";
import "moment/locale/vi";
import useAudio from "../../../hooks/useAudio";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const NewReleaseItem = ({ item, index, className }: any) => {
  const [isHover, setIsHover] = useState(false);
  const { handlePlayOneSong }: any = useAudio();
  const { userProfile }: any = useAuth();
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const { styles }: any = useTheme();
  return (
    <div
      key={index}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="group items-center w-full hover:bg-[hsla(0,0%,100%,0.1)] rounded-md overflow-hidden"
    >
      <div className="p-2  items-center grid grid-cols-5 place-content-center">
        <div
          className="relative hover:cursor-pointer flex items-center justify-center"
          onClick={() => {
            handlePlayOneSong(item);
          }}
        >
          <div className="w-[60px] h-[60px] overflow-hidden rounded-md ">
            <img
              src={getFile(item.image)}
              className={`w-full h-full ${isHover ? "opacity-50" : ""}`}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5 hidden group-hover:block hover:opacity-75">
            <BsPlayFill className="text-3xl " />
          </div>
        </div>
        <div className="leading-6 col-span-4 ml-2 group-hover:col-span-3">
          <div className="flex">
            <h2
              className={`${
                styles.body.textColor
              } text-sm truncate cursor-default mr-2 font-medium ${
                item.is_vip && !userProfile?.is_vip ? "opacity-60" : ""
              }`}
            >
              {item.name}
            </h2>
            <div
              className={`text-yellow-300 text-xl flex flex-col items-center justify-center ${
                item.is_vip ? "" : "hidden"
              } `}
            >
              <span className="overflow-hidden ">
                <div className="vip_label"></div>
              </span>
            </div>
          </div>
          <div>
            <Link
              to={"/nghe-si"}
              state={{ artistId: item.artist._id }}
              className={`${styles.body.subTextColor} ${
                styles.body.hover.textColor
              } ${
                item.vip ? "opacity-60" : ""
              } text-xs font-normal mt-1 truncate cursor-pointer hover:decoration-1 hover:underline `}
            >
              {item.artist.name}
            </Link>
          </div>
          <h3
            className={`${styles.body.subTextColor} text-xs font-normal mt-1 truncate cursor-default`}
          >
            <Moment fromNow>{item.createdAt}</Moment>
          </h3>
        </div>
        <div className="item-center flex justify-end mr-2">
          <div className="col-span-1 w-[40px] h-[40px] transition cursor-pointer rounded-full overflow-hidden relative hidden group-hover:block text-white hover:bg-[hsla(0,0%,100%,0.1)] ">
            <FiMoreHorizontal className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleaseItem;
