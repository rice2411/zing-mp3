import React from "react";
import Player from "./Player";

export const Audio = () => {
  const tracks = [
    {
      title: "Ngã Tư Không Đèn",
      artist: "Trang, Khoa Vũ",
      audioSrc: "/audio/test.mp3",
      image: "/images/ntkd.webp",
    },
  ];
  return <Player tracks={tracks} />;
};
