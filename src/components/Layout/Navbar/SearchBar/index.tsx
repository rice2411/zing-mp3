import React, { useRef } from "react";
import useTheme from "../../../../hooks/useTheme";

const SearchBar = () => {
  const suggestRef = useRef(null);
  const { styles }: any = useTheme();
  const handleFocus = () => {
    suggestRef.current.classList.remove("hidden");
  };
  const handlBlur = () => {
    suggestRef.current.classList.add("hidden");
  };
  return (
    <div className="min-w-[500px] w-[500px] flex flex-col ">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 pl-3  items-center pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
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
          className={` ${styles.navbar.item.backgroundColor} block  pl-10  w-full text-sm text-gray-900  rounded-2xl border focus:border-transparent focus:ring-0 focus:rounded-br-none focus:rounded-bl-none`}
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát.."
        />
      </div>
      <div
        className="max-h-[600px] min-h-60 h-60 bg-white min-w-[500px] hidden rounded-br-2xl rounded-bl-2xl"
        ref={suggestRef}
      ></div>
    </div>
  );
};

export default SearchBar;
