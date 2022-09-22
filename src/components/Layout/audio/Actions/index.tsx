import React from "react";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { VscMultipleWindows } from "react-icons/vsc";
import Volume from "./Volume";
import useTheme from "../../../../hooks/useTheme";
import PlayList from "./Playlist";

const Actions = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div
        className={`flex  gap-x-3  ${styles.audio.player.textColor}  text-xl  `}
      >
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center p-3`}
        >
          <MdOutlineOndemandVideo className={`cursor-pointer`} />
        </div>
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center p-3`}
        >
          <GiMicrophone className={`cursor-pointer`} />
        </div>
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center p-3`}
        >
          <VscMultipleWindows className={`cursor-pointer`} />
        </div>

        <Volume />
      </div>
      <PlayList />
    </>
  );
};

export default Actions;
