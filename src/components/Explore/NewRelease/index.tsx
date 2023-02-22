import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import useTheme from '../../../hooks/useTheme';
import NewReleaseItem from './items';

const NewRelease = () => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className="flex justify-between mt-10">
        <h2 className={`${styles.body.textColor} text-xl font-bold`}>
          Mới Phát Hành
        </h2>
        <a
          href="#"
          className={`${styles.body.subTextColor} ${styles.body.hover.textColor} text-sm uppercase flex items-center justify-center`}
        >
          Tất cả
          <RiArrowRightSLine />
        </a>
      </div>
      <div className="flex justify-between mt-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4">
          <NewReleaseItem
            title="Khong yeu tra dep toi ve jagfuigzkvbzjkdgk"
            singger="huyR"
            time="Hom Qua"
            image="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/5/4/1/d541890d76d309d35a9ee683501bc5d0.jpg"
          />
          <NewReleaseItem
            title="diu mia may"
            singger="huyR"
            time="Hom Qua"
            image="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/5/4/1/d541890d76d309d35a9ee683501bc5d0.jpg"
          />
          <NewReleaseItem
            title="Vo tu"
            singger="huyR"
            time="Hom Qua"
            image="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/5/4/1/d541890d76d309d35a9ee683501bc5d0.jpg"
          />
          <NewReleaseItem
            title="diu mia may"
            singger="huyR"
            time="Hom Qua"
            image="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/5/4/1/d541890d76d309d35a9ee683501bc5d0.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default NewRelease;
