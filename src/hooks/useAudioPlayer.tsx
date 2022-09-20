import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById("audio");

    // state setters wrappers
    const setAudioData = () => {
      // @ts-ignore: Object is possibly 'null'.
      setDuration(audio.duration);
      // @ts-ignore: Object is possibly 'null'.
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => {
      // @ts-ignore: Object is possibly 'null'.
      setCurTime(audio.currentTime);
    };
    // DOM listeners: update React state on DOM events
    // @ts-ignore: Object is possibly 'null'.
    audio.addEventListener("loadeddata", setAudioData);
    // @ts-ignore: Object is possibly 'null'.
    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    // @ts-ignore: Object is possibly 'null'.
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      // @ts-ignore: Object is possibly 'null'.
      audio.currentTime = clickedTime;
      // @ts-ignore: Object is possibly 'null'.
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      // @ts-ignore: Object is possibly 'null'.
      audio.removeEventListener("loadeddata", setAudioData);
      // @ts-ignore: Object is possibly 'null'.
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
}

export default useAudioPlayer;
