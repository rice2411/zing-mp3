import React from "react";
import "./styles.css";
import useAudio from "../../../hooks/useAudio";

const MusicWave = ({ className, onClick, isSong = false }: any) => {
  const { isPlaying }: any = useAudio();
  return (
    <div className={`${className}  `} onClick={onClick}>
      <div
        className={`music-wave w-10 h-10 relative ${
          isPlaying && !isSong && "border-[1px] border-white"
        } rounded-full`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MusicWave;
