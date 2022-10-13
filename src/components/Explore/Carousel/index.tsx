import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as Slider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";

const Carousel = ({ props = null }: any) => {
  const carouselList = [
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/e/5/0/a/e50abe68bfda123f36e8f361461e624d.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/a/0/6/a/a06af87a17f2a8e3644c64147b476a84.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/c/9/8/3/c9834d48040074ea08078f8f972393ea.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/d/4/c/8/d4c8c7498e6b7d05c351262e65431893.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/9/a/7/7/9a77cd6e75e6d9a65a7b299b4568500c.jpg",
    },
  ];

  const customArrow = (
    onclickHandler: any,
    hasPrev: any,
    label: any,
    isPrev = true
  ) => {
    return (
      hasPrev && (
        <button
          onClick={onclickHandler}
          onKeyDown={onclickHandler}
          title={label}
          className={`absolute top-1/2 ${
            isPrev ? "left-[25px]" : "right-[25px]"
          } transform -translate-y-1/2 z-50 bg-[#ffffff26] w-[55px] h-[55px] flex items-center justify-center rounded-full opacity-0 hover:brightness-90 group-hover:opacity-100`}
        >
          {isPrev ? (
            <BsChevronLeft className="text-white text-3xl ml-[-3px]" />
          ) : (
            <BsChevronRight className="text-white text-3xl mr-[-3px]" />
          )}
        </button>
      )
    );
  };

  const customPrevArrow = (onclickHandler: any, hasPrev: any, label: any) => {
    return customArrow(onclickHandler, hasPrev, label);
  };

  const customNextArrow = (onclickHandler: any, hasPrev: any, label: any) => {
    return customArrow(onclickHandler, hasPrev, label, false);
  };

  return (
    <div className="h-64">
      <Slider
        centerMode
        dynamicHeight={false}
        autoPlay
        infiniteLoop
        centerSlidePercentage={100 / 3}
        renderArrowPrev={customPrevArrow}
        renderArrowNext={customNextArrow}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className={"group"}
      >
        {carouselList.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              imageClassName="h-50"
              image={item.image}
              index={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
