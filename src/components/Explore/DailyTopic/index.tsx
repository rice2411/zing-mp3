import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import PlaylistService from "../../../service/album";
import Item from "../../Shared/AlbumFace";

const DailyTopic = () => {
  const { styles }: any = useTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response: any = await PlaylistService.dailyTopic();
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
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between mt-10">
            <h2 className={`${styles.body.textColor} text-xl font-bold`}>
              {item.topic}
            </h2>
          </div>
          <div className="flex justify-between mt-3">
            {item.data.map((i: any, idx: number) => (
              <Item key={idx} index={idx} item={i} className={`h-52 w-52`} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DailyTopic;
