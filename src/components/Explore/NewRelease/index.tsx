import React, { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useAudio from "../../../hooks/useAudio";
import useTheme from "../../../hooks/useTheme";
import SongService from "../../../service/song";
import Button from "../../../shared/small_components/Button/Basic";
import { Link } from "react-router-dom";
import Song from "../../Shared/Song";

const NewRelease = () => {
  const { styles }: any = useTheme();

  const [data, setData] = useState([]);
  const classButton = `text-xs  py-1 px-6 border border-[${styles.button.border}] border-gray-500  rounded-full`;
  const activeButtonClass = [
    `${styles.button.backgroundColor} !text-white hover:opacity-80`,
  ];

  const fetchData = async () => {
    try {
      const response: any = await SongService.getNewRelease();
      if (response?.data?.data) {
        setData(response?.data?.data);
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
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Mới Phát Hành
        </h2>
      </div>
      <div className="flex my-6 justify-between">
        <div>
          <span className="mr-4">
            <Button
              text="TẤT CẢ"
              isActive={true}
              className={classButton}
              activeClass={activeButtonClass}
            />
          </span>
          {/* <span className="mr-4">
            <Button
              text="VIỆT NAM"
              className={classButton}
              activeClass={activeButtonClass}
            />
          </span>
          <span>
            <Button
              text="QUỐC TẾ"
              className={classButton}
              activeClass={activeButtonClass}
            />
          </span> */}
        </div>
        <Link
          to={"/moi-phat-hanh"}
          className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-sm uppercase flex items-center justify-center`}
        >
          Tất cả
          <RiArrowRightSLine />
        </Link>
      </div>
      <div className="flex justify-between mt-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 w-full">
          {data?.map((item, index) => (
            <Song
              song={item}
              index={index}
              timeData={0}
              listSongs={null}
              className={"flex"}
              isShowIndex={false}
              isShowTime={false}
              isHiddenBorder={true}
              isNewReleaseItem={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewRelease;
