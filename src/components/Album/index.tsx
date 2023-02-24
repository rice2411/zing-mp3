import React from 'react';
import useTheme from '../../hooks/useTheme';
import AlbumInfo from '../Shared/AlbumInfo';

const Album = () => {
  const { styles }: any = useTheme();
  return (
    <div className="xl:flex p-3">
      <div className="w-[300px] h-[1000px] mr-8 xl:relative">
        <div className="flex w-[300px] xl:fixed top-[120px]">
          <AlbumInfo />
        </div>
      </div>
      <div className="w-[600px] bg-blue-400 h-[1000px]">
        <p>abc</p>
      </div>
    </div>
  );
};

export default Album;
