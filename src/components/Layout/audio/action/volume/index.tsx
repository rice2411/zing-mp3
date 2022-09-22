import React from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import useTheme from "../../../../../hooks/useTheme";
import "./styles.scss";
const Volume = () => {
  const { styles }: any = useTheme();
  const handleMouseEnter = (e: any) => {
    const style = document.getElementById("thumbPlayerStyle");
    style.innerHTML = `.volume:hover::-webkit-slider-thumb {  background: ${styles.audio.thumb.color}!important;}`;
  };
  return (
    <>
      <style id="thumbPlayerStyle" type="text/css"></style>
      <div className="flex items-center  gap-x-2">
        <BsFillVolumeUpFill className={`cursor-pointer`} />
        <input
          type="range"
          className="volume"
          onMouseEnter={handleMouseEnter}
        />
      </div>
    </>
  );
};

export default Volume;
