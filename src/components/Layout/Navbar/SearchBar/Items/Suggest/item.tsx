import React from "react";
import { FiTrendingUp, FiClock, FiSearch } from "react-icons/fi";
import useTheme from "../../../../../../hooks/useTheme";

const SuggestItem = ({ name, isSearching, isSearched, searchWord }: any) => {
  const { styles }: any = useTheme();
  const splitSuggestName = () => {
    const startPos = name.indexOf(searchWord);
    const endPos = startPos + searchWord.length;
    const beforeSearchWord = name.slice(0, startPos);
    const afterSearchWord = name.slice(endPos);
    return (
      <>
        {beforeSearchWord}
        <b>{searchWord}</b>
        {afterSearchWord}
      </>
    );
  };

  return (
    <li>
      <a
        href="#"
        className={`px-2.5 py-2 w-full rounded flex items-center ${styles.navbar.search.suggest.item.hover.textColor} ${styles.navbar.search.suggest.item.hover.backgroundColor}`}
      >
        <span
          className={` ${styles.navbar.search.suggest.item.icon.textColor}`}
        >
          {!isSearching ? (
            <FiTrendingUp />
          ) : isSearched ? (
            <FiClock />
          ) : (
            <FiSearch />
          )}
        </span>
        <span className="ml-2.5 line-clamp-1">
          {!isSearching ? name : splitSuggestName()}
        </span>
      </a>
    </li>
  );
};

export default SuggestItem;
