import React, { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

import Item from "../../Shared/Item";
import PlaylistService from "../../../service/playlist";

const Recently = () => {
  const { styles }: any = useTheme();
  const [recentPlaylist, setRecentPlaylist] = useState([]);

  const fetchRecentPlayList = async () => {
    const params = {
      userId: "62ba690129c1260f0cb734bc",
    };
    try {
      const response: any = await PlaylistService.recentPlaylist(params);
      if (response?.data?.data) {
        setRecentPlaylist(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRecentPlayList();
  }, []);
  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Gần đây
        </h2>
        <a
          href="#"
          className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-sm uppercase flex items-center justify-center`}
        >
          Tất cả
          <RiArrowRightSLine />
        </a>
      </div>
      <div className="flex justify-between mt-3">
        {data.map((item, index) => (
          <>
            <Item index={index} item={item} className={` h-36 w-36 `} />
          </>
        ))}
      </div>
    </>
  );
};

export default Recently;
