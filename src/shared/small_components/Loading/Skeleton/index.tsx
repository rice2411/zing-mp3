import React from "react";

const Skeleton = ({ className }: any) => {
  return (
    <>
      <div className=" shadow rounded  ">
        <div className="animate-pulse">
          <div className={`${className} bg-slate-700  rounded`}></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
