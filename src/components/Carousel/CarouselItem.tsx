import React from 'react';

const CarouselItem = ({image, containerClassName = '', imageClassName = ''}: any) => {
    return (
        <div className={`px-4 ${containerClassName}`}>
          <img
            className={`rounded ${imageClassName}`}
            src={image}
            alt="..."
          />
        </div>
    );
}

export default CarouselItem;