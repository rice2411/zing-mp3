import React from "react";
import { FaPlay } from "react-icons/fa";
import useTheme from "../../../../../../hooks/useTheme";
import CurrentSearchItem from "./item";

const CurrentSearchList = ({ isSearching, searchWord }: any) => {
  const { styles }: any = useTheme();
  const latestSearchList = [
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/8/8/5/0885c3d5fa3ad0b1322f40257aa6fe75.jpg",
      name: "Một ngàn nỗi đau Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda numquam quasi vitae nihil minus vero recusandae, sapiente excepturi mollitia beatae tenetur sequi, laboriosam soluta debitis quas similique consectetur accusantium expedita.",
      subtitle: "Văn Mai Hương, Hứa Kim Tuyền",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/8/9/7/38971d899d0cc07423626e26dcae595c.jpg",
      name: "Đông Miên / 冬眠",
      href: "#",
    },
    {
      type: "album",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/8/0/c/f80c8800ed8141a5e0be62d729048223.jpg",
      name: "Album Vol 1: DẰM TRONG TIM",
      subtitle: "Bạch Công Khanh",
      href: "#",
    },
    {
      type: "song",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/f/7/2/df72a19eb4db31f6ceb33db1208ba583.jpg",
      name: "Lemon",
      subtitle: "Kenshi Yonezu",
      href: "#",
    },
    {
      type: "author",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/6/6/2/066226e19d50a7e928fdba0bb2a68377.jpg",
      name: "Fujii Kaze",
      subtitle: "93 quan tâm",
      href: "#",
    },
  ];

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

  const render = () => {
    const list = !isSearching ? latestSearchList : currentSearchList;
    return (
      list.length > 0 && (
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
          {renderSearchList()}
        </div>
      )
    );
  };

  const renderSearchList = () => {
    const list = !isSearching ? latestSearchList : currentSearchList;
    return (
      <ul>
        {list.map((latestSearchItem, index) => {
          return (
            <CurrentSearchItem key={index} searchResult={latestSearchItem} />
          );
        })}
      </ul>
    );
  };

  return render();
};

export default CurrentSearchList;
