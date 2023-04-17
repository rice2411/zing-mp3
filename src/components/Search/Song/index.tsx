import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import Song from "../../Shared/Song";
import SearchService from "../../../service/search";
import { getFile } from "../../../constant/file";
import Spinner from "../../../shared/small_components/Loading/Spinner";

const Songs = () => {
  const location = useLocation();
  const { key } = location.state;

  const [data, setData]: any = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const param = { search: key, tab: "songs" };

    try {
      const response: any = await SearchService.searchFull(param);
      const rawData = response?.data?.data?.songs;
      if (rawData) {
        setData(rawData);
        const times: any = await Promise.all(
          rawData?.map(async (song: any) => {
            const newAudio = new Audio(getFile(song.audio));
            const getDuration = () =>
              new Promise((resolve) => {
                newAudio.onloadedmetadata = () => {
                  resolve(newAudio.duration);
                };
              });
            const duration: any = await getDuration();
            const time: any = new Date(duration * 1000)
              .toISOString()
              .slice(14, 19);
            return time;
          })
        );

        setTimeData(times);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [key]);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <div className="mt-5  w-full">
            <h1 className="mb-5 font-bold text-xl text-white">Bài Hát</h1>
            <div className="flex flex-col">
              {data?.map((item: any, idx: any) => (
                <div key={idx}>
                  <Song
                    song={item}
                    index={idx}
                    timeData={timeData[idx]}
                    authorName={""}
                    listSongs={null}
                    className={"flex"}
                    isShowIndex={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Songs;
