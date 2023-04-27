import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import AlbumService from "../../../service/album";
import Item from "../../Shared/AlbumFace";
import Skeleton from "../../../shared/small_components/Loading/Skeleton";

const Suggest = () => {
  const { styles }: any = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: any = await AlbumService.suggestAlbum();
      if (response?.data?.data) {
        setData(response?.data?.data);
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
        <div className="flex justify-between mt-3">
          {[...Array(5)].map((e, idx) => (
            <div key={idx}>
              <Skeleton className="h-52 w-52" />
              <Skeleton className="h-5 w-52 mt-2" />
              <Skeleton className="h-5 w-36 mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-between mt-10">
            <h2 className={`${styles.body.textColor} text-xl font-bold`}>
              Có Thể Bạn Muốn Nghe
            </h2>
          </div>
          <div className="flex justify-between mt-3">
            {data.map((item, index) => (
              <Item
                key={index}
                index={index}
                item={item}
                isShowDesc={true}
                className={`h-52 w-52`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Suggest;
