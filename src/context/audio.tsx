import { useState, createContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import cookie from "js-cookie";

import useModal from "../hooks/useModal";
import { getFile } from "../constant/file";
import { duration } from "moment";

const AudioContext = createContext({});

export const AudioProvider = ({ children }: any) => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeEnd, setTimeEnd] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [audio, setAudio] = useState(
    typeof cookie.get("playlist") !== "undefined"
      ? JSON.parse(cookie.get("playlist"))[trackIndex]?.audio
      : null
  );
  const [playlist, setPlaylist] = useState(
    JSON.parse(cookie.get("playlist") ?? `[{"name":"default"}]`)
  );
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio(getFile(audio)) : undefined
  );

  const handlePlay = (_duration: any) => {
    setIsPlaying((preState) => !preState);
    const duration: any = _duration;
    setTimeEnd(duration);
  };
  // audioRef.current?.duration
  const { name, artist, image } = playlist[trackIndex];

  const handleSaveNewSong = (data: any) => {
    const newAudio = new Audio(getFile(data.audio));
    newAudio.onloadedmetadata = function () {
      handlePlay(newAudio.duration);
      setPlaylist([data]);
      cookie.set("playlist", JSON.stringify([data]));
      setAudio(data.audio);
      audioRef.current = newAudio;
    };
  };

  const handlePlayOneSong = (data: any) => {
    if (cookie.get("playlist") === undefined) {
      handleSaveNewSong(data);

      return;
    }
    if (data._id !== JSON.parse(cookie.get("playlist"))[trackIndex]._id) {
      setIsPlaying(false);
      handleSaveNewSong(data);
    } else {
      setIsPlaying((preState) => !preState);
    }
  };
  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        audio,
        playlist,
        trackIndex,
        timeEnd,
        artist,
        name,
        image,
        audioRef,
        volume,
        setVolume,
        setPlaylist,
        handlePlayOneSong,
        handlePlay,
        setIsPlaying,
        setTrackIndex,
        setTimeEnd,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
export default AudioContext;
