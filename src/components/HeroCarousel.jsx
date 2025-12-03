import React from "react";
import Slider from "react-slick";

const heroImages = [
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/Augst/10 year/10Year80OFF 2160x1066.jpg",
  "https://zandokh.com/image/catalog/banner/2024/1st-purchase-banner.jpg",
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/Augst/10 year/10Year80OFF 2160x1066.jpg",
];
const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {heroImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
