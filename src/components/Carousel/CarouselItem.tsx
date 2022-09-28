import React from "react";

<<<<<<< HEAD
const CarouselItem = ({
  image,
  containerClassName = "",
  imageClassName = "",
  index,
}: any) => {
  return (
    <div className={`pr-4 ${containerClassName}`}>
      <img className={`rounded ${imageClassName}`} src={image} alt="..." />
    </div>
  );
};
=======
const CarouselItem = ({image, containerClassName = '', imageClassName = ''}: any) => {
    return (
        <div className={`pr-4 ${containerClassName}`}>
          <img
            className={`rounded ${imageClassName}`}
            src={image}
            alt="..."
          />
        </div>
    );
}
>>>>>>> b0858a1ed583fbe292db5fe19b89a3de255a731f

export default CarouselItem;
