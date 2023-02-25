import React from "react";
import useTheme from "../../../hooks/useTheme";
import Item from "../../Shared/Item";
import { data } from "./data";

const DailyTopic = () => {
  const { styles }: any = useTheme();
  return (
    <>
      {data.map((item, index) => (
        <>
          <div className="flex justify-between mt-10">
            <h2 className={`${styles.body.textColor} text-xl font-bold`}>
              {item.topic}
            </h2>
          </div>
          <div className="flex justify-between mt-3">
            {item.data.map((i, idx) => (
              <Item index={idx} item={i} className={`h-52 w-52`} />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default DailyTopic;
