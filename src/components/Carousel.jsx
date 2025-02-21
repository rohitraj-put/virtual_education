import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderImages = [
    "https://gyanias.in/wp-content/uploads/2024/12/Artboard-%E2%80%93-178-2048x520.png",
    "https://gyanias.in/wp-content/uploads/2022/01/tnpsc-online-coaching-classes-1891x480-1.jpg",
    "https://gyanias.in/wp-content/uploads/2024/12/Artboard-%E2%80%93-176-2048x520.png",
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {sliderImages.map((src, index) => (
          <div key={index}>
            <img
              className=""
              src={src}
              alt={`slide-${index}`}
              style={{ width: "100%", height: "60vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
