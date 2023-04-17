import { useState, createContext, useRef, useEffect } from "react";

import cookie from "js-cookie";

import { getFile } from "../constant/file";
import AlbumService from "../service/album";
import SongService from "../service/song";
import useAuth from "../hooks/useAuth";
import LibraryService from "../service/library";

const AudioContext = createContext({});

export const AudioProvider = ({ children }: any) => {
  const { userProfile }: any = useAuth();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeEnd, setTimeEnd] = useState(0);
  const [trackIndex, setTrackIndex] = useState(
    typeof cookie.get("trackIndex") !== "undefined"
      ? JSON.parse(cookie.get("trackIndex"))
      : 0
  );
  const [modalVip, setModalVip] = useState(false);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState({});
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [albumId, setAlbumId] = useState(
    typeof cookie.get("albumId") !== "undefined"
      ? JSON.parse(cookie.get("albumId"))
      : null
  );

  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio(getFile(audio)) : undefined
  );

  const handlePlay = (_duration: any, isPlay: boolean = false) => {
    setIsPlaying((preState) => !preState);
    if (isPlay) setIsPlaying(isPlay);
    const duration: any = _duration;
    setTimeEnd(duration);
  };
  const handleLikeSong = async (songId: string) => {
    try {
      await LibraryService.likeSong(songId);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLikeAlbum = async (albumId: string) => {
    try {
      await LibraryService.likeAlbum(albumId);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSetPlaylist = (
    audio: any,
    info: any,
    trackIndex: number = 0,
    albumId: string = null
  ) => {
    const { name, image, artist } = info;

    cookie.set("albumId", JSON.stringify(albumId), { expires: 365 });
    cookie.set("trackIndex", JSON.stringify(trackIndex), { expires: 365 });

    setTrackIndex(trackIndex);
    audioRef.current = audio;
    handlePlay(audio.duration);
    setAudio(audio);
    setName(name);
    setArtist(artist);
    setImage(image);
  };

  const handleSaveNewSong = async (data: any, albumId: string = null) => {
    try {
      setAlbumId(albumId);

      const response: any = await AlbumService.detailAlbum(albumId);
      const dataRaw = response?.data?.data;
      const playlist = dataRaw.songs;
      setPlaylist(playlist);

      const newAudio = new Audio(getFile(data.audio));
      newAudio.onloadedmetadata = function () {
        const index = playlist.findIndex((e: any) => e._id == data._id);

        handleSetPlaylist(newAudio, data, index, albumId);
      };
    } catch (err) {
      console.log(err);
    }
  };
  const handlePlayNextSong = async () => {
    await setIsPlaying(false);
    var nextIndex = trackIndex + 1;
    while (playlist[nextIndex].is_vip && !userProfile.is_vip) {
      nextIndex++;
    }
    const { audio } = playlist[nextIndex];

    const newAudio = new Audio(getFile(audio));

    newAudio.onloadedmetadata = async function () {
      handleSetPlaylist(newAudio, playlist[nextIndex], nextIndex, albumId);
      // handlePlay(newAudio.duration, true);
      await SongService.increaseViews(playlist[nextIndex]._id);
    };
  };
  const handlePlayAlbum = async (albumId: string) => {
    try {
      setIsPlaying(false);
      setAlbumId(albumId);
      const response: any = await AlbumService.detailAlbum(albumId);
      await LibraryService.addAlbumHistory(albumId);
      const dataRaw = response?.data?.data;
      const playlist = dataRaw.songs;
      const newAudio = new Audio(getFile(playlist[0].audio));
      newAudio.onloadedmetadata = async function () {
        handleSetPlaylist(newAudio, playlist[0], 0, albumId);
        await SongService.increaseViews(playlist[0]._id);
      };

      setPlaylist(playlist);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePlayOneSong = async (data: any, albumId: string = null) => {
    if (data.is_vip && !userProfile.is_vip) {
      setModalVip(true);
      return;
    }
    if (typeof cookie.get("albumId") === "undefined" || albumId == null) {
      handleSaveNewSong(data, data.originAlbumId);
      await SongService.increaseViews(data._id);
      return;
    }
    if (albumId != null) {
      if (data._id !== playlist[trackIndex]._id) {
        setIsPlaying(false);
        handleSaveNewSong(data, albumId);
        await SongService.increaseViews(data._id);
      } else {
        setIsPlaying((preState) => !preState);
      }
    }
  };
  const fetchData = async () => {
    try {
      const response: any = await AlbumService.detailAlbum(albumId);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        const { name, image, artist, audio } = dataRaw.songs[trackIndex];
        setPlaylist(dataRaw?.songs);
        setAudio(audio);
        setName(name);
        setArtist(artist);
        setImage(image);
        const newAudio = new Audio(getFile(audio));
        newAudio.onloadedmetadata = function () {
          audioRef.current = newAudio;
          setTimeEnd(newAudio.duration);
        };
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
        albumId,
        modalVip,
        handleLikeAlbum,
        handleLikeSong,
        setModalVip,
        setVolume,
        setPlaylist,
        handlePlayOneSong,
        handlePlay,
        setIsPlaying,
        setTrackIndex,
        setTimeEnd,
        handlePlayNextSong,
        handlePlayAlbum,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
export default AudioContext;
