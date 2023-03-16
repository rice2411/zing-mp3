import React from "react";
import Carousel from "./Carousel";
import DailyTopic from "./DailyTopic";
import Recently from "./Recently";
import Suggest from "./Suggest";

import NewRelease from "./NewRelease";
import RiceChart from "./RiceChart";
import Singer from "./Singer";
import Top100 from "./Top100";
import MixTape from "./MixTaxpe";
import Suggest2 from "./Suggest2";
import Partner from "./Partner/index,";

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
        <Singer />
        <Top100 />
        <MixTape />
        <Suggest2 />
        <Partner />
      </div>
    </>
  );
};

export default Explore;
