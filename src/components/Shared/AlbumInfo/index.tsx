import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import useTheme from '../../../hooks/useTheme';
import ButtonIcon from '../../../shared/small_components/Button';
import Button from '../Button';
import Item from '../Item';

const AlbumInfo = ({ className }: any) => {
  const data = {
    id: 1,
    avatar:
      'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/3/f/f/0/3ff09c937cebb4baf930abe7eb02074c.jpg',
    name: 'Đất Việt',
  };

  const { styles }: any = useTheme();
  return (
    <>
      <div className={`flex xl:flex-col ${className} `}>
        <div className="mr-5 xl:mr-0">
          <Item
            item={data}
            className={`xl:h-[300px] xl:w-[300px] h-[200px] w-[200px] rounded-xl`}
            small
          />
        </div>

        <div
          className={`flex flex-col justify-between w-max xl:w-full xl:mt-3`}
        >
          <div className={`xl:text-center`}>
            <h2
              className={`${styles.body.textColor} font-bold text-xl leading-normal`}
            >
              V-Pop: Hits Quốc dân
            </h2>
            <div
              className={`${styles.body.subTextColor} text-xs leading-relaxed `}
            >
              <h5>Cập nhật: 31/12/2022</h5>
              <a>ERIK, MONO, Hoàng Thuỳ Linh</a>
              <h5>177k người yêu thích</h5>
            </div>
            <div className={`mt-4 text-sm xl:hidden`}>
              <span className={`${styles.body.subTextColor}  `}>Lời tựa </span>
              <span className={`${styles.body.textColor} `}>
                Những bản V-Pop 'thuộc nằm lòng' của mọi nhà
              </span>
            </div>
          </div>
          <div className={`flex xl:mt-3.5 xl:flex-col xl:mx-auto `}>
            <Button
              text="TIẾP TỤC PHÁT"
              className="bg-[#c662ef] text-sm font-normal mr-2"
              leftIcon={<BsPlayFill />}
            />
            <div className={`xl:mt-3.5 xl:mx-auto`}>
              <ButtonIcon
                className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.body.textColor}  h-10 w-10`}
              >
                <AiOutlineHeart />
              </ButtonIcon>

              <ButtonIcon
                className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} ${styles.body.textColor} h-10 w-10`}
              >
                <FiMoreHorizontal />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumInfo;
