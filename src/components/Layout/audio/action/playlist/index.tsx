import React from "react";
import { RiPlayListLine } from "react-icons/ri";
import useTheme from "../../../../../hooks/useTheme";
const PlayList = () => {
  const { styles }: any = useTheme();
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
      className={` ${styles.audio.player.textColor} p-5  border-l`}
      style={{
        borderColor: styles.sideBar.divide.color,
      }}
    >
      <RiPlayListLine
        className={`cursor-pointer h-6 w-6 p-1 rounded`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: styles.audio.playlist.backgroundColor }}
      />
    </div>
  );
};

export default PlayList;
