import React from 'react';
import useTheme from '../../hooks/useTheme';
import Info from './Info';
import ListSong from './ListSong';

const Album = () => {
  const { styles }: any = useTheme();
  return (
    <div className="xl:flex p-3 w-full">
      <Info />
      <div className="mt-4 flex-1">
        <div className="text-sm hidden xl:block mb-2.5">
          <span className={`${styles.body.subTextColor}  `}>Lời tựa </span>
          <span className={`${styles.body.textColor} `}>
            Những bản V-Pop 'thuộc nằm lòng' của mọi nhà
          </span>
        </div>
        <ListSong />
      </div>
    </div>
  );
};

export default Album;
