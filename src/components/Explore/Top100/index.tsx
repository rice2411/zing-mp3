import React from "react";
import useTheme from "../../../hooks/useTheme";
import Item from "../../Shared/Item";
import { data } from "./data";

const Top100 = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Top 100
        </h2>
      </div>
      <div className="flex justify-between mt-3">
        {data.map((i, idx) => (
          <Item key={idx} index={idx} item={i} className={`h-52 w-52`} />
        ))}
      </div>
    </>
  );
};

export default Top100;
