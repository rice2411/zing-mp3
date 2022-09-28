import React, { useRef, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import { FaPlay, FaSlideshare } from "react-icons/fa";
import Scrollbar from "../../../../shared/small_components/Scrollbar";
import SuggestList from "./Items/Suggest";
import CurrentSearchList from "./Items/CurrentResult";

const SearchBar = () => {
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchWord, setSearchWord] = useState(null);
  const searchRef = useRef(null);
  const { styles }: any = useTheme();
  const handleFocus = () => {
    // searchRef.current.classList.remove("hidden");
    setIsFocusSearch(() => true);
  };
  const handlBlur = (e: any) => {
    // searchRef.current.classList.add("hidden");
    if (!e.relatedTarget) setIsFocusSearch(() => false);
  };
  const handleChange = (e: any) => {
    if (e.target.value) setIsSearching(() => true);
    else setIsSearching(() => false);
    // setSearchWord(() => e.target.value);
    setSearchWord(() => "chưa");
  };
  return (
    <div className="min-w-[500px] w-[500px] relative">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 pl-3  items-center pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          onFocus={handleFocus}
          onBlur={handlBlur}
          onChange={handleChange}
          className={` ${styles.navbar.item.backgroundColor} block  pl-10  w-full text-sm border-none  rounded-2xl border focus:border-transparent focus:ring-0 focus:rounded-br-none focus:rounded-bl-none`}
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát.."
        />
      </div>
      {isFocusSearch && (
        <div
          className={` ${styles.navbar.search.suggest.backgroundColor} absolute top-full left-0 right-0  rounded-br-2xl rounded-bl-2xl px-2.5 py-3.5 text-sm z-[100]`}
        >
          <Scrollbar isHover={false} className="min-h-0 h-[auto] max-h-[500px]">
            <SuggestList isSearching={isSearching} searchWord={searchWord} />
            <CurrentSearchList
              isSearching={isSearching}
              searchWord={searchWord}
            />
          </Scrollbar>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
