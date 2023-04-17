import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
import ButtonIcon from "../../../../shared/small_components/Button/Icon";
import useAudio from "../../../../hooks/useAudio";
import useAuth from "../../../../hooks/useAuth";

const Info = ({ image, title, artist }: any) => {
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const { playlist, trackIndex, handleLikeSong }: any = useAudio();

  const [isLiked, setIsLiked] = useState(
    playlist[trackIndex].followers.includes(userProfile._id) || false
  );

  return (
    <div
      className={`info flex items-center ju ml-3 min-w-[320px] w-1/5 ${styles.audio.info.textColor}`}
    >
      <img src={`${image}`} className="h-16 w-16 rounded mr-3" />
      <div className="flex flex-col mr-6">
        <span className="w-max font-semibold text-sm">{title}</span>
        <span
          className={`${styles.audio.info.textDark}  font-extralight text-xs`}
        >
          {artist}
        </span>
      </div>
      <div className="flex ">
        <div
          className="cursor-pointer p-2.5 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full mr-2 flex items-center justify-center "
          onClick={() => {
            handleLikeSong(playlist[trackIndex]._id);
            setIsLiked((preState: any) => !preState);
          }}
        >
          {isLiked ? (
            <AiFillHeart className="text-[#9B4DE0]" />
          ) : (
            <AiOutlineHeart />
          )}
        </div>

        <div className="cursor-pointer p-2.5 hover:bg-[hsla(0,0%,100%,.1)] hover:rounded-full mr-2 flex items-center justify-center ">
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Info;
