import React, { useState, useEffect, useRef } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlinePause } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
import MusicWave from "../../shared/small_components/MusicWave";
import Spinner from "../../shared/small_components/Loading/Spinner";
import useAuth from "../../hooks/useAuth";
import Dropdown, {
  dropDownIconClass,
  liClass,
} from "../../shared/small_components/DropDown";
import { BiShare, BiTrashAlt } from "react-icons/bi";
import LibraryService from "../../service/library";
import { toast } from "react-toastify";

const Album = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const albumIdQuery = searchParams.get("albumIdQuery");
  const authorId = searchParams.get("authorId");
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const { handleLikeAlbum }: any = useAudio();

  const [data, setData]: any = useState({});
  const [appearIn, setAppearIn]: any = useState({});
  const [neighbour, setNeighbour] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchData, setIsFetchData] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const itemRef = useRef(null);
  const imageRef = useRef(null);
  const { isPlaying, setIsPlaying, handlePlayAlbum, albumId }: any = useAudio();
  const navigate = useNavigate();

  const handleMouseEnter = (id: any) => {
    if (isPlaying && albumIdQuery == id) {
      imageRef.current.classList.add("scale-110");
    } else {
      itemRef.current.classList.remove("hidden");
      itemRef.current.classList.add("flex");
      imageRef.current.classList.add("scale-110");
    }
  };
  const handleMouseLeave = (id: any) => {
    if (isPlaying && albumIdQuery == id) {
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
      const response: any = await AlbumService.detailAlbum(albumIdQuery);
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
        if (dataRaw.type != "custom") {
          await fetchDataAppearIn(dataRaw?.authors?._id);
          const typeId = dataRaw.typeIds[0];
          await fetchDataNeighbour(typeId);
        }
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
          if (dataRaw.album[i]._id == albumIdQuery) {
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
  const handleRemovePlaylist = async (playlistId: string) => {
    try {
      const param = {
        playlistId: playlistId,
      };
      const response: any = await LibraryService.removePlaylist(param);
      if (response?.data?.data) {
        navigate("/mymusic");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [albumIdQuery, isFetchData]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex px-4 py-3 ">
            <div className="min-w-[300px] sticky top-[0] left-0  h-[calc(100vh - 200px)]  self-start">
              <div
                className={`  overflow-hidden relative h-[300px] w-[300px] `}
                onMouseEnter={() => handleMouseEnter(data._id)}
                onMouseLeave={() => handleMouseLeave(data._id)}
              >
                <img
                  ref={imageRef}
                  src={getFile(data.image)}
                  className={`h-[300px] w-[300px] rounded-md  duration-700 absolute cursor-pointer`}
                  alt=""
                />

                <div
                  className={`cursor-pointer hover:bg-gray-900 hover:bg-opacity-70 h-full w-full absolute z-50   justify-center items-center ${
                    isPlaying && albumIdQuery == data._id ? "flex" : "hidden"
                  } `}
                  ref={itemRef}
                >
                  <div className="text-white flex  items-center justify-center w-full px-5">
                    {isPlaying && albumIdQuery == data._id ? (
                      <>
                        <MusicWave
                          className="text-6xl cursor-pointer "
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
                {data?.type != "custom" ? (
                  <>
                    <p className={`${styles.album.subTextColor} text-xs mt-1`}>
                      {data?.authors?.name} •{" "}
                      {convertToDate(data.publicationYear).getFullYear()}
                    </p>
                    <p className={`${styles.album.subTextColor} text-xs mt-1`}>
                      {data.likes} người yêu thích
                    </p>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className={`${styles.album.subTextColor} text-xs mt-1`}>
                      Tạo bởi{" "}
                      {data.authors.first_name + " " + data.authors.last_name}
                    </p>
                  </>
                )}

                {data?.songs?.length > 0 && (
                  <ButtonIcon
                    onClick={() => {
                      if (data._id == albumId)
                        setIsPlaying((preState: any) => !preState);
                      else {
                        handlePlayAlbum(data._id);
                      }
                    }}
                    className={`mt-5 px-8 py-1.5 ${styles.album.button.backgroundColor} ${styles.album.textColor} rounded-full flex items-center`}
                  >
                    {isPlaying && data._id == albumId ? (
                      <>
                        <FaPause className={`${styles.album.textColor} mr-1`} />
                        Tạm dừng
                      </>
                    ) : (
                      <>
                        <FaPlay className={`${styles.album.textColor} mr-1`} />
                        {data._id == albumId ? "Tiếp tục nghe" : "Phát"}
                      </>
                    )}
                  </ButtonIcon>
                )}

                <div className="mt-5 flex justify-center">
                  {data?.type != "custom" && (
                    <ButtonIcon
                      onClick={() => {
                        handleLikeAlbum(data?._id);
                        if (userProfile._id)
                          setIsLiked((prevState: any) => !prevState);
                      }}
                      className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.album.textColor}  rounded-full h-10 w-10 cursor`}
                    >
                      {isLiked ? (
                        <AiFillHeart className="text-[#9B4DE0]  text-[20px]" />
                      ) : (
                        <AiOutlineHeart className="text-[20px]" />
                      )}
                    </ButtonIcon>
                  )}

                  <Dropdown
                    button={(onClick: any) => {
                      return (
                        <ButtonIcon
                          onClick={onClick}
                          className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.album.textColor}  rounded-full h-10 w-10`}
                        >
                          <FiMoreHorizontal />
                        </ButtonIcon>
                      );
                    }}
                    isShowTop={true}
                    content={(onClick: any) => {
                      return (
                        <ul className="min-w-[250px] py-2 text-sm  ">
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                              target="_blank"
                              className={`${liClass} `}
                            >
                              <BiShare className={`${dropDownIconClass}`} />
                              Chia sẻ
                            </a>
                          </li>
                          {type == "custom" && authorId == userProfile._id && (
                            <li
                              onClick={() => {
                                handleRemovePlaylist(data?._id);
                                onClick();
                              }}
                            >
                              <div className={`${liClass}  cursor-pointer`}>
                                <BiTrashAlt
                                  className={`${dropDownIconClass}`}
                                />
                                Xoá playlist này
                              </div>
                            </li>
                          )}
                        </ul>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${styles.album.textColor} ml-5 text-sm overflow-auto w-full`}
            >
              {data?.songs?.length ? (
                <>
                  {data.type != "custom" && (
                    <>
                      <span className={`${styles.album.subTextColor}`}>
                        Lời tựa:
                      </span>
                      {data?.description?.length <= 350 ? (
                        data?.description
                      ) : (
                        <>
                          {cutString(data?.description ?? "", 350)}
                          <span className="uppercase font-bold text-xs">
                            ... Xem thêm
                          </span>
                        </>
                      )}
                    </>
                  )}
                  <div className="mt-4 overflow-hidden min-h-[800px]">
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
                            setIsFetchData={setIsFetchData}
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
          {data?.type != "custom" && (
            <>
              {data?.songs?.length && (
                <div
                  className={`mt-5 ${styles.album.textColor} text-xl font-bold`}
                >
                  <h1>{data?.authors?.name ?? ""} Xuất Hiện Trong</h1>
                  <div className={`mt-3 flex gap-x-12  flex-wrap  `}>
                    <ArtistFace
                      key={0}
                      index={0}
                      item={appearIn?.artist}
                      isShowDesc={true}
                      className={`h-52 w-52`}
                    />
                    {appearIn?.album
                      ?.slice(0, 4)
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
              {data?.songs?.length && (
                <div
                  className={`mt-5 ${styles.album.textColor} text-xl font-bold`}
                >
                  <h1>Có thể bạn quan tâm</h1>
                  <div className="mt-3 flex justify-between">
                    {neighbour.slice(0, 5).map((item: any, index: any) => (
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
      )}
    </>
  );
};

export default Album;
