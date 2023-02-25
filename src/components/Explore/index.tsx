import React from "react";
import Carousel from "./Carousel";
import DailyTopic from "./DailyTopic";
import Recently from "./Recently";
import Suggest from "./Suggest";

const Explore = () => {
  return (
    <>
      <Carousel />
      <div className="px-4">
        <Recently />
        <Suggest />
        <DailyTopic />
      </div>
    </>
  );
};

export default Explore;
