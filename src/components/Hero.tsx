import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Hero() {
  return (
    <div className="h-screen w-full">
      <Slider {...settings}>
        <div>
          <Image
            src="/images/slide-1.jpg"
            alt="slide-1"
            height={1000}
            width={1000}
          />
        </div>
        <div>
          <Image
            src="/images/slide-2.jpg"
            alt="slide-1"
            height={1000}
            width={1000}
          />
        </div>
        <div>
          <Image
            src="/images/slide-3.jpg"
            alt="slide-1"
            height={1000}
            width={1000}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
