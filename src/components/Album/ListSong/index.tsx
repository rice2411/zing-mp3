import React from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import useTheme from '../../../hooks/useTheme';
import AlbumItem from '../../Shared/AlbumItem';
import { listSong } from './data';

const ListSong = () => {
  const { styles }: any = useTheme();
  return (
    <>
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
        {listSong.map((item, index) => (
          <>
            <AlbumItem item={item} className="" />
          </>
        ))}
      </div>
    </>
  );
};

export default ListSong;
