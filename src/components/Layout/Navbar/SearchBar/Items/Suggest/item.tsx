import React from "react";
import { FiTrendingUp, FiClock, FiSearch } from "react-icons/fi";
import useTheme from "../../../../../../hooks/useTheme";
import { Link, useNavigate } from "react-router-dom";

const SuggestItem = ({
  item,
  isSearching,
  isSearched,
  searchWord,
  setIsFocusSearch,
  setContentSearch,
}: any) => {
  const { styles }: any = useTheme();
  const navigate = useNavigate();
  const splitSuggestName = () => {
    const nameCheck = item?.name;
    const searchWordCheck = searchWord;
    const startPos = nameCheck
      .toUpperCase()
      .indexOf(searchWordCheck.toUpperCase());
    const endPos = startPos + searchWord.length;
    const beforeSearchWord = item?.name.slice(0, startPos);

    const afterSearchWord = item?.name.slice(endPos);

    return (
      <>
        {beforeSearchWord}
        <b>{searchWord}</b>
        {afterSearchWord}
      </>
    );
  };
  const handleClick = (key: string) => {
    setIsFocusSearch(false);
    navigate("/tim-kiem/tat-ca", { state: { key } });
    setContentSearch(key);
  };

  return (
    <li>
      <a
        href="javascript:void(0)"
        onClick={() => {
          handleClick(item.name);
        }}
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
          {!isSearching ? item?.name : splitSuggestName()}
        </span>
      </a>
    </li>
  );
};

export default SuggestItem;
