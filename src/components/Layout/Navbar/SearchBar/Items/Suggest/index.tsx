import React from "react";
import SuggestItem from "./item";

const SuggestList = ({
  isSearching,
  searchWord,
  data,
  setIsFocusSearch,
  setContentSearch,
}: any) => {
  const suggestList = [
    { name: "Bức Tường", _id: "62ba690129c1260f0cb734c2" },
    { name: "Cơn Mưa Tháng 5", _id: "62ba690129c1260f0cb734c2" },
    { name: "Vì Đời", _id: "62ba690129c1260f0cb734c2" },
    { name: "The Cassette", _id: "62ba690129c1260f0cb734c2" },
    { name: "XONE Radio", _id: "62ba690129c1260f0cb734c2" },
  ];

  const renderSearchList = () => {
    if (!isSearching) {
      return (
        <ul>
          {suggestList.map((suggestItem, index) => {
            return (
              <SuggestItem
                key={index}
                item={suggestItem}
                isSearching={isSearching}
                searchWord={searchWord}
                setIsFocusSearch={setIsFocusSearch}
                setContentSearch={setContentSearch}
              />
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul>
          {data?.map((searchItem: any, index: any) => {
            return (
              <SuggestItem
                key={index}
                item={searchItem}
                isSearching={isSearching}
                isSearched={true}
                searchWord={searchWord}
                setIsFocusSearch={setIsFocusSearch}
                setContentSearch={setContentSearch}
              />
            );
          })}
          <SuggestItem
            item={{ name: `Tìm kiếm "${searchWord}"`, _id: "" }}
            isSearching={isSearching}
            searchWord={searchWord}
            setIsFocusSearch={setIsFocusSearch}
            setContentSearch={setContentSearch}
          />
        </ul>
      );
    }
  };

  return (
    <>
      <div className="px-2.5 pb-2 font-bold">
        {!isSearching ? "Đề xuất cho bạn" : "Từ khóa liên quan"}
      </div>
      {renderSearchList()}
    </>
  );
};

export default SuggestList;
