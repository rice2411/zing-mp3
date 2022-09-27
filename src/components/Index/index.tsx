import React from "react";
// import { Carousel } from "flowbite-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Test = ({ props = null }: any) => {
  const customArrow = (onclickHandler: any, hasPrev: any, label: any, isPrev = true) => {
    return (
      hasPrev && (
        <button onClick={onclickHandler} onKeyDown={onclickHandler} title={label} className={`absolute top-1/2 ${isPrev ? 'left' : 'right'}-[25px] transform -translate-y-1/2 z-50 bg-[#ffffff26] w-[55px] h-[55px] flex items-center justify-center rounded-full opacity-0 hover:brightness-90 group-hover:opacity-100`}>
          {isPrev ? <BsChevronLeft className="text-white text-3xl ml-[-3px]" /> : <BsChevronRight className="text-white text-3xl mr-[-3px]" />}
        </button>
      )
    );
  }
  const customPrevArrow = (onclickHandler: any, hasPrev: any, label: any) => {
    return (
      customArrow(onclickHandler, hasPrev, label)
    );
  }
  const customNextArrow = (onclickHandler: any, hasPrev: any, label: any) => {
    return (
      customArrow(onclickHandler, hasPrev, label, false)
    );
  }
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel 
        centerMode
        dynamicHeight = {false}
        autoPlay
        infiniteLoop
        centerSlidePercentage={100/3}
        renderArrowPrev = {customPrevArrow}
        renderArrowNext = {customNextArrow}
        showStatus={false}
        showIndicators = {false}
        showThumbs = {false}
        className={"group"}
      >
        <div key="slide1" className="p-4">
          <img
            className="h-[200px]"
            src="https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSesaEdit.png"
            alt="..."
          />
        </div>
        <div key="slide2" className="p-4">
          <img
            className="h-[200px]"
            src="https://gamepress.gg/arknights/sites/arknights/files/styles/banner_image/public/2021-05/ThornsSkin.jpg?h=5d493d15&itok=a66Zv9tj"
            alt="..."
          />
        </div>
        <div key="slide3" className="p-4">
          <img
            className="h-[200px]"
            src="https://gamepress.gg/arknights/sites/arknights/files/inline-images/RosaSkin.jpg"
            alt="..."
          />
        </div>
        <div key="slide4" className="p-4">
          <img
            className="h-[200px]"
            src="https://gamepress.gg/arknights/sites/arknights/files/styles/banner_image/public/2020-03/ArtZimaSkinMartheFeature.png?h=d01ac4dc&itok=CDJ4MCZl"
            alt="..."
          />
        </div>
        <div key="slide5" className="p-4">
          <img
            className="h-[200px]"
            src="https://gamepress.gg/arknights/sites/arknights/files/2020-12/SariaJailSkin.jpg"
            alt="..."
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Test;
