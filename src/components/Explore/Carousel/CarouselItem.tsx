import React from "react";
import "./carousel.scss";

const CarouselItem = ({
  image,
  pos = "",
  imageClassName = "",
}: any) => {
  return (
    <div className={`slider-item w-1/3 ${pos}`}>
      <img className={`slider-image ${imageClassName}`} src={image} alt="..." />
    </div>
  );
};

export default CarouselItem;
