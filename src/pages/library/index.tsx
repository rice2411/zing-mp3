import React from "react";
import Explore from "../../components/Explore";
import Library from "../../components/Library";
import { Outlet } from "react-router-dom";

const LibraryPage = () => {
  return (
    <>
      <Library>
        <Outlet />
      </Library>
    </>
  );
};

export default LibraryPage;
