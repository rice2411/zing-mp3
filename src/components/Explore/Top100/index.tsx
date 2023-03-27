import React, { useState, useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import PlaylistService from "../../../service/album";
import Item from "../../Shared/AlbumFace";

const Top100 = () => {
  const { styles }: any = useTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response: any = await PlaylistService.top100();

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
          Top 100
        </h2>
      </div>
      <div className="flex justify-between mt-3">
        {data.map((item, idx) => (
          <Item key={idx} index={idx} item={item} className={`h-52 w-52`} />
        ))}
      </div>
    </>
  );
};

export default Top100;
