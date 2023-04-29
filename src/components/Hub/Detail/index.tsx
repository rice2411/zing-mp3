import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HubService from "../../../service/hub";
import Spinner from "../../../shared/small_components/Loading/Spinner";
import AlbumFace from "../../Shared/AlbumFace";
import Song from "../../Shared/Song";
import { getFile } from "../../../constant/file";
import ArtistFace from "../../Shared/ArtistFace";

const HubDetail = () => {
  const location = useLocation();
  const { hubId } = location.state;

  const [data, setData]: any = useState({});
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await HubService.get(hubId);
      const dataRaw = response?.data?.data;

      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw.hotSongs?.map(async (song: any) => {
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
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-hidden">
          <div className="relative w-[1296px] h-[353px] ">
            <img src={data?.hub?.image} className="w-full h-full absolute" />
            <div className="text-white font-bold text-7xl absolute z-[999] mx-10 py-[100px]">
              {data?.hub?.name}
            </div>
          </div>
          <div className=" mx-10 my-5">
            <h1 className="text-white font-bold text-2xl ">Nổi Bật</h1>
            <div className="flex justify-between mt-5">
              {data?.outStanding?.map((item: any, index: any) => (
                <div key={index}>
                  <AlbumFace
                    key={index}
                    index={index}
                    item={item}
                    className={`h-52 w-52`}
                    isShowDesc={false}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" mx-10 my-5">
            <h1 className="text-white font-bold text-2xl ">Hot Songs</h1>
            <div className="flex justify-between flex-wrap mt-5">
              {data?.hotSongs?.map((item: any, index: any) => (
                <div key={index}>
                  <Song
                    song={item}
                    index={index}
                    timeData={timeData[index]}
                    className={"w-[400px]"}
                    isShowIndex={false}
                    isHiddenBorder={true}
                  />
                </div>
              ))}
            </div>
          </div>{" "}
          <div className=" mx-10 my-5">
            <h1 className="text-white font-bold text-2xl ">Album</h1>
            <div className="flex justify-between mt-5">
              {data?.albums?.map((item: any, index: any) => (
                <div key={index}>
                  <AlbumFace
                    key={index}
                    index={index}
                    item={item}
                    className={`h-52 w-52`}
                    isShowDesc={false}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" mx-10 my-5">
            <h1 className="text-white font-bold text-2xl ">Nghệ Sĩ</h1>
            <div className="flex justify-between mt-5">
              {data?.artists?.map((item: any, index: any) => (
                <div key={index}>
                  <ArtistFace
                    key={index}
                    index={index}
                    item={item}
                    isShowDesc={true}
                    className={`h-52 w-52`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HubDetail;
