import React from "react";
import Carousel from "./Carousel";
import DailyTopic from "./DailyTopic";
import Recently from "./Recently";
import Suggest from "./Suggest";

import NewRelease from "./NewRelease";

const Explore = () => {
  return (
    <>
      <Carousel />
      <div className="px-4">
        <Recently />
        <Suggest />
        <DailyTopic />
        <NewRelease />
      </div>
    </>
  );
};

export default Explore;
