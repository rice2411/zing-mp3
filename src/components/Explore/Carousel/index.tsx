import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CarouselItem from "./CarouselItem";
import "./carousel.scss";

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
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/9/a/7/7/9a77cd6e75e6d9a65a7b299b4568500c.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/9/a/7/7/9a77cd6e75e6d9a65a7b299b4568500c.jpg",
    },
    {
      image:
        "https://photo-zmp3.zmdcdn.me/banner/9/a/7/7/9a77cd6e75e6d9a65a7b299b4568500c.jpg",
    },
  ];

  const [posArray, setPosArray] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [animationId, setAnimationId] = useState(null);
  const [pause, setPause] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);
  const slide = (next = true) => {
    setActiveItem((pre) => {
      return next
        ? (pre + carouselList.length - 1) % carouselList.length
        : (pre + 1) % carouselList.length;
    });
  };

  const initPosArray = () => {
    let defaultPosArray = ["previous", "selected", "next", "last", "first"];
    const listLength = carouselList.length;
    const posLength = defaultPosArray.length;
    if (listLength > posLength) {
      for (let i = 0; i < listLength - posLength; i++) {
        defaultPosArray.push("add");
      }
    } else {
      defaultPosArray.length = listLength;
      setButtonHidden(true);
    }

    setPosArray(defaultPosArray);
  };

  useEffect(() => initPosArray(), []);

  useEffect(() => {
    if (!pause) {
      const id = setInterval(slide, 5000);
      setAnimationId(id);
      return () => clearInterval(id);
    } else {
      clearInterval(animationId);
    }
  }, [pause]);

  return (
    <div>
      <div
        className={`wrapper h-[230px]`}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {!buttonHidden && (
          <button
            className="slider-btn slider-pre-btn"
            onClick={() => slide(false)}
          >
            <BsChevronLeft className="slider-btn-icon" />
          </button>
        )}
        {carouselList.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              image={item.image}
              pos={posArray[(index + activeItem) % carouselList.length]}
              index={index}
            />
          );
        })}
        {!buttonHidden && (
          <button
            className="slider-btn slider-next-btn"
            onClick={() => slide(true)}
          >
            <BsChevronRight className="slider-btn-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
