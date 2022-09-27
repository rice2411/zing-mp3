import React, { useState, useEffect, useRef } from "react";

import AudioControls from "../Controls";

import "./styles.scss";
import Actions from "../Actions";
import Info from "../Info";
import useTheme from "../../../../hooks/useTheme";
const Player = ({ tracks }: any) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isDirty, setIsDirty] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [timeRunning, setTimeRunning] = useState(0);
  const [timeEnd, setTimeEnd] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { styles }: any = useTheme();
  //alo
  // Destructure for conciseness
  const { title, artist, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined
  );
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  // @ts-ignore: Object is possibly 'null'.
  const { duration } = audioRef.current || 0;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${styles.audio.track.color}), color-stop(${currentPercentage}, #777))
  `;
  const timeFormat = (second: any) => {
    return new Date(second * 1000).toISOString().slice(14, 19);
  };
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current); // @ts-ignore: Object is possibly 'null'.
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTimeRunning(Math.round(audioRef.current.currentTime));

        setTrackProgress(audioRef.current.currentTime);
      }
      // @ts-ignore: Object is possibly 'null'.
    }, [1000]);
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);

    audioRef.current.currentTime = value;
    setTimeRunning(Math.round(audioRef.current.currentTime));
    setTrackProgress(audioRef.current.currentTime);
  };
  const handlePlay = () => {
    setIsPlaying((preState) => !preState);
    const duration: any = audioRef.current?.duration;
    setTimeEnd(duration);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };
  const handleMouseEnter = (e: any) => {
    const style = document.getElementById("thumbPlayerStyle");
    style.innerHTML = `.progress:hover::-webkit-slider-thumb {  background: ${styles.audio.thumb.color};}`;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current
        .play()
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current?.addEventListener("loadeddata", function () {
      setTimeEnd(this.duration);
    });
    if (isDirty) {
      audioRef.current.pause();

      audioRef.current =
        typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined;

      setTrackProgress(audioRef.current.currentTime);

      if (isReady.current) {
        audioRef.current
          .play()
          .then((_) => {
            // Autoplay started!
          })
          .catch((error) => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
        setIsPlaying(true);
        startTimer();
      } else {
        // Set the isReady ref as true for the next pass
        isReady.current = true;
      }
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      // @ts-ignore: Object is possibly 'null'.
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <style id="thumbPlayerStyle" type="text/css"></style>
      <div
        className={`${styles.audio.backgroundColor} mt-auto h-[90px] z-50  w-screen audio  flex justify-between items-center `}
      >
        <Info title={title} artist={artist} image={image} />
        <div
          className={`player w-3/4 min-w-[300px] ${styles.audio.player.textColor} mr-auto`}
        >
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={handlePlay}
          />
          <div className="flex w-full justify-center items-center">
            <span className={`text-xs ${styles.audio.player.textDark} `}>
              {timeFormat(timeRunning)}
            </span>
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : 0}
              className="progress mx-2.5"
              onChange={(e) => onScrub(e.target.value)}
              onMouseEnter={handleMouseEnter}
              // onMouseUp={onScrubEnd}
              // onKeyUp={onScrubEnd}
              style={{ background: trackStyling }}
            />
            <span className={`text-xs ${styles.audio.player.textColor} `}>
              {timeFormat(timeEnd)}
            </span>
          </div>
        </div>
        <Actions />
      </div>
    </>
  );
};

export default Player;
