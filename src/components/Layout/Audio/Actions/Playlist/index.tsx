import React from "react";
import { RiPlayListLine } from "react-icons/ri";
import useTheme from "../../../../../hooks/useTheme";
import ButtonIcon from "../../../../../shared/small_components/Button/Icon";
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
      className="border-l"
      style={{
        borderColor: styles.sideBar.divide.color,
      }}
    >
      <ButtonIcon
        className={` ${styles.audio.player.textColor}  cursor-pointer p-2  rounded`}
      >
        <RiPlayListLine
          className={` p-0.5 h-6 w-6`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: styles.audio.playlist.backgroundColor }}
        />
      </ButtonIcon>
    </div>
  );
};

export default PlayList;
