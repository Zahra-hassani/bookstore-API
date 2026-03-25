"use client";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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
    <div className="h-screen overflow-y-hidden max-h-120 w-full">
      <div className="h-full">
        <Slider {...settings}>
          <div>
            <Image
              className="object-cover w-full"
              src="/images/slide-1.jpg"
              alt="slide-1"
              height={1000}
              width={1000}
            />
          </div>
          <div>
            <Image
              className="object-cover w-full"
              src="/images/slide-2.jpg"
              alt="slide-1"
              height={1000}
              width={1000}
            />
          </div>
          <div>
            <Image
              className=" object-cover w-full"
              src="/images/slide-3.jpg"
              alt="slide-1"
              height={1000}
              width={1000}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
