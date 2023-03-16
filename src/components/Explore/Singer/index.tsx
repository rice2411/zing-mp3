import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.scss";
const Singer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay: true,
  };
  const data = [
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png",
  ];
  const imageRef = useRef([]);

  return (
    <div className="w-[1200px] mt-5">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className=" w-full h-full px-5 cursor-pointer hover:opacity-75"
          >
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Singer;
