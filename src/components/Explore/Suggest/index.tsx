import React from "react";
import useTheme from "../../../hooks/useTheme";
import Item from "../../Shared/Item";
import { data } from "./data";

const Suggest = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Có Thể Bạn Muốn Nghe
        </h2>
      </div>
      <div className="flex justify-between mt-3">
        {data.map((item, index) => (
          <>
            <Item index={index} item={item} className={`h-52 w-52`} />
          </>
        ))}
      </div>
    </>
  );
};

export default Suggest;
