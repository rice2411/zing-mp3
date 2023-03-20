import React from "react";
import useTheme from "../../../hooks/useTheme";
import Item from "../../Shared/Item";
import { data } from "./data";

const Suggest2 = () => {
  const { styles }: any = useTheme();
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
            {item.children.map((song, idx) => (
              <Item
                key={idx}
                index={idx}
                item={song}
                isShowDesc={true}
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
