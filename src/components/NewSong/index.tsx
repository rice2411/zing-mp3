import React, { useEffect, useState } from "react";
import ChartService from "../../service/chart";
import { getFile } from "../../constant/file";
import ItemChart from "../ZingChart/item";
import SongService from "../../service/song";
import Spinner from "../../shared/small_components/Loading/Spinner";

const NewSong = () => {
  const [data, setData]: any = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resposne: any = await SongService.getNewRelease({ option: 100 });
      const dataRaw = resposne?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw?.map(async (item: any) => {
            const newAudio = new Audio(getFile(item.audio));
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
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-5xl font-bold text-white"> BXH Nhạc Mới</h1>{" "}
          <div className="flex flex-col w-auto mt-5">
            {data?.map((item: any, idx: any) => (
              <div key={idx}>
                <ItemChart song={item} index={idx} timeData={timeData[idx]} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NewSong;
