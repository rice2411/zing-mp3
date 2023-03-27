import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import AlbumService from "../../../service/album";
import Item from "../../Shared/AlbumFace";
import { data } from "./data";

const Suggest2 = () => {
  const { styles }: any = useTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response1: any = await AlbumService.suggestType({
        type: "rock",
      });
      const response2: any = await AlbumService.suggestType({ type: "rap" });
      if (response1?.data?.data && response2?.data?.data) {
        const reuslt = [
          {
            id: 1,
            image:
              "https://photo-zmp3.zmdcdn.me/cover/a/a/d/7/aad7cb86bbd8e0fa459c8fe974988577.jpg",
            type: "Rock",
            children: [...response1?.data?.data],
          },
          {
            id: 1,
            image:
              "https://photo-zmp3.zmdcdn.me/cover/7/f/b/6/7fb65013fe546d50974508700db99b22.jpg",
            type: "Rap Việt",
            children: [...response2?.data?.data],
          },
        ];
        setData(reuslt);
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
            <div className="flex ">
              <img
                className="h-[50px] w-[50px] rounded mr-2"
                src={item.image}
                alt=" "
              />
              <div>
                <p className="uppercase text-gray-500">Bạn đã nghe nhiều</p>
                <span
                  className={`font-bold text-xl ${styles.body.textColor} ${styles.body.hover.textColor} `}
                >
                  {item.type}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            {item.children.map((song: any, idx: any) => (
              <Item
                key={idx}
                index={idx}
                item={song}
                isShowDesc={false}
                className={`h-52 w-52`}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Suggest2;
