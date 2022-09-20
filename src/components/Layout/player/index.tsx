import React from "react";
import AudioPlayer from "./audioPlayer";

export const PLayer = () => {
  const tracks = [
    {
      title: "Cali",
      artist: "Wataboi",
      audioSrc: "/audio/test.mp3",
      image: "imgSrc",
      color: "#00aeb0",
    },
  ];
  return <AudioPlayer tracks={tracks} />;
};
