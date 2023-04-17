import React, { useState, useEffect, useRef } from "react";
import { AiOutlineHeart, AiOutlinePause } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { getFile } from "../../constant/file";
import useTheme from "../../hooks/useTheme";
import AlbumService from "../../service/album";
import ButtonIcon from "../../shared/small_components/Button/Icon";
import { TbArrowsSort } from "react-icons/tb";
import Divide from "../../shared/small_components/Divide";
import { BsMusicNoteBeamed, BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { IoMusicalNotesOutline } from "react-icons/io5";
import Song from "../Shared/Song";
import useAudio from "../../hooks/useAudio";
import { convertToDate, cutString, totalTimeString } from "./helper";
import ArtistService from "../../service/artist";
import AlbumFace from "../Shared/AlbumFace";
import ArtistFace from "../Shared/ArtistFace";

const Album = () => {
  const location = useLocation();
  const { albumId } = location.state;

  const { styles }: any = useTheme();

  const [data, setData]: any = useState({});
  const [appearIn, setAppearIn]: any = useState({});
  const [neighbour, setNeighbour] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemRef = useRef(null);
  const imageRef = useRef(null);
  const { isPlaying, setIsPlaying, handlePlayAlbum }: any = useAudio();

  const handleMouseEnter = (id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current.classList.add("scale-110");
    } else {
      itemRef.current.classList.remove("hidden");
      itemRef.current.classList.add("flex");
      imageRef.current.classList.add("scale-110");
    }
  };
  const handleMouseLeave = (id: any) => {
    if (isPlaying && albumId == id) {
      imageRef.current.classList.remove("scale-110");
    } else {
      itemRef.current.classList.remove("flex");
      itemRef.current.classList.add("hidden");
      imageRef.current.classList.remove("scale-110");
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await AlbumService.detailAlbum(albumId);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setData(dataRaw);
        const times: any = await Promise.all(
          dataRaw?.songs?.map(async (song: any) => {
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
        fetchDataAppearIn(dataRaw?.authors?._id);
        const typeId = dataRaw.typeIds[0];

        fetchDataNeighbour(typeId);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchDataNeighbour = async (typeId: string) => {
    try {
      const response: any = await AlbumService.getNeighBour(typeId);
      const dataRaw = response?.data?.data;

      if (dataRaw) {
        setNeighbour(dataRaw);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchDataAppearIn = async (artistId: string) => {
    try {
      const response: any = await ArtistService.appearIn(artistId);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        let index = -1;
        for (let i = 0; i < dataRaw.album.length; i++) {
          if (dataRaw.album[i]._id == albumId) {
            index = i;
          }
        }
        if (index !== -1) dataRaw.album.splice(index, 1);

        setAppearIn(dataRaw);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <div className="flex px-4 py-3 ">
            <div className="min-w-[300px] sticky top-[0] left-0  h-[calc(100vh - 200px)] z-50 self-start">
              <div
                className={`  overflow-hidden relative h-[300px] w-[300px] `}
                onMouseEnter={() => handleMouseEnter(data._id)}
                onMouseLeave={() => handleMouseLeave(data._id)}
              >
                <img
                  ref={imageRef}
                  src={getFile(data.image)}
                  className={`h-[300px] w-[300px] rounded-md cursor-pointer duration-700 absolute cursor-pointer`}
                  alt=""
                />

                <div
                  className={`cursor-pointer bg-gray-900 bg-opacity-70 h-full w-full absolute z-50   justify-center items-center ${
                    isPlaying && albumId == data._id ? "flex" : "hidden"
                  } `}
                  ref={itemRef}
                >
                  <div className="text-white flex  items-center justify-center w-full px-5">
                    {isPlaying && albumId == data._id ? (
                      <>
                        <BsPauseCircle
                          className="text-5xl "
                          onClick={() => {
                            setIsPlaying((preState: any) => !preState);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <BsPlayCircle
                          className="text-5xl "
                          onClick={() => {
                            handlePlayAlbum(data._id);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4  text-center">
                <h1 className={`${styles.album.textColor} font-bold text-xl`}>
                  {data.name}
                </h1>
                <p className={`${styles.album.subTextColor} text-xs mt-1`}>
                  {data?.authors?.name} •{" "}
                  {convertToDate(data.publicationYear).getFullYear()}
                </p>
                <p className={`${styles.album.subTextColor} text-xs mt-1`}>
                  {data.likes} người yêu thích
                </p>

                {data?.songs?.length && (
                  <ButtonIcon
                    onClick={() => {
                      setIsPlaying((preState: any) => !preState);
                    }}
                    className={`mt-5 px-8 py-1.5 ${styles.album.button.backgroundColor} ${styles.album.textColor} rounded-full flex items-center`}
                  >
                    {isPlaying ? (
                      <>
                        <FaPause className={`${styles.album.textColor} mr-1`} />
                        Tạm dừng
                      </>
                    ) : (
                      <>
                        <FaPlay className={`${styles.album.textColor} mr-1`} />
                        Tiếp tục nghe
                      </>
                    )}
                  </ButtonIcon>
                )}

                <div className="mt-5">
                  <ButtonIcon
                    className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.album.textColor}  rounded-full h-10 w-10 cursor`}
                  >
                    <AiOutlineHeart />
                  </ButtonIcon>
                  <ButtonIcon
                    className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.album.textColor}  rounded-full h-10 w-10`}
                  >
                    <FiMoreHorizontal />
                  </ButtonIcon>
                </div>
              </div>
            </div>
            <div
              className={`${styles.album.textColor} ml-5 text-sm overflow-auto w-full`}
            >
              {data?.songs?.length ? (
                <>
                  {" "}
                  <span className={`${styles.album.subTextColor}`}>
                    Lời tựa:
                  </span>{" "}
                  {data?.description?.length <= 350 ? (
                    data?.description
                  ) : (
                    <>
                      {cutString(data?.description ?? "", 350)}{" "}
                      <span className="uppercase font-bold text-xs">
                        ... Xem thêm
                      </span>
                    </>
                  )}
                  <div className="mt-4">
                    <div
                      className={`flex justify-between mb-3  px-2 font-bold uppercase text-xs ${styles.album.subTextColor}`}
                    >
                      <div className="flex items-center">
                        <TbArrowsSort className="mr-5" />
                        <span>Bài hát</span>
                      </div>
                      <p>Thời gian</p>
                    </div>
                    <div>
                      <Divide />

                      {data?.songs?.map((song: any, index: number) => (
                        <div key={index}>
                          <Song
                            song={song}
                            index={index}
                            timeData={timeData[index]}
                            authorName={data.authors.name}
                            listSongs={data?.songs}
                          />
                        </div>
                      ))}
                      <p
                        className={`${styles.album.subTextColor} text-xs mt-2`}
                      >
                        {data?.songs?.length} bài hát •
                        {" " + totalTimeString(timeData)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={` ${styles.album.subTextColor} bg-[#2F2739] h-[180px] flex flex-col items-center justify-center w-[850px] font bold`}
                  >
                    <IoMusicalNotesOutline className="h-24   w-24 " />
                    <span className="  ">
                      Không có bài hát trong playlist của bạn
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          {data?.songs?.length && (
            <div className={`mt-5 ${styles.album.textColor} text-xl font-bold`}>
              <h1>{data?.authors?.name ?? ""} Xuất Hiện Trong</h1>
              <div
                className={`mt-3 flex ${
                  appearIn?.album?.length < 4 ? "gap-x-14" : "justify-between"
                } `}
              >
                <ArtistFace
                  key={0}
                  index={0}
                  item={appearIn?.artist}
                  isShowDesc={true}
                  className={`h-52 w-52`}
                />
                {appearIn?.album?.map((item: any, index: any) => (
                  <AlbumFace
                    key={index}
                    index={index}
                    item={item}
                    isShowDesc={true}
                    className={`h-52 w-52`}
                  />
                ))}
              </div>
            </div>
          )}
          {data?.songs?.length && (
            <div className={`mt-5 ${styles.album.textColor} text-xl font-bold`}>
              <h1>Có thể bạn quan tâm</h1>
              <div className="mt-3 flex justify-between">
                {neighbour
                  ?.reverse()
                  .slice(0, 5)
                  .map((item: any, index: any) => (
                    <AlbumFace
                      key={index}
                      index={index}
                      item={item}
                      isShowDesc={true}
                      className={`h-52 w-52`}
                    />
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Album;
