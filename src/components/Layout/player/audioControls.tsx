import React from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { ImNext2, ImPrevious2, ImLoop } from "react-icons/im";
import { FaRandom } from "react-icons/fa";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) => (
  <div className="audio-controls">
    <FaRandom />
    <ImPrevious2 onClick={onPrevClick} />
    {isPlaying ? (
      <AiOutlinePauseCircle
        onClick={() => onPlayPauseClick()}
        className="pause"
      />
    ) : (
      <AiOutlinePlayCircle
        onClick={() => onPlayPauseClick()}
        className="play"
      />
    )}
    <ImNext2 onClick={onNextClick} />
    <ImLoop />
  </div>
);

export default AudioControls;
