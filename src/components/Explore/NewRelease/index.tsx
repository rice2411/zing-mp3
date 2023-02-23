import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import useTheme from '../../../hooks/useTheme';
import Button from '../../Shared/Button';
import NewReleaseItem from '../../Shared/NewReleaseItem';
import { data } from './data';

const NewRelease = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Mới Phát Hành
        </h2>
      </div>
      <div className="flex my-6 justify-between">
        <div>
          <span className="mr-4">
            <Button text="TẤT CẢ" active />
          </span>
          <span className="mr-4">
            <Button text="VIỆT NAM" />
          </span>
          <span>
            <Button text="QUỐC TẾ" />
          </span>
        </div>
        <a
          href="#"
          className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-sm uppercase flex items-center justify-center`}
        >
          Tất cả
          <RiArrowRightSLine />
        </a>
      </div>
      <div className="flex justify-between mt-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 w-full">
          {data.map((item, index) => (
            <>
              <NewReleaseItem index={index} item={item} className="" />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewRelease;
