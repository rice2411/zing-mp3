import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArtistService from "../../service/artist";
import { getFile } from "../../constant/file";
import { MdPersonAddAlt } from "react-icons/md";
import useTheme from "../../hooks/useTheme";
import Song from "../Shared/Song";
import AlbumFace from "../Shared/AlbumFace";
import { cutString } from "../Album/helper";
import ArtistFace from "../Shared/ArtistFace";
import Spinner from "../../shared/small_components/Loading/Spinner";
import BlankModal from "../../shared/small_components/Modal/Blank";
import Scrollbar from "../../shared/small_components/Scrollbar";
import useAuth from "../../hooks/useAuth";
import useAudio from "../../hooks/useAudio";
import { AiOutlineCheck } from "react-icons/ai";

const Artist = () => {
  const location = useLocation();

  const { artistId } = location.state;
  const { styles }: any = useTheme();
  const { userProfile }: any = useAuth();
  const { handleLikeArtist }: any = useAudio();

  const [data, setData]: any = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [followers, setFollowers] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: any = await ArtistService.get(artistId);
      const dataRaw = response?.data?.data;
      if (dataRaw) {
        setIsLiked(dataRaw?.artist?.followers.includes(userProfile._id));
        setFollowers(dataRaw?.artist?.followers?.length);
        setData(response?.data?.data);
        localStorage.setItem(
          "avatar",
          JSON.stringify(dataRaw?.artist?.avatar || "")
        );
        const times: any = await Promise.all(
          dataRaw?.outStandingSongs?.map(async (song: any) => {
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
  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    fetchData();
    scrollToTop();
  }, [artistId]);
  useEffect(() => {
    window.addEventListener("beforeunload", scrollToTop);
    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="relative mt-16">
            <div className="flex items-center">
              <img
                src={getFile(data?.artist?.avatar)}
                alt={data?.artist?.name}
                className="rounded-full h-[140px] w-[140px]"
              />
              <div className="ml-5 text-white">
                <h1 className="text-6xl font-bold tracking-wide  mb-3">
                  {data?.artist?.name}
                </h1>
                <div className="flex items-center gap-x-5 text-sm">
                  <div className="">
                    {new Intl.NumberFormat("vi-VN").format(followers)} người
                    quan tâm
                  </div>
                  <div
                    onClick={() => {
                      handleLikeArtist(data?.artist?._id);
                      setIsLiked((prevState: any) => !prevState);
                      !isLiked
                        ? setFollowers((prevState: any) => prevState + 1)
                        : setFollowers((prevState: any) => prevState - 1);
                    }}
                    className={`cursor-pointer flex px-5 py-1 items-center justify-center rounded-full border-[1px] border-[${styles.dropdown.borderColor}] `}
                  >
                    {isLiked ? <AiOutlineCheck /> : <MdPersonAddAlt />}

                    <p className="text-xs uppercase ml-2">
                      {isLiked ? "Đã " : ""}quan tâm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl mt-16">
                Bài Hát Nổi Bật
              </h1>
              <div className="flex items-center justify-between flex-wrap mt-3">
                {data?.outStandingSongs?.map((item: any, idx: any) => (
                  <div key={idx}>
                    <Song
                      song={item}
                      index={idx}
                      timeData={timeData[idx]}
                      authorName={""}
                      listSongs={null}
                      className={"w-[600px]"}
                      isShowIndex={false}
                    />
                  </div>
                ))}
              </div>
            </div>{" "}
            <div className="mt-5">
              <h1 className="mb-5 font-bold text-xl text-white">Albums</h1>
              <div className={`flex items-center gap-x-12 flex-wrap`}>
                {data?.albums
                  ?.filter((item: any) => item.type == "album")
                  .map((album: any, idx: any) => (
                    <div key={idx}>
                      <AlbumFace
                        key={idx}
                        index={idx}
                        item={album}
                        isShowDesc={false}
                        className={`h-52 w-52 `}
                      />
                    </div>
                  ))}
              </div>
            </div>{" "}
            <div className="mt-5">
              <h1 className="mb-5 font-bold text-xl text-white">Tuyển tập</h1>
              <div className={`flex items-center gap-x-12 flex-wrap`}>
                {data?.albums
                  ?.filter((item: any) => item.type == "playlist")
                  .map((album: any, idx: any) => (
                    <div key={idx}>
                      <AlbumFace
                        key={idx}
                        index={idx}
                        item={album}
                        isShowDesc={false}
                        className={`h-52 w-52 `}
                      />
                    </div>
                  ))}
              </div>
            </div>{" "}
            <div className="mt-5">
              <h1 className="mb-5 font-bold text-xl text-white">
                Bạn Có Thể Thích
              </h1>
              <div className="flex gap-x-12">
                {data?.suggest?.map((artist: any, index: any) => (
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
            <div className="mt-5">
              <h1 className="mb-5 font-bold text-xl text-white">
                Về {data?.artist?.name}
              </h1>
              <div className={`flex `}>
                <img
                  src={getFile(data?.artist?.banner)}
                  className="rounded min-w-[450px] max-h-[300px]  object-cover"
                  alt=""
                />
                <div className="ml-10 text-[hsla(0,0%,100%,0.5)] ">
                  <div className="text-sm  max-w-[450px] ">
                    {data?.artist?.description.length <= 350 ? (
                      data?.artist?.description
                    ) : (
                      <>
                        {cutString(data?.artist?.description ?? "", 400)}{" "}
                        <span
                          className="uppercase font-bold text-xs text-white cursor-pointer"
                          onClick={() => {
                            setIsOpenModal(true);
                          }}
                        >
                          ... Xem thêm
                        </span>
                      </>
                    )}
                  </div>
                  <div className="mt-10">
                    <p className="font-bold text-white text-xl">
                      {new Intl.NumberFormat("vi-VN").format(followers)}
                    </p>
                    <span className="text-sm"> Người quan tâm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BlankModal
            isShow={isOpenModal}
            handleClose={() => {
              setIsOpenModal(false);
            }}
            className={`bg-[#34224F] max-w-[448px] max-h-[480px]`}
            classHeader={`!border-0 p-0`}
            isShowHeader={true}
          >
            <div className="flex flex-col items-center  justify-center text-center w-full pb-5">
              <img
                src={getFile(data?.artist?.avatar)}
                className="rounded-full w-[110px] h-[110px]"
                alt=""
              />
              <p className="mt-2 font-bold text-white text-2xl">
                {data?.artist?.name}
              </p>
              <Scrollbar
                isHover={true}
                className="text-sm text-[hsla(0,0%,100%,0.5)] max-h-[200px]"
              >
                {data?.artist?.description}
              </Scrollbar>
            </div>
          </BlankModal>
        </>
      )}
    </>
  );
};

export default Artist;
