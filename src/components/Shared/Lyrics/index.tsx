import React, { useEffect, useState } from "react";
import "./styles.css";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import ButtonIcon from "../../../shared/small_components/Button/Icon";
import { IoIosArrowDown } from "react-icons/io";
import Audio from "../../Layout/Audio";
import Scrollbar from "../../../shared/small_components/Scrollbar";
import SongService from "../../../service/song";

const Lyrics = () => {
  const { styles }: any = useTheme();
  const {
    isShowLyrics,
    setIsShowLyrics,
    trackProgress,
    isPlaying,
    songId,
    timeRunning,
  }: any = useAudio();

  const [tab, SetTab] = useState("lyrics");

  const [data, setData] = useState([]);
  const [timeIn, setTimeIn] = useState([]);
  const [timeOut, setTimeOut] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!songId) return;
    setIsLoading(true);

    try {
      const response: any = await SongService.getLyrics(songId);

      const dataRaw = response?.data?.data;

      if (dataRaw) {
        setData(dataRaw.lyrics.data);
        setTimeIn(dataRaw.lyrics.timeIn);
        setTimeOut(dataRaw.lyrics.timeOut);
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

  const customAnimation = (from: number = 0) => {
    const animations = document.getElementById("animationStyle");
    const animation = `@keyframes run-text {
    from { width: ${from}% }
    to { width: 100% }
    }`;
    animations.innerHTML = animation;
  };
  const runningLyrics = (
    timeStart: number,
    timeEnd: number,
    percentage: number,
    isPlay: boolean
  ) => {
    const time = timeEnd - timeStart + 1;
    const styles = document.getElementById("lyricStyle");

    const lyricRunningClass = `.lyric::after {color: yellow;
    ${
      isPlay
        ? `animation: run-text ${time}s 1 linear;`
        : `width: ${percentage}%`
    }}
      `;

    styles.innerHTML += lyricRunningClass;
  };
  const resetLyrics = () => {
    const styles = document.getElementById("lyricStyle");
    styles.innerHTML = "";
  };

  const handleRunningLyrics = () => {
    const lyrics: any = document.getElementById("lyrics")?.childNodes;

    // const timeIn = [
    //   0, 8, 17, 20, 22, 25, 26, 28, 29, 32, 33, 35, 36, 39, 41, 43, 44, 48, 49,
    //   51, 53, 55, 57, 59, 62, 64, 67, 68, 70, 71, 74, 75, 77, 80, 95, 96, 98,
    //   99, 102, 104, 105, 106, 109, 111, 112, 114, 117, 118, 120, 125, 126, 129,
    //   131, 133, 134, 137, 140, 142, 144, 145, 147, 149, 151, 153, 157, 199, 201,
    //   203, 205, 207, 209, 211, 214, 216, 218, 220, 222, 223, 226, 227,
    // ];
    // const timeOut = [
    //   8, 17, 20, 22, 25, 26, 28, 29, 32, 33, 35, 36, 39, 41, 43, 44, 47, 49, 51,
    //   53, 55, 57, 59, 62, 64, 67, 68, 70, 71, 74, 75, 77, 80, 94, 96, 98, 99,
    //   102, 104, 105, 106, 109, 111, 112, 114, 117, 118, 120, 125, 126, 129, 131,
    //   133, 134, 137, 140, 142, 144, 145, 147, 149, 151, 153, 157, 199, 201, 203,
    //   205, 207, 209, 211, 214, 216, 218, 220, 222, 223, 226, 227, 230,
    // ];

    if (lyrics) {
      for (let i = 0; i < lyrics.length; i++) {
        const sentences = lyrics[i];
        if (timeRunning < timeIn[i]) {
          sentences?.classList?.remove?.("lyric");
          sentences.classList.remove("text-[hsla(0,0%,100%,.5)]");
        }

        if (timeRunning > timeOut[i] - 1) {
          if (timeRunning < timeOut[lyrics.length - 1]) {
            sentences.classList.remove("lyric");
            sentences.classList.add("text-[hsla(0,0%,100%,.5)]");
            resetLyrics();
          }
        }
        if (timeRunning >= timeIn[i] && timeRunning < timeOut[i]) {
          sentences.scrollIntoView({ behavior: "smooth" });
          const percentage =
            ((timeRunning - timeIn[i]) / (timeOut[i] - timeIn[i] + 1)) * 100;

          if (!isPlaying) {
            resetLyrics();
            runningLyrics(timeIn[i], timeOut[i], percentage, false);
          } else {
            if (tab == "karaoke") {
              if (percentage > 0) {
                customAnimation(percentage);
              } else {
                customAnimation();
              }
            }
            runningLyrics(timeIn[i], timeOut[i], percentage, true);
            sentences.classList.add("lyric");
          }
        }
      }
    }
  };
  useEffect(() => {
    handleRunningLyrics();
  }, [timeRunning, isPlaying]);

  return (
    <>
      <style id="animationStyle" type="text/css"></style>
      <style id="lyricStyle" type="text/css"></style>
      <div
        className={`hid-box w-screen h-screen overflow-hidden  ${
          isShowLyrics ? "top-0 z-[999] min-h-screen" : "z-[1] h-0 "
        }`}
      >
        {isShowLyrics && (
          <div className="my-3 flex flex-col  items-center h-full ">
            <div className="flex  text-white justify-between h-[40px] w-full mt-5">
              <div className="min-w-[50px]"></div>
              <ul className="overflow-hidden text-sm font-bold text-center flex items-center rounded-full min-w-[556px] bg-[hsla(0,0%,100%,.1)]">
                {/* <li className="w-full pl-1">
                  <a
                    href="#"
                    className="inline-block w-full p-4  "
                    aria-current="page"
                  >
                    Danh sách phát
                  </a>
                </li> */}
                <li
                  className="w-full  pl-1 cursor-pointer"
                  onClick={() => SetTab("karaoke")}
                >
                  <div
                    className={`inline-block w-full py-1   ${
                      tab == "karaoke"
                        ? "bg-[hsla(0,0%,100%,.5)]  rounded-full"
                        : ""
                    }`}
                    aria-current="page"
                  >
                    Karaoke
                  </div>
                </li>{" "}
                <li
                  className="w-full pr-1 cursor-pointer"
                  onClick={() => SetTab("lyrics")}
                >
                  <div
                    className={`inline-block w-full py-1 ${
                      tab == "lyrics"
                        ? "bg-[hsla(0,0%,100%,.5)]  rounded-full"
                        : ""
                    }`}
                    aria-current="page"
                  >
                    Lời bài hát
                  </div>
                </li>
              </ul>
              <ButtonIcon
                onClick={() => {
                  setIsShowLyrics(false);
                }}
                className={`bg-[hsla(0,0%,100%,.1)] hover:opacity-80 rounded-full h-10 w-10`}
              >
                <IoIosArrowDown />
              </ButtonIcon>{" "}
            </div>
            <div className="my-5">
              <div className={`flex  `}>
                {tab == "lyrics" && (
                  <img
                    className="w-[500px] h-[500px]"
                    src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_webp/covers/f/b/fb8bc137a183bd5cb15d24fa6f54d1c1_1419914386.jpg"
                    alt=""
                  />
                )}
                <Scrollbar className="min-w-[800px] max-w-[800px] max-h-[500px] pl-10">
                  <div
                    id="lyrics"
                    className={`${
                      tab == "karaoke"
                        ? " flex-col items-center justify-center"
                        : ""
                    }`}
                  >
                    <p
                      data-text="Bài Hát: Cơn Mưa Tháng 5"
                      className="word text-5xl h-max text-white py-5 text"
                    >
                      Bài Hát: Cơn Mưa Tháng 5
                    </p>
                    <p
                      data-text="  Ca Sĩ: Bức Tường"
                      className="word text-5xl h-max text-white py-5"
                    >
                      Ca Sĩ: Bức Tường
                    </p>
                    {data?.map((item: any) => (
                      <p
                        data-text={item}
                        className="word text-5xl h-max text-white py-5"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </Scrollbar>
              </div>
            </div>
            {/* <div className="bottom-0  fixed">
              <Audio />
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Lyrics;
