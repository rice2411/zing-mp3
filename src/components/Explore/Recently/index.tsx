import React, { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

import Item from "../../Shared/Item";
import PlaylistService from "../../../service/playlist";
import Skeleton from "../../../shared/small_components/Loading/Skeleton";

const Recently = () => {
  const numberOfItem = 7;
  const { styles }: any = useTheme();
  const [recentPlaylist, setRecentPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecentPlayList = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
        {isLoading ? (
          <>
            {[...Array(numberOfItem)].map((e, i) => (
              <div key={i}>
                <Skeleton className="h-36 w-36" />
                <Skeleton className="h-5 w-36 mt-2" />
              </div>
            ))}
          </>
        ) : (
          <>
            {recentPlaylist.map((item, index) => (
              <>
                <Item
                  key={index}
                  index={index}
                  item={item}
                  className={` h-36 w-36 `}
                />
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Recently;
