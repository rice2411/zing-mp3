import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows } from "react-icons/vsc";
import Volume from "./Volume";
import useTheme from "../../../../hooks/useTheme";
import PlayList from "./Playlist";
import ButtonIcon from "../../../../shared/small_components/Button/Icon";
import useAudio from "../../../../hooks/useAudio";

const Actions = () => {
  const { styles }: any = useTheme();
  const { setIsShowLyrics, isHaveLyrics, handleCheckIsHaveLyrics }: any =
    useAudio();
  return (
    <>
      <div
        className={`flex  gap-x-3  ${styles.audio.player.textColor}  text-xl  `}
      >
        <ButtonIcon
          className={`${styles.audio.controls.hoverStyle}  cursor-not-allowed  p-3`}
        >
          <MdOutlineOndemandVideo />
        </ButtonIcon>
        <ButtonIcon
          isDisaled={!isHaveLyrics}
          onClick={() => {
            setIsShowLyrics((prevState: any) => !prevState);
          }}
          className={`${styles.audio.controls.hoverStyle} cursor-pointer  p-3 ${
            isHaveLyrics ? "" : "cursor-not-allowed"
          }`}
        >
          <GiMicrophone />
        </ButtonIcon>
        <ButtonIcon
          className={`${styles.audio.controls.hoverStyle}  cursor-not-allowed  p-3`}
        >
          <VscMultipleWindows />
        </ButtonIcon>

        <Volume />
      </div>
      <PlayList />
    </>
  );
};

export default Actions;
