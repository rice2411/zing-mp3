import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import useTheme from "../../../../hooks/useTheme";
import { FaPlay, FaSlideshare } from "react-icons/fa";
import Scrollbar from "../../../../shared/small_components/Scrollbar";
import SuggestList from "./Items/Suggest";
import CurrentSearchList from "./Items/CurrentResult";
import SearchService from "../../../../service/search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { styles }: any = useTheme();
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [contentSearch, setContentSearch] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const params = {
    search: contentSearch || "",
  };

  const fetchSearchData = async (params: any) => {
    const param = {
      search: params.search || "",
    };

    try {
      const response: any = await SearchService.searchSuggest(param);
      if (response?.data?.data) {
        setData(response?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const handleChangeSearch = (e: any) => {
    if (e.target.value) setIsSearching(() => true);
    else setIsSearching(() => false);
    setContentSearch(e.target.value);
    handleDebounceSearch(e.target.value);
  };
  // eslint-disable-next-line
  const handleDebounceSearch = useCallback(
    debounce((searchValue: any) => {
      fetchSearchData({
        search: searchValue,
      });
    }, 400),
    []
  );

  const handleFocus = (e: any) => {
    const element = e.target.classList;
    element.remove(styles.navbar.item.backgroundColor);
    element.add(styles.navbar.search.suggest.backgroundColor);
    element.add("focus:rounded-br-none");
    element.add("focus:rounded-bl-none");
    // searchRef.current.classList.remove("hidden");
    setIsFocusSearch(() => true);
  };
  const handlBlur = (e: any) => {
    const element = e.target.classList;
    element.add(styles.navbar.item.backgroundColor);
    element.remove(styles.navbar.search.suggest.backgroundColor);
    element.remove("focus:rounded-br-none");
    element.remove("focus:rounded-bl-none");
    // searchRef.current.classList.add("hidden");
    if (!e.relatedTarget) setIsFocusSearch(() => false);
  };
  const handlePressEnter = (e: any) => {
    if (e.key === "Enter") {
      handlBlur(e);
      navigate("/tim-kiem/tat-ca", {
        state: { key: contentSearch },
      });
    }
  };
  useEffect(() => {
    setContentSearch("");
    // eslint-disable-next-line
  }, []);

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
          onChange={handleChangeSearch}
          onKeyDown={handlePressEnter}
          className={` ${styles.navbar.item.backgroundColor} focus:ring-0 block  pl-10  w-full text-sm border-none  rounded-2xl border focus:border-transparent `}
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát.."
          value={contentSearch}
        />
      </div>
      {isFocusSearch && (
        <div
          className={` ${styles.navbar.search.suggest.backgroundColor} z-[99999] absolute top-full left-0 right-0  rounded-br-2xl rounded-bl-2xl px-2.5 py-3.5 text-sm `}
        >
          <Scrollbar
            isHover={false}
            className="min-h-0 h-[auto] max-h-[500px] "
          >
            <SuggestList
              isSearching={isSearching}
              searchWord={contentSearch}
              setIsFocusSearch={setIsFocusSearch}
              setContentSearch={setContentSearch}
              data={data}
            />
            <CurrentSearchList
              data={data}
              isSearching={isSearching}
              searchWord={contentSearch}
            />
          </Scrollbar>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
