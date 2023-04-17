import React from "react";
import { getFile } from "../../../../constant/file";
import { BsPlayFill } from "react-icons/bs";

import AlbumFace from "../../../Shared/AlbumFace";

const Albums = ({ data, albumsRef }: any) => {
  return (
    <>
      <div className="mt-5" ref={albumsRef}>
        <h1 className="mb-5 font-bold text-xl text-white">Playlist/Albums</h1>
        {data ? (
          <div
            className={`flex items-center ${
              data.length >= 5 ? "justify-between" : "gap-x-8"
            }`}
          >
            {data.map((item: any, idx: any) => (
              <div key={idx}>
                <AlbumFace
                  key={idx}
                  index={idx}
                  item={item}
                  isShowDesc={false}
                  className={`h-52 w-52 `}
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Albums;
