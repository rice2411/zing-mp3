import React from "react";
import Carousel from "./Carousel";
import Recently from "./Recently";
import Suggest from "./Suggest";

const Explore = () => {
  return (
    <>
      <Carousel />
      <div className="px-4">
        <Recently />
        <Suggest />
      </div>
    </>
  );
};

export default Explore;
