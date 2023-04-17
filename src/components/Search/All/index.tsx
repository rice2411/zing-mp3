import React, { useState, useEffect, useRef } from "react";

import { BsPlayFill } from "react-icons/bs";
import OutStanding from "./OutStading";
import Songs from "./Song";
import Albums from "./Album";
import Artist from "./Artist";
import { useLocation } from "react-router-dom";
import SearchService from "../../../service/search";
import { getFile } from "../../../constant/file";
import { IoMusicalNotesOutline } from "react-icons/io5";
import useTheme from "../../../hooks/useTheme";
import Loader from "../../../shared/small_components/Loading/Spinner";

const SearchAll = () => {
  const { styles }: any = useTheme();

  const location = useLocation();
  const { key } = location.state;
  const [data, setData]: any = useState({});
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const param = { search: key, tab: "all" };

    try {
      const response: any = await SearchService.searchFull(param);
      if (response?.data?.data) {
        setData(response?.data?.data);
        const times: any = await Promise.all(
          response?.data?.data?.songs?.map(async (song: any) => {
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
    <div>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {data?.error ? (
            <>
              <div
                className={` ${styles.album.subTextColor} bg-[#2F2739] h-[180px] flex flex-col items-center justify-center w-auto font bold`}
              >
                <IoMusicalNotesOutline className="h-24   w-24 " />
                <span className="  ">Không tìm thấy dữ liệu phù hợp</span>
              </div>
            </>
          ) : (
            <>
              <OutStanding data={data?.outStanding} />
              <Songs data={data?.songs} timeData={timeData} />
              <Albums data={data?.albums} />
              <Artist data={data?.artists} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchAll;
