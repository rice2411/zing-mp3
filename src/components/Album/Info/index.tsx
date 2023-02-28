import React, { useEffect } from 'react';
import AlbumInfo from '../../Shared/AlbumInfo';
import { data } from './data';

const Info = () => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="w-[300px] mr-8 xl:relative mt-4 mb-8">
      <div className="flex w-[300px] xl:fixed ">
        <AlbumInfo info={data} />
      </div>
    </div>
  );
};

export default Info;
