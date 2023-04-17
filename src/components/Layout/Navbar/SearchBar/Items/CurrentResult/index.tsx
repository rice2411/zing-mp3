import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import useTheme from "../../../../../../hooks/useTheme";
import CurrentSearchItem from "./item";
import SearchService from "../../../../../../service/search";

const CurrentSearchList = ({ isSearching, searchWord, data }: any) => {
  const { styles }: any = useTheme();

  const currentSearchList = [
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/b/d/e/5/bde5296dc6b374538e0cc738e6985b93.jpg",
      name: "Chưa Quên Người Yêu Cũ (Live Version)",
      subtitle: "Hà Nhi",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/c/9/5/d/c95d510864924eb7eff43c9b4cb19202.jpg",
      name: "Chưa Bao Giờ Em Quên",
      subtitle: "Hương Ly",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/5/f/a/2/5fa229dc30ca9b5e680f1755afdab812.jpg",
      name: "Chưa Quên Người Yêu Cũ",
      subtitle: "Hà Nhi",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/avatars/1/0/106bb5c60365f977a9ca683f91e2383a_1465869753.jpg",
      name: "Chưa Bao Giờ",
      subtitle: "Trung Quân Idol",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/covers/0/3/032b2cc936860b03048302d991c3498f_1498793157.jpg",
      name: "Chưa Bao Giờ Mẹ Kể (Ngày Thứ 8 Của Mẹ)",
      subtitle: "MIN, ERIK, Phạm Hoài Nam",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/8/3/2/9/83290b51e005848d153600a8eb75f32d.jpg",
      name: "Chưa Từng Thương Ai Đến Vậy",
      subtitle: "Khang Việt",
      href: "#",
    },
  ];
  return (
    <>
      {data.length > 0 && data && (
        <div className="mt-2.5 pt-2.5 border-t border-[#ffffff1a]">
          <div className="px-2.5 pb-2 flex justify-between items-center">
            <span className="font-bold">
              {!isSearching ? "Tìm kiếm gần đây" : "Gợi ý kết quả"}
            </span>
            {!isSearching && (
              <span
                className={`text-[10px] hover:brightness-90 cursor-pointer ${styles.navbar.search.currentResult.deleteColor}`}
              >
                XÓA
              </span>
            )}
          </div>
          <ul>
            {data?.map((item: any, idx: number) => (
              <CurrentSearchItem key={idx} item={item} />
            ))}{" "}
          </ul>
        </div>
      )}
    </>
  );
};

export default CurrentSearchList;
