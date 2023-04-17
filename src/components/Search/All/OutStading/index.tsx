import React from "react";

import { BsPlayFill } from "react-icons/bs";
import OutStadingItem from "./item";

const OutStanding = ({ data, outStadingRef }: any) => {
  return (
    <>
      <div className="mt-5" ref={outStadingRef}>
        <h1 className="mb-5 font-bold text-xl text-white">Nổi bật</h1>
        {data ? (
          <div
            className={`flex items-center ${
              data.length >= 3 ? "justify-between" : "gap-x-8"
            }`}
          >
            {data.map((item: any, idx: any) => (
              <div key={idx}>
                <OutStadingItem item={item} />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default OutStanding;
