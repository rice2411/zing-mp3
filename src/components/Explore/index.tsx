import React from 'react';
import Carousel from './Carousel';
import NewRelease from './NewRelease';
import Recently from './Recently';
import Suggest from './Suggest';

const Explore = () => {
  return (
    <>
      <Carousel />
      <div className="px-4">
        <Recently />
        <Suggest />
        <NewRelease />
      </div>
    </>
  );
};

export default Explore;
