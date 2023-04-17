import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import ArtistFace from "../../Shared/ArtistFace";
import { useLocation } from "react-router-dom";
import SearchService from "../../../service/search";
import Spinner from "../../../shared/small_components/Loading/Spinner";

const Artist = () => {
  const location = useLocation();
  const { key } = location.state;

  const [data, setData]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const param = { search: key, tab: "artists" };

    try {
      const response: any = await SearchService.searchFull(param);
      const rawData = response?.data?.data?.artists;
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
          <h1 className="mb-5 font-bold text-xl text-white">Nghệ Sĩ/OA</h1>{" "}
          {data?.map((item: any, idx: any) => (
            <div key={idx}>
              <ArtistFace
                key={0}
                index={0}
                item={item}
                isShowDesc={true}
                className={`h-52 w-52`}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Artist;
