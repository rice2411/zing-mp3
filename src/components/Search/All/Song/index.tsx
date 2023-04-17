import React from "react";

import { BsPlayFill } from "react-icons/bs";
import Song from "../../../Shared/Song";

const Songs = ({ data, songsRef, timeData = null }: any) => {
  return (
    <>
      <div className="mt-5" ref={songsRef}>
        <h1 className="mb-5 font-bold text-xl text-white">Bài Hát</h1>
        {data ? (
          <div className="flex items-center justify-between flex-wrap">
            {data.slice(0, 6).map((item: any, idx: any) => (
              <div key={idx}>
                <Song
                  song={item}
                  index={idx}
                  timeData={timeData[idx]}
                  authorName={""}
                  listSongs={null}
                  className={"w-[600px]"}
                  isShowIndex={false}
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

export default Songs;
