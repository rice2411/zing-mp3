import React from "react";
import { RiPlayListLine } from "react-icons/ri";
import useTheme from "../../../../../hooks/useTheme";
import ButtonIcon from "../../../../../shared/small_components/Button/Icon";
import useAudio from "../../../../../hooks/useAudio";
import useAuth from "../../../../../hooks/useAuth";
import useModal from "../../../../../hooks/useModal";
const PlayList = () => {
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const { setIsShowPlaylist, isShowPlaylist, audio }: any = useAudio();
  const { handleOpenModalLogin }: any = useAuth();
  const handleMouseEnter = (e: any) => {
    const element = e.target;
    element.style.backgroundColor = styles.audio.playlist.hoverColor;
  };
  const handleMouseLeave = (e: any) => {
    const element = e.target;
    element.style.backgroundColor = styles.audio.playlist.backgroundColor;
  };
  return (
    <div
      className="border-l"
      style={{
        borderColor: styles.sideBar.divide.color,
      }}
    >
      <div className="p-2 flex items-center justify-center">
        <ButtonIcon
          onClick={() => {
            if (!userProfile._id) {
              handleOpenModalLogin();
            }
            setIsShowPlaylist((prevState: any) => !prevState);
          }}
          className={` ${
            styles.audio.player.textColor
          }  cursor-pointer rounded ${
            isShowPlaylist ? "text-white bg-[#9b4de0]" : ""
          } `}
        >
          <RiPlayListLine
            className={` p-0.5 h-6 w-6 rounded  `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: styles.audio.playlist.backgroundColor }}
          />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default PlayList;
