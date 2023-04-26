import React, { useEffect, useState } from "react";
import ChartService from "../../service/chart";
import { getFile } from "../../constant/file";
import ItemChart from "../ZingChart/item";
import SongService from "../../service/song";
import Spinner from "../../shared/small_components/Loading/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const NewSong = () => {
  const [data, setData]: any = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (limit: number = 10) => {
    setIsLoading(true);
    try {
      const resposne: any = await SongService.getNewRelease({ option: limit });
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
    fetchData(10);
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-5xl font-bold text-white"> BXH Nhạc Mới</h1>{" "}
          <div className="flex flex-col w-auto mt-5">
            <InfiniteScroll
              dataLength={data.length}
              next={() => {
                fetchData(data.length + 10);
              }}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {data?.map((item: any, idx: any) => (
                <div key={idx}>
                  <ItemChart song={item} index={idx} timeData={timeData[idx]} />
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </>
      )}
    </>
  );
};

export default NewSong;
