import React from "react";
import { FaPlay } from "react-icons/fa";
import useTheme from "../../../../../../hooks/useTheme";
import { getFile } from "../../../../../../constant/file";

const CurrentSearchItem = ({ item }: any) => {
  const { styles }: any = useTheme();

  const renderContent = () => {
    return (
      <>
        <div className="relative w-[52px] h-[52px] shrink-0 mr-2.5 cursor-pointer">
          <img
            className={`w-full h-full ${
              item?.avatar ? "rounded-full" : "rounded"
            } ${item?.audio && "group-hover:opacity-50"}`}
            src={
              item?.type
                ? item.avatar || item.image
                : getFile(item?.image || item?.avatar)
            }
            alt=""
          />
          {item?.audio && (
            <FaPlay
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-white `}
            />
          )}
        </div>
        <div className="flex flex-col">
          {item?.audio ? (
            <a
              href="#"
              className={`font-semibold text-sm line-clamp-1  cursor-pointer ${styles.navbar.search.currentResult.item.hover.textColor}`}
            >
              {item?.name}
            </a>
          ) : (
            <span className="font-semibold text-sm line-clamp-1">
              {item?.name}
            </span>
          )}
          <span
            className={`text-xs line-clamp-1 ${styles.navbar.search.currentResult.item.textColor}`}
          >
            {item?.type
              ? "Thể Loại"
              : item?.publicationYear
              ? `Album • ${item?.authors[0]?.name ?? "Nhiều ca sĩ"}`
              : ""}
            {!item?.type && item?.avatar ? `Nghệ sĩ • ${item?.name}` : ""}

            {item?.audio && `${item?.artist?.name}`}
          </span>
        </div>
      </>
    );
  };
  return (
    <li
      className={`px-2.5 py-2 flex items-center  rounded group ${styles.navbar.search.currentResult.item.hover.backgroundColor}`}
    >
      {!item?.audio ? (
        <a className="flex items-center w-full" href="#">
          {renderContent()}
        </a>
      ) : (
        renderContent()
      )}
    </li>
  );
};

export default CurrentSearchItem;
