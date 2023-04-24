import React, { useEffect, useState } from "react";
import { getFile } from "../../constant/file";
import HubService from "../../service/hub";
import AlbumFace from "../Shared/AlbumFace";

const Top100 = () => {
  const [data, setData]: any = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await HubService.get("6443ed4908af548a47883f42");
      const dataRaw = response?.data?.data;

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
    <div>
      <img src={getFile("top100.png")} alt="" />{" "}
      <div className=" mx-10 my-5">
        <h1 className="text-white font-bold text-2xl ">Nổi Bật</h1>
        <div className="flex justify-between mt-5">
          {data?.albums?.map((item: any, index: any) => (
            <div key={index}>
              <AlbumFace
                key={index}
                index={index}
                item={item}
                className={`h-52 w-52`}
                isShowDesc={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top100;
