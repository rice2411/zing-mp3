import React, { useEffect, useState } from "react";
import LibraryService from "../../service/library";
import ArtistFace from "../Shared/ArtistFace";
import AlbumFace from "../Shared/AlbumFace";
import { data as Tabs } from "./tab";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { getFile } from "../../constant/file";
import Song from "../Shared/Song";
import Divide from "../../shared/small_components/Divide";
import { TbArrowsSort } from "react-icons/tb";
import { totalTimeString } from "../Album/helper";

const Library = () => {
  const { styles }: any = useTheme();
  const [data, setData]: any = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const location = useLocation();

  const activeTabClass = `!text-white !border-b-2 !border-[#9b4de0]`;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await LibraryService.get();
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw?.likedSongs?.map(async (song: any) => {
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
        <></>
      ) : (
        <div>
          <div>
            <h1 className="text-white text-3xl font-bold">Thư viện</h1>
            <div className="mt-5">
              {data?.likedArtists?.map((artist: any, index: any) => (
                <ArtistFace
                  key={index}
                  index={index}
                  item={artist}
                  isShowDesc={true}
                  className={`h-52 w-52`}
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-white text-xl uppercase font-bold">Playlist</h1>
            <div className="mt-5 flex items-center flex-wrap  gap-y-5 gap-x-12">
              {data?.likedAlbums?.map((album: any, index: any) => (
                <AlbumFace
                  key={index}
                  index={index}
                  item={album}
                  isShowDesc={false}
                  className={`h-52 w-52`}
                />
              ))}
            </div>
          </div>
          <div
            className={`text-sm font-medium text-center mt-10 border-b-[1px] border-[${styles.dropdown.borderColor}]`}
          >
            <ul className="flex flex-wrap -mb-px">
              {Tabs.children.map((tab: any, idx: any) => (
                <li className="mr-2" key={idx}>
                  <Link
                    to={Tabs.route + tab.route}
                    className={`${
                      location.pathname.includes(tab.route) && activeTabClass
                    } uppercase inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[#dadada] hover:text-white`}
                  >
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <div
              className={`flex justify-between mb-3  px-2 font-bold uppercase text-xs ${styles.album.subTextColor}`}
            >
              <div className="flex items-center">
                <TbArrowsSort className="mr-5" />
                <span>Bài hát</span>
              </div>
              <p>ALBUM</p>
              <p>Thời gian</p>
            </div>
            <div>
              <Divide />

              {data?.likedSongs?.map((song: any, index: number) => (
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
        </div>
      )}
    </>
  );
};

export default Library;
