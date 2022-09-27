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
  const currentPercentage = 1 ? `${(0.3 / 1) * 100}%` : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${styles.audio.track.color}), color-stop(${currentPercentage}, #777))
`;
  return (
    <>
      <style id="thumbPlayerStyle" type="text/css"></style>
      <div className="flex items-center  gap-x-2 p-3">
        <BsFillVolumeUpFill className={`cursor-pointer`} />
        <input
          type="range"
          className="volume"
          step="0.1"
          min="0"
          max={1 ? 1 : 0}
          onMouseEnter={handleMouseEnter}
          style={{ background: trackStyling }}
        />
      </div>
    </>
  );
};

export default Volume;
