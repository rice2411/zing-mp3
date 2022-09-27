import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Carousel as Slider } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from './CarouselItem';

const Carousel = ({ props = null }: any) => {
    const carouselList = [
        { image: 'https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSesaEdit.png' },
        { image: 'https://gamepress.gg/arknights/sites/arknights/files/styles/banner_image/public/2021-05/ThornsSkin.jpg?h=5d493d15&itok=a66Zv9tj' },
        { image: 'https://gamepress.gg/arknights/sites/arknights/files/inline-images/RosaSkin.jpg' },
        { image: 'https://gamepress.gg/arknights/sites/arknights/files/styles/banner_image/public/2020-03/ArtZimaSkinMartheFeature.png?h=d01ac4dc&itok=CDJ4MCZl' },
        { image: 'https://gamepress.gg/arknights/sites/arknights/files/2020-12/SariaJailSkin.jpg' }
    ];

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
            <Slider 
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
                {carouselList.map((item, index) => {
                    return <CarouselItem 
                            key={index}
                            imageClassName="h-56"
                            image={item.image} 
                        />
                })}
            </Slider>
        </div>
    );
}

export default Carousel;