import React from "react";
import Carousel from "./Carousel";
import DailyTopic from "./DailyTopic";
import Recently from "./Recently";
import Suggest from "./Suggest";

import NewRelease from "./NewRelease";
import RiceChart from "./RiceChart";

const Explore = () => {
  return (
    <>
      <Carousel />
      <div className="px-4">
        <Recently />
        <Suggest />
        <NewRelease />
        <DailyTopic />
        <RiceChart />
      </div>
    </>
  );
};

export default Explore;
