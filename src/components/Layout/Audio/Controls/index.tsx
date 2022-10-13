import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { ImNext2, ImPrevious2, ImLoop } from "react-icons/im";
import { FaRandom } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import useTheme from "../../../../hooks/useTheme";
export default function Controls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <div
        className={`flex justify-between items-center gap-x-7  mb-3 ${styles.audio.controls.color}`}
      >
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center h-8 w-8`}
        >
          <FaRandom className={` cursor-pointer  h-5 w-5`} />
        </div>
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center h-8 w-8`}
        >
          <ImPrevious2
            onClick={onPrevClick}
            className={`h-6 w-6 cursor-pointer  ${styles.audio.controls.hoverStyle}`}
          />
        </div>
        {isPlaying ? (
          <AiOutlinePauseCircle
            onClick={() => onPlayPauseClick()}
            className={` ${styles.audio.controls.colorHover} h-10 w-10 cursor-pointer`}
          />
        ) : (
          <BsPlayCircle
            onClick={() => onPlayPauseClick()}
            className={` ${styles.audio.controls.colorHover} h-10 w-10 cursor-pointer`}
          />
        )}
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center h-8 w-8`}
        >
          <ImNext2
            onClick={onNextClick}
            className={`h-6 w-6 cursor-pointer ${styles.audio.controls.hoverStyle}`}
          />
        </div>{" "}
        <div
          className={`${styles.audio.controls.hoverStyle} flex justify-center items-center h-8 w-8`}
        >
          <ImLoop
            className={`cursor-pointer h-5 w-5 ${styles.audio.controls.hoverStyle}`}
          />
        </div>
      </div>
    </>
  );
}
