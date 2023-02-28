import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiSortAlt2 } from 'react-icons/bi';
import { BsMusicNoteBeamed, BsPlayFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GiMicrophone } from 'react-icons/gi';
import useTheme from '../../../hooks/useTheme';
import ButtonIcon from '../../../shared/small_components/Button';

const AlbumItem = ({ active, item }: any) => {
  const { styles }: any = useTheme();

  const timeFormat = (time: number) => {
    return new Date(time * 1000).toISOString().slice(14, 19);
  };
  return (
    <>
      <div
        className={`group grid grid-cols-12 p-2.5 border-y border-[#273143] rounded hover:bg-[#273143] ${
          active && 'bg-[#333c4d]'
        }`}
      >
        <div className="col-span-6 flex">
          <div className={`${styles.body.subTextColor} text-sm relative flex`}>
            <div className=" my-auto mr-3 rounded w-[14px] h-[14px] ">
              <BsMusicNoteBeamed
                className={`${active ? 'hidden' : 'block'} group-hover:hidden`}
              />
              <input
                type="checkbox"
                className={`my-auto mr-3 rounded bg-transparent checked:bg-transparent focus:shadow-none focus:text-white ${
                  active ? 'block' : 'hidden'
                } group-hover:block cursor-pointer`}
              />
            </div>
          </div>
          <div className="w-[40px] h-[40px] overflow-hidden rounded relative cursor-pointer">
            <img src={item.avatar} alt="" />
            <div className="text-xl text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden group-hover:block hover:opacity-80">
              <BsPlayFill />
            </div>
          </div>

          <div className="overflow-hidden mr-4 ml-3">
            <h3
              className={`${styles.body.textColor} text-sm font-medium truncate`}
            >
              {item.name}
            </h3>
            {item.author.map((name: any, index: any) => (
              <>
                <a
                  className={`${styles.body.subTextColor} text-xs mt-1 font-normal truncate cursor-pointer hover:decoration-1 hover:underline`}
                >
                  {name}
                  {item.author.length - 1 === index ? '' : ', '}
                </a>
              </>
            ))}
          </div>
        </div>
        <div
          className={` group-hover:col-span-2 2xl:group-hover:col-span-3 my-auto overflow-hidden truncate col-span-4 ${styles.body.subTextColor}`}
        >
          <a
            className={`${styles.body.subTextColor} text-xs font-normal  cursor-pointer hover:decoration-1 hover:underline hover:text-[#c662ef]`}
          >
            {item.albumName}
          </a>
        </div>
        <div
          className={` group-hover:col-span-4 2xl:group-hover:col-span-3 my-auto col-span-2`}
        >
          <h4
            className={`${styles.body.subTextColor} text-xs font-normal truncate text-right mr-2 group-hover:hidden`}
          >
            {timeFormat(item.duration)}
          </h4>
          <div className={`hidden group-hover:block text-right`}>
            <ButtonIcon
              className={`hover:bg-[hsla(0,0%,100%,0.1)] ${styles.body.textColor}  h-10 w-10`}
            >
              <GiMicrophone />
            </ButtonIcon>
            <ButtonIcon
              className={`hover:bg-[hsla(0,0%,100%,0.1)] ${styles.body.textColor}  h-10 w-10`}
            >
              <AiOutlineHeart />
            </ButtonIcon>

            <ButtonIcon
              className={`hover:bg-[hsla(0,0%,100%,0.1)] ${styles.body.textColor} h-10 w-10`}
            >
              <FiMoreHorizontal />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
