import { useState, createContext, useRef, useEffect } from "react";

import cookie from "js-cookie";

import { getFile } from "../constant/file";
import AlbumService from "../service/album";
import SongService from "../service/song";
import useAuth from "../hooks/useAuth";
import LibraryService from "../service/library";
import { duration } from "moment";

const AudioContext = createContext({});

export const AudioProvider = ({ children }: any) => {
  const { userProfile }: any = useAuth();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowLyrics, setIsShowLyrics] = useState(false);
  const [isHaveLyrics, setIsHaveLyrics] = useState(false);
  const [isShowPlaylist, setIsShowPlaylist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [timeRunning, setTimeRunning] = useState(0);
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
  const [songId, setSongId] = useState(
    typeof cookie.get("songId") !== "undefined"
      ? JSON.parse(cookie.get("songId"))
      : null
  );
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
  const handleLikeArtist = async (artistId: string) => {
    try {
      await LibraryService.likeArtist(artistId);
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
    try {
      const { name, image, artist, _id } = info;
      cookie.set("songId", JSON.stringify(_id), { expires: 365 });
      cookie.set("albumId", JSON.stringify(albumId), { expires: 365 });
      cookie.set("trackIndex", JSON.stringify(trackIndex), { expires: 365 });
      setTrackIndex(trackIndex);
      audioRef.current = audio;
      handlePlay(audio.duration);
      setAudio(audio);
      setName(name);
      setArtist(artist);
      setImage(image);
      setSongId(_id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNewSong = async (data: any, albumId: string = null) => {
    try {
      setAlbumId(albumId);

      const response: any = await AlbumService.detailAlbum(albumId);
      await LibraryService.addToPlaylist({ albumId: albumId, isNew: true });
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
  const handlePlayNavigateSong = async (newIndex: number) => {
    if (isLoading) return;
    if (isLooping) {
      const loopAudio = new Audio(getFile(audio));
      loopAudio.onloadedmetadata = async function () {
        audioRef.current = loopAudio;
        setTimeRunning(Math.round(0));
        setTrackProgress(0);
        handlePlay(loopAudio.duration);
      };

      return;
    }
    setIsLoading(true);
    await setIsPlaying(false);
    var nextIndex = trackIndex + newIndex;
    if (nextIndex < 0) return;
    while (playlist[nextIndex].is_vip && !userProfile.is_vip) {
      nextIndex++;
    }
    const newAudioRaw = playlist[nextIndex].audio;

    const newAudio = new Audio(getFile(newAudioRaw));

    newAudio.onloadedmetadata = async function () {
      handleSetPlaylist(newAudio, playlist[nextIndex], nextIndex, albumId);
      // handlePlay(newAudio.duration, true);
      await SongService.increaseViews(playlist[nextIndex]._id);
    };
  };
  const handlePlayAlbum = async (newAlbumId: string) => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      if (albumId == newAlbumId) {
        setIsPlaying((preState) => !preState);
        return;
      }
      setIsPlaying(false);
      setAlbumId(newAlbumId);
      const response: any = await AlbumService.detailAlbum(newAlbumId);
      await LibraryService.addAlbumHistory(newAlbumId);
      await LibraryService.addToPlaylist({ albumId: newAlbumId, isNew: true });
      const dataRaw = response?.data?.data;
      const playlist = dataRaw.songs;
      const newAudio = new Audio(getFile(playlist[0].audio));
      newAudio.onloadedmetadata = async function () {
        handleSetPlaylist(newAudio, playlist[0], 0, newAlbumId);
        await SongService.increaseViews(playlist[0]._id);
      };

      setPlaylist(playlist);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePlayOneSong = async (data: any, albumId: string = null) => {
    if (isLoading) return;
    setIsLoading(true);
    if (data.is_vip && !userProfile.is_vip) {
      setModalVip(true);
      return;
    }
    if (typeof cookie.get("albumId") === "undefined" || albumId == null) {
      if (isPlaying) {
        setIsPlaying((preState) => !preState);
        setIsLoading(false);
        return;
      }
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
  const handleCheckIsHaveLyrics = async () => {
    try {
      const response: any = await SongService.getLyrics(songId);
      const dataRaw = response?.data?.data;
      if (dataRaw.lyrics) {
        setIsHaveLyrics(true);
      } else {
        setIsHaveLyrics(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    try {
      const response: any = await LibraryService.getPlaylist();
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        const { name, image, artist, audio } = dataRaw[trackIndex];
        setPlaylist(dataRaw);
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
  useEffect(() => {
    handleCheckIsHaveLyrics();
  }, [isPlaying]);
  return (
    <AudioContext.Provider
      value={{
        name,
        audio,
        image,
        artist,
        volume,
        songId,
        albumId,
        timeEnd,
        audioRef,
        modalVip,
        playlist,
        isPlaying,
        trackIndex,
        isLoading,
        isLooping,
        trackProgress,
        timeRunning,
        isShowLyrics,
        isHaveLyrics,
        isShowPlaylist,
        setIsShowPlaylist,
        setIsShowLyrics,
        setVolume,
        setTimeEnd,
        setPlaylist,
        setModalVip,
        setIsLooping,
        setIsLoading,
        setIsPlaying,
        setTrackIndex,
        setTimeRunning,
        setTrackProgress,
        handlePlay,
        handleLikeSong,
        handleLikeAlbum,
        handlePlayAlbum,
        handleLikeArtist,
        handlePlayOneSong,
        handlePlayNavigateSong,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
export default AudioContext;
