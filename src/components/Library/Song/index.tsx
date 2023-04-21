import React, { useState, useEffect } from "react";
import { TbArrowsSort } from "react-icons/tb";
import Divide from "../../../shared/small_components/Divide";
import useTheme from "../../../hooks/useTheme";
import Song from "../../Shared/Song";
import LibraryService from "../../../service/library";
import { getFile } from "../../../constant/file";

const Songs = () => {
  const { styles }: any = useTheme();
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await LibraryService.get();
      const dataRaw = response?.data?.data.likedSongs;

      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw?.map(async (song: any) => {
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
  }, []);
  return (
    <div className="mt-4">
      <div
        className={`flex justify-between mb-3  px-2 font-bold uppercase text-xs ${styles.album.subTextColor}`}
      >
        <div className="flex items-center">
          <TbArrowsSort className="mr-5 " />
          <span>Bài hát</span>
        </div>
        <p>ALBUM</p>
        <p>Thời gian</p>
      </div>
      <div>
        <Divide />

        {data &&
          data?.map((song: any, index: number) => (
            <div key={index}>
              <Song
                song={song}
                index={index}
                timeData={timeData[index]}
                authorName={""}
                listSongs={data?.songs}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Songs;
