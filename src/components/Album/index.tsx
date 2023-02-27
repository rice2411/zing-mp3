import React from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import useTheme from '../../hooks/useTheme';
import AlbumInfo from '../Shared/AlbumInfo';
import AlbumItem from '../Shared/AlbumItem';

const Album = () => {
  const { styles }: any = useTheme();
  return (
    <div className="xl:flex p-3 w-full">
      <div className="w-[300px] mr-8 xl:relative mt-4 mb-8">
        <div className="flex w-[300px] xl:fixed ">
          <AlbumInfo />
        </div>
      </div>
      <div className="mt-4 flex-1">
        <div className="text-sm hidden xl:block mb-2.5">
          <span className={`${styles.body.subTextColor}  `}>Lời tựa </span>
          <span className={`${styles.body.textColor} `}>
            Những bản V-Pop 'thuộc nằm lòng' của mọi nhà
          </span>
        </div>
        <div
          className={`${styles.body.subTextColor} grid grid-cols-12 w-full p-2.5 text-sm`}
        >
          <div className="col-span-6 flex">
            <div className="text-xs border border-[#86828C] my-auto mr-3 rounded w-[14px] h-[14px]">
              <BiSortAlt2 />
            </div>
            <p>Bài hát</p>
          </div>
          <div className="col-span-4">
            <p>Album</p>
          </div>
          <div className="text-right col-span-2">
            <p>Thời gian</p>
          </div>
        </div>
        <div>
          <AlbumItem active />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
          <AlbumItem />
        </div>
      </div>
    </div>
  );
};

export default Album;
