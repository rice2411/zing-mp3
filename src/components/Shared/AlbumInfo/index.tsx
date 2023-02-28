import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import useTheme from '../../../hooks/useTheme';
import ButtonIcon from '../../../shared/small_components/Button';
import Button from '../Button';
import Item from '../Item';

const AlbumInfo = ({ className, info }: any) => {
  const { styles }: any = useTheme();
  return (
    <>
      <div className={`flex xl:flex-col ${className} `}>
        <div className="mr-5 xl:mr-0">
          <Item
            item={info}
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
              {info.category}: {info.name}
            </h2>
            <div
              className={`${styles.body.subTextColor} text-xs leading-relaxed `}
            >
              <h5>Cập nhật: {info.date}</h5>
              {info.author.map((name: any, index: any) => (
                <>
                  <a className="cursor-pointer hover:decoration-1 hover:underline">
                    {name}
                    {info.author.length - 1 === index ? '' : ', '}
                  </a>
                </>
              ))}
              <h5>{info.like} người yêu thích</h5>
            </div>
            <div className={`mt-4 text-sm xl:hidden`}>
              <span className={`${styles.body.subTextColor}  `}>Lời tựa </span>
              <span className={`${styles.body.textColor} `}>{info.note}</span>
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
