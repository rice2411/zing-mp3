import { AiOutlinePlayCircle } from "react-icons/ai";

export const data = [
  {
    id: "songs",
    title: "Bài hát",
    icon: "/icon/song.svg",
    canPlay: <AiOutlinePlayCircle />,
  },
  {
    id: "playlists",
    title: "Playlist",
    icon: "/icon/playlist.svg",
    isLogged: true,
  },
  { id: "songs", title: "Album", icon: "/icon/album.svg", isLogged: true },
  {
    id: "songs",
    title: "Nhạc tải lên",
    icon: "/icon/upload.svg",
    isLogged: true,
  },
  { id: "recent", title: "Gần đây", icon: "/icon/current.svg", isLogged: true },
];
