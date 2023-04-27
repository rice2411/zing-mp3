import React, { useEffect, useState, useRef } from "react";
import LibraryService from "../../service/library";
import ArtistFace from "../Shared/ArtistFace";
import AlbumFace from "../Shared/AlbumFace";
import { data as Tabs } from "./tab";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { getFile } from "../../constant/file";
import Spinner from "../../shared/small_components/Loading/Spinner";

const Library = ({ ...props }: any) => {
  const location = useLocation();
  const { styles }: any = useTheme();
  const { id } = location?.state ?? "";
  const [data, setData]: any = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const songsRef = useRef(null);

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
  const checkRoute = (route: any) => {
    if (location.pathname == Tabs.route && route == -1) {
      return true;
    } else {
      return location.pathname.includes(route);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(() => {
    const element = document.getElementById(id);
    if (element && !isLoading) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div>
          <div id="recent" className="min-h-[345px]">
            <h1 className="text-white text-3xl font-bold">Thư viện</h1>
            <div className="mt-5 flex gap-x-12">
              {data?.likedArtists?.map((artist: any, index: any) => (
                <div key={index}>
                  <ArtistFace
                    key={index}
                    index={index}
                    item={artist}
                    isShowDesc={true}
                    className={`h-52 w-52`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 min-h-[344px]" id="playlists">
            <h1 className="text-white text-xl uppercase font-bold">Playlist</h1>
            <div className="mt-5 flex items-center flex-wrap  gap-y-5 gap-x-12">
              {data?.likedAlbums
                ?.filter((item: any) => item.type == "playlist")
                .map((album: any, index: any) => (
                  <div key={index}>
                    <AlbumFace
                      key={index}
                      index={index}
                      item={album}
                      isShowDesc={false}
                      className={`h-52 w-52`}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div
            ref={songsRef}
            className={` mtext-sm font-medium text-center mt-10 border-b-[1px] border-[${styles.dropdown.borderColor}]`}
          >
            <ul className="flex flex-wrap -mb-px">
              {Tabs.children.map((tab: any, idx: any) => (
                <li className="mr-2" key={idx}>
                  <Link
                    to={Tabs.route + (tab.route == -1 ? "" : tab.route)}
                    className={`${
                      checkRoute(tab.route) && activeTabClass
                    } uppercase inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[#dadada] hover:text-white`}
                  >
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="songs" className="min-h-[1000px]">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

export default Library;
