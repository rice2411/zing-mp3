import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import useTheme from '../../../../hooks/useTheme';

const NewReleaseItem = ({ title, singger, time, image }: any) => {
  const { styles }: any = useTheme();
  return (
    <div className="group items-center w-full hover:bg-[hsla(0,0%,100%,0.1)] rounded-md overflow-hidden">
      <div className="p-4 flex items-center grid grid-cols-4 place-content-center">
        <div className="overflow-hidden rounded-md relative hover:cursor-pointer">
          <img src={image} className="w-full h-full" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex  items-center justify-between px-5 hidden group-hover:block hover:opacity-75">
            <BsPlayFill className="text-4xl " />
          </div>
        </div>
        <div className="leading-6 col-span-3 ml-4 group-hover:col-span-2">
          <div className="">
            <h2
              className={`${styles.body.textColor} text-xl truncate cursor-default`}
            >
              {title}
            </h2>
          </div>
          <h3
            className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-base mt-1 truncate cursor-pointer hover:decoration-1 hover:underline `}
          >
            {singger}
          </h3>
          <h3
            className={`${styles.body.subTextColor} text-base mt-1 truncate cursor-default`}
          >
            {time}
          </h3>
        </div>
        <div className="item-center flex justify-end mr-2">
          <div className="col-span-1 w-[45px] h-[45px] transition cursor-pointer rounded-full overflow-hidden relative hidden group-hover:block text-white hover:bg-[hsla(0,0%,100%,0.1)] ">
            <FiMoreHorizontal className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleaseItem;
