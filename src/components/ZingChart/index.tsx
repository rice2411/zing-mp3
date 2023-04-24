import React, { useEffect, useState } from "react";
import RiceChart from "../Explore/RiceChart";
import ChartService from "../../service/chart";
import { getFile } from "../../constant/file";
import ItemChart from "./item";
import Button from "../../shared/small_components/Button/Basic";
import Spinner from "../../shared/small_components/Loading/Spinner";

const ZingChart = () => {
  const [data, setData]: any = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [limitData, setLimitData] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [isHiddenButton, setIsHiddenButton] = useState(false);
  const fetchData = async (limitData: number) => {
    setIsLoading(true);
    try {
      const resposne: any = await ChartService.get({ option: limitData });
      const dataRaw = resposne?.data?.data.data;
      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw?.map(async (item: any) => {
            const song = item.info;
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
    fetchData(limitData);
  }, [limitData]);
  useEffect(() => {
    localStorage.setItem(
      "avatar",
      "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.25/static/media/bg-chart.fd766403.jpg"
    );
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className=" relative">
            <h1 className="text-5xl font-bold text-white mt-10">#zingchart</h1>
            <RiceChart isFullChart={true} />
            <div className="flex flex-col w-auto">
              {data?.map((item: any, idx: any) => (
                <div key={idx}>
                  <ItemChart
                    song={item.info}
                    index={idx}
                    timeData={timeData[idx]}
                  />
                </div>
              ))}
              {!isHiddenButton && (
                <div className="mt-5 flex justify-center">
                  <Button
                    onClick={() => {
                      setLimitData(100);
                      setIsHiddenButton(true);
                    }}
                    text="Xem Top 100"
                    className="text-sm rounded-full border border-1 border-white !text-white px-5 py-1.5 w-max hover:bg-[hsla(0,0%,100%,.1)]"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-10 relative">
            <h1 className="text-3xl font-bold text-white">
              Bảng Xếp Hạng Tuần
            </h1>
            <div className="flex  mt-5 justify-between">
              <div className=" min-w-[380px] bg-[hsla(0,0%,100%,0.05)] rounded-xl">
                <h1 className="text-xl font-bold text-white px-4 py-2">
                  Việt Nam
                </h1>
                <div className="px-2.5">
                  {data?.slice(0, 5).map((item: any, idx: any) => (
                    <div key={idx}>
                      <ItemChart
                        song={item.info}
                        index={idx}
                        timeData={timeData[idx]}
                        isShortChart={true}
                      />
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className=" min-w-[380px] bg-[hsla(0,0%,100%,0.05)] rounded-xl">
                <h1 className="text-xl font-bold text-white px-4 py-2">
                  US-UK
                </h1>
                <div className="px-2.5">
                  {data?.slice(0, 5).map((item: any, idx: any) => (
                    <div key={idx}>
                      <ItemChart
                        song={item.info}
                        index={idx}
                        timeData={timeData[idx]}
                        isShortChart={true}
                      />
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className=" min-w-[380px] bg-[hsla(0,0%,100%,0.05)] rounded-xl">
                <h1 className="text-xl font-bold text-white px-4 py-2">
                  K-Pop
                </h1>
                <div className="px-2.5">
                  {data?.slice(0, 5).map((item: any, idx: any) => (
                    <div key={idx}>
                      <ItemChart
                        song={item.info}
                        index={idx}
                        timeData={timeData[idx]}
                        isShortChart={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ZingChart;
