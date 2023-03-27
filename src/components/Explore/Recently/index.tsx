import React, { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

import Skeleton from "../../../shared/small_components/Loading/Skeleton";
import useAuth from "../../../hooks/useAuth";
import AlbumFace from "../../Shared/AlbumFace";
import AlbumService from "../../../service/album";

const Recently = () => {
  const numberOfItem = 7;
  const { styles }: any = useTheme();
  const { isAuthenticated }: any = useAuth();
  const [recentAlbum, setRecentAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecentAlbum = async () => {
    setIsLoading(true);

    try {
      const response: any = await AlbumService.recentAlbum();
      if (response?.data?.data) {
        setRecentAlbum(response.data.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (isAuthenticated) fetchRecentAlbum();
  }, [isAuthenticated]);
  return (
    <>
      {isAuthenticated ? (
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
                {[...Array(numberOfItem)].map((e, idx) => (
                  <div key={idx}>
                    <Skeleton className="h-36 w-36" />
                    <Skeleton className="h-5 w-36 mt-2" />
                  </div>
                ))}
              </>
            ) : (
              <>
                {recentAlbum.map((item, index) => (
                  <AlbumFace
                    key={index}
                    index={index}
                    item={item}
                    className={` h-36 w-36 `}
                    isShowDesc={false}
                  />
                ))}
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Recently;
