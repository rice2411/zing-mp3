import React from "react";

import { BsPlayFill } from "react-icons/bs";
import ArtistFace from "../../../Shared/ArtistFace";

const Artist = ({ data, artistsRef }: any) => {
  return (
    <>
      <div className="mt-5" ref={artistsRef}>
        <h1 className="mb-5 font-bold text-xl text-white">Nghệ Sĩ/OA</h1>{" "}
        {data?.map((item: any, idx: any) => (
          <div key={idx}>
            <ArtistFace
              key={0}
              index={0}
              item={item}
              isShowDesc={true}
              className={`h-52 w-52`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Artist;
