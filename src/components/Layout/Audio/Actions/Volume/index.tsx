import React, { useRef } from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import useAudio from "../../../../../hooks/useAudio";
import useTheme from "../../../../../hooks/useTheme";
import "./styles.scss";
const Volume = () => {
  const { styles }: any = useTheme();
  const { volume, setVolume, audioRef }: any = useAudio();

  const volumeRef = useRef(null);

  const handleMouseEnter = (e: any) => {
    const style = document.getElementById("thumbPlayerStyle");
    style.innerHTML = `.volume:hover::-webkit-slider-thumb {  background: ${styles.audio.thumb.color}!important;}`;
  };

  const handleChangeVolume = () => {
    audioRef.current.volume = volumeRef.current.value;
    setVolume(volumeRef.current.value);
  };

  const currentPercentage = 1 ? `${(volume / 1) * 100}%` : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${styles.audio.track.color}), color-stop(${currentPercentage}, #777))
`;
  return (
    <>
      <style id="thumbPlayerStyle" type="text/css"></style>
      <div className="flex items-center  gap-x-2 p-3">
        <BsFillVolumeUpFill className={`cursor-pointer`} />
        <input
          onChange={handleChangeVolume}
          ref={volumeRef}
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
