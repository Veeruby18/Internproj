"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function HeroSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",

    //   var settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // slidesToShow: 3,
    // arrows: true, // boolean
    // slidesToScroll: 1,
    // pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // // dotsClass: "slick-dots custom-dots",
    // lazyLoad: "ondemand",
    // cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };
  return (
    
    <Slider {...settings} className="mx-auto my-[10px] w-[100%] xl:max-w-[1300px]">
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
      <div>
        <Image src="/bg1.jpg" alt="Image1" width={1000} height={200} className="h-80 rounded-[20px]"/>
      </div>
    </Slider>
  );
}