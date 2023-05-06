import React, { useEffect, useState } from "react";
import AlbumFace from "../../../Shared/AlbumFace";
import Spinner from "../../../../shared/small_components/Loading/Spinner";
import LibraryService from "../../../../service/library";

const All = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await LibraryService.get();
      const dataRaw = response?.data?.data?.likedAlbums?.filter?.(
        (item: any) => item.type == "playlist" || item.type == "custom"
      );
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
        <>
          <Spinner />
        </>
      ) : (
        <div className="mt-5">
          <div className={`flex items-center flex-wrap  gap-y-5 gap-x-10`}>
            {data?.map((item: any, idx: any) => (
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

export default All;
