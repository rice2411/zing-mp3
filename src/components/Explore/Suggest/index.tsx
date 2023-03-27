import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import AlbumService from "../../../service/album";
import Item from "../../Shared/AlbumFace";

const Suggest = () => {
  const { styles }: any = useTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response: any = await AlbumService.suggestAlbum();
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
  );
};

export default Suggest;
