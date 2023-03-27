import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { date } from "yup";
import { getFile } from "../../constant/file";
import useTheme from "../../hooks/useTheme";
import AlbumService from "../../service/album";
import ButtonIcon from "../../shared/small_components/Button/Icon";
import { stringToFormatDate } from "../../utils/helpers";
import { TbArrowsSort } from "react-icons/tb";
import Divide from "../../shared/small_components/Divide";

const Album = () => {
  const location = useLocation();

  const { styles }: any = useTheme();

  const [data, setData]: any = useState({});
  const [timeData, setTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const albumId = location.state;
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
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  function cutString(s: String, n: number) {
    var cut = s.indexOf(" ", n);
    if (cut == -1) return s;
    return s.substring(0, cut);
  }

  const convertToDate = (date: string) => {
    return new Date(Date.parse(date));
  };

  function zeroPad(num: any) {
    var str = String(num);
    if (str.length < 2) {
      return "0" + str;
    }

    return str;
  }

  // assuming your time strings will always be (H*:)(m{0,2}:)s{0,2} and never negative
  function totalTimeString(timeStrings: any) {
    var totals = timeStrings.reduce(
      function (a: any, timeString: any) {
        var parts = timeString.split(":");
        var temp;
        if (parts.length > 0) {
          temp = Number(parts.pop()) + a.seconds;
          a.seconds = temp % 60;
          if (parts.length > 0) {
            temp = Number(parts.pop()) + a.minutes + (temp - a.seconds) / 60;
            a.minutes = temp % 60;
            a.hours = a.hours + (temp - a.minutes) / 60;
            if (parts.length > 0) {
              a.hours += Number(parts.pop());
            }
          }
        }

        return a;
      },
      {
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    );

    // returned string will be HH(H+):mm:ss
    return [
      totals.hours + " giờ",
      totals.minutes + " phút",
      // zeroPad(totals.seconds),
    ].join(" ");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div className="flex px-4 py-3">
          <div className="min-w-[300px]">
            <img
              src={getFile(data.image)}
              className={`h-[300px] w-[300px] rounded-md`}
              alt=""
            />
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
              <ButtonIcon
                className={`mt-5 px-8 py-1.5 ${styles.album.button.backgroundColor} ${styles.album.textColor} rounded-full flex items-center`}
              >
                <FaPlay className={`${styles.album.textColor} mr-1`} />
                Tiếp tục nghe
              </ButtonIcon>
              <div className="mt-5">
                <ButtonIcon
                  className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.album.textColor}  rounded-full h-10 w-10`}
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
          <div className={`${styles.album.textColor} ml-5 text-sm`}>
            <span className={`${styles.album.subTextColor}`}>Lời tựa:</span>{" "}
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
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <div
                      className={`flex items-center py-3 hover:bg-[hsla(0,0%,100%,0.1)]  rounded  border-b-[1px] border-[${styles.dropdown.borderColor}]`}
                    >
                      <p
                        className={`${styles.album.subTextColor} flex items-center font-bold mr-5 pl-2`}
                      >
                        {index + 1}
                      </p>
                      <div className="flex">
                        <img
                          src={getFile(song.image)}
                          className="h-[40px] w-[40px] rounded"
                          alt=""
                        />
                        <div className="ml-2">
                          <p
                            className={`${styles.album.textColor} font-bold text-sm`}
                          >
                            {song.name}
                          </p>
                          <p className={`${styles.album.subTextColor} text-xs`}>
                            {data.authors.name}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`ml-auto pr-2 text-xs ${styles.album.subTextColor}`}
                      >
                        {timeData[index]}
                      </p>
                    </div>
                  </div>
                ))}
                <p className={`${styles.album.subTextColor} text-xs mt-2`}>
                  {data?.songs?.length} bài hát •
                  {" " + totalTimeString(timeData)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Album;
