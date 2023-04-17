import React, { useEffect, useState } from "react";

import { BsPlayFill } from "react-icons/bs";
import AlbumFace from "../../Shared/AlbumFace";
import SearchService from "../../../service/search";
import { useLocation } from "react-router-dom";
import Spinner from "../../../shared/small_components/Loading/Spinner";

const Albums = () => {
  const location = useLocation();
  const { key } = location.state;

  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const param = { search: key, tab: "albums" };

    try {
      const response: any = await SearchService.searchFull(param);
      const rawData = response?.data?.data?.albums;
      if (rawData) {
        setData(rawData);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [key]);

  return (
    <>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="mt-5">
          <h1 className="mb-5 font-bold text-xl text-white">Playlist/Albums</h1>

          <div className={`flex items-center flex-wrap  gap-y-5 gap-x-10`}>
            {data.map((item: any, idx: any) => (
              <div key={idx}>
                <AlbumFace
                  key={idx}
                  index={idx}
                  item={item}
                  isShowDesc={false}
                  className={`h-52 w-52 `}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Albums;
