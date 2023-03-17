import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useTheme from "../../../hooks/useTheme";
import Button from "../../../shared/small_components/Button/Basic";
import NewReleaseItem from "../../Shared/NewReleaseItem";
import { data } from "./data";

const NewRelease = () => {
  const { styles }: any = useTheme();
  const classButton = `text-xs  py-1 px-6 border border-[${styles.button.border}] border-gray-500  rounded-full`;
  const activeButtonClass = [
    `${styles.button.backgroundColor} !text-white hover:opacity-80`,
  ];
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
            <Button
              text="TẤT CẢ"
              isActive={true}
              className={classButton}
              activeClass={activeButtonClass}
            />
          </span>
          <span className="mr-4">
            <Button
              text="VIỆT NAM"
              className={classButton}
              activeClass={activeButtonClass}
            />
          </span>
          <span>
            <Button
              text="QUỐC TẾ"
              className={classButton}
              activeClass={activeButtonClass}
            />
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
