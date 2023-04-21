import React, { useEffect, useState } from "react";
import RiceChart from "../Explore/RiceChart";
import ChartService from "../../service/chart";
import { getFile } from "../../constant/file";
import Song from "../Shared/Song";

const ZingChart = () => {
  const [data, setData]: any = useState([]);
  const [timeData, setTimeData] = useState([]);
  const fetchData = async () => {
    try {
      const resposne: any = await ChartService.get({ option: 100 });
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
    }
  };
  useEffect(() => {
    fetchData();
    localStorage.setItem(
      "avatar",
      "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.25/static/media/bg-chart.fd766403.jpg"
    );
  }, []);
  return (
    <div className=" relative">
      <h1 className="text-5xl font-bold text-white mt-10">#zingchart</h1>
      <RiceChart isFullChart={true} />
      <div className="flex flex-col">
        {data?.map((item: any, idx: any) => (
          <div key={idx}>
            <Song
              song={item.info}
              index={idx}
              timeData={timeData[idx]}
              listSongs={null}
              className={"flex"}
              isShowIndex={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZingChart;
