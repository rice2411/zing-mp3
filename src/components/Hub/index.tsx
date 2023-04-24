import React, { useEffect, useState } from "react";
import HubService from "../../service/hub";
import Spinner from "../../shared/small_components/Loading/Spinner";
import HubItem from "./item";
import CountryService from "../../service/country";
import Suggest2 from "../Explore/Suggest2";

export const Hub = () => {
  const [data, setData]: any = useState([]);
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: any = await HubService.getAll();
      const countryResponse: any = await CountryService.get4Options();
      const dataRaw = response?.data?.data;
      const dataRawCountry = countryResponse?.data?.data;
      if (dataRawCountry) {
        setCountry(dataRawCountry);
      }
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
        <Spinner />
      ) : (
        <>
          <img
            src="https://photo-zmp3.zmdcdn.me/cover/5/8/4/1/584198118e8729bb2f5f2743b33622b3.jpg"
            alt=""
            className="min-w-[1178px] min-h-[342px] rounded"
          />
          <div className="mt-5">
            <h1 className="font-bold text-white text-xl">Nổi Bật</h1>

            <div className="flex flex-wrap gap-9 mt-5">
              {data
                ?.filter((item: any) => item.type == "outstanding")
                .map((item: any, idx: any) => (
                  <div key={idx}>
                    <HubItem item={item} index={idx} />
                  </div>
                ))}
            </div>
          </div>{" "}
          <div className="mt-5">
            <h1 className="font-bold text-white text-xl">Quốc Gia</h1>

            <div className="flex flex-wrap gap-9 mt-5">
              {country.map((item: any, idx: any) => (
                <div key={idx}>
                  <HubItem item={item} index={idx} isCountry={true} />
                </div>
              ))}
            </div>
          </div>{" "}
          <div className="my-5">
            <h1 className="font-bold text-white text-xl">
              Tâm Trạng Và Hoạt Động
            </h1>

            <div className="flex flex-wrap gap-9 mt-5">
              {data
                ?.filter((item: any) => item.type == "mood & activity")
                .map((item: any, idx: any) => (
                  <div key={idx}>
                    <HubItem item={item} index={idx} isTopic={true} />
                  </div>
                ))}
            </div>
          </div>{" "}
          <Suggest2 />
        </>
      )}
    </>
  );
};
