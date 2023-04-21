import React, { useState, useEffect } from "react";
import AlbumFace from "../../Shared/AlbumFace";
import LibraryService from "../../../service/library";
import Spinner from "../../../shared/small_components/Loading/Spinner";

const Album = () => {
  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await LibraryService.get();
      const dataRaw = response?.data?.data.likedAlbums;

      if (dataRaw) {
        setData(dataRaw);
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
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="mt-5 flex items-center flex-wrap  gap-y-5 gap-x-12">
          {data?.map((album: any, index: any) => (
            <>
              {album.type == "album" && (
                <AlbumFace
                  key={index}
                  index={index}
                  item={album}
                  isShowDesc={false}
                  className={`h-52 w-52`}
                />
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
