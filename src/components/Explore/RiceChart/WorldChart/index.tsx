import React, { useRef } from "react";

const WorldChart = () => {
  const imageRef = useRef([]);
  const adNodeImage = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      imageRef.current[idx] = node;
    }
  };
  const handleMouseEnter = (index: number) => {
    imageRef.current[index].classList.add("scale-110");
  };
  const handleMouseLeave = (index: number) => {
    imageRef.current[index].classList.remove("scale-110");
  };

  const data = [
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg",
  ];
  return (
    <>
      <div className="flex justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="rounded max-w-[374px] max-h-[107px] cursor-pointer overflow-hidden"
          >
            <img
              ref={(node) => adNodeImage(index, node)}
              src={item}
              className=" duration-700  "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorldChart;
