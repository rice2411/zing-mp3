import React, { useEffect, useState } from "react";
import useAudio from "../../hooks/useAudio";
import "./styles.css";
import LibraryService from "../../service/library";
import Song from "../Shared/Song";
import Scrollbar from "../../shared/small_components/Scrollbar";
import useAuth from "../../hooks/useAuth";

const Playlist = () => {
  const { isShowPlaylist, trackIndex, songId }: any = useAudio();
  const { userProfile }: any = useAuth();
  const [tab, SetTab] = useState("playlist");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData]: any = useState([]);
  const fetchData = async () => {
    if (!userProfile._id) return;
    setIsLoading(true);
    try {
      const response: any = await LibraryService.getPlaylist();
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
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
      {data.length <= 0 ? (
        <></>
      ) : (
        <div
          style={{
            position: "absolute",
            transition: "all .5s ease-out",
            background: "#120822",
          }}
          className={`slide-left   top-0 right-0 z-50 h-screen overflow-hidden ${
            isShowPlaylist ? "w-[400px]" : ""
          }`}
        >
          <div className="p-2 ">
            {" "}
            <ul className="min-w-[284px] overflow-hidden text-xs text-center flex items-center rounded-full text-[#dadada]  bg-[#2A2139] mb-2">
              <li
                className="w-full  p-1 cursor-pointer"
                onClick={() => SetTab("playlist")}
              >
                <div
                  className={`inline-block w-full py-1   ${
                    tab == "playlist"
                      ? "bg-[hsla(0,0%,100%,.5)]  rounded-full"
                      : ""
                  } `}
                  aria-current="page"
                >
                  Danh sách phát
                </div>
              </li>{" "}
              <li
                className="w-full p-1 cursor-pointer"
                onClick={() => SetTab("recent")}
              >
                <div
                  className={`inline-block w-full py-1  ${
                    tab == "recent"
                      ? "bg-[hsla(0,0%,100%,.5)]  rounded-full"
                      : ""
                  } `}
                  aria-current="page"
                >
                  Nghe gần đây
                </div>
              </li>
            </ul>{" "}
            <Scrollbar className="h-[580px] overflow-x-hidden" isHover={true}>
              {data?.slice(0, trackIndex - 1).map((item: any, idx: any) => (
                <div key={idx}>
                  <Song
                    song={item}
                    index={idx}
                    timeData={0}
                    listSongs={null}
                    className={"opacity-50"}
                    isShowIndex={false}
                    isShowTime={false}
                  />
                </div>
              ))}
              <Song
                song={data[trackIndex]}
                index={111}
                timeData={0}
                listSongs={null}
                className={"!bg-[#9B4DE0] !hover:bg-[#9B4DE0] "}
                customTextArtist={"!text-[hsla(0,0%,100%,.6)]"}
                isShowIndex={false}
                isShowTime={false}
              />
              <p className="text-sm text-white font-bold py-2">Tiếp theo</p>
              {data
                .slice(trackIndex + 1, data.length)
                .map((item: any, idx: any) => (
                  <div key={idx}>
                    <Song
                      song={item}
                      index={idx}
                      timeData={0}
                      listSongs={null}
                      className={""}
                      isShowIndex={false}
                      isShowTime={false}
                    />
                  </div>
                ))}
            </Scrollbar>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;