import React from "react";
import Explore from "../../../components/Explore";
import Library from "../../../components/Library";
import { Outlet } from "react-router-dom";
import Playlist from "../../../components/Library/Playlist";

const Playlistpage = () => {
  return (
    <>
      <Playlist>
        <Outlet />
      </Playlist>
    </>
  );
};

export default Playlistpage;
