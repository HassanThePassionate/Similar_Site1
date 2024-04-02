"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./slider.module.css";
import { Pagination } from "swiper/modules";
// import required modules

import Image from "next/image";
import Btns from "./s_btns/Btns";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://d4.alternativeto.net/QlVYaGWcvPuLL4GJJfkDWTSvMtejkCxUr_Py4Js_VDM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTA1MDczX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/hD1nQo-oNpKlEQi71ifP_3VV4glWoNCLIUEY9umZHMA/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfOTU3NDQyX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/Wslitx3P4lQqOEC8L356rmHCJPd7yvlfZDImgcWds44/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfOTE1NzQxX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/gINo3hVGiu5zAhqDAuqL7tHYkIgQAEzlibnEEJDBexM/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNTM2ODMzX2Z1bGwucG5n.jpg",
    },
    {
      url: "https://d4.alternativeto.net/gInFIbZbbvy7y5sCssdbSlAtg8sLws4fH4tsN-fcvDQ/rs:fill:427:240:1/g:ce:0:0/YWJzOi8vZGlzdC9zL2ZpcmVmb3hfNjA2NDA3X2Z1bGwuanBn.jpg",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePaginationClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div className="mt-[50px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Pagination]}
        navigation={{
          nextEl: "#nexts",
          prevEl: "#prevs",
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          swiperRef.current = swiper;
          swiper.on("slideChange", () => {
            setActiveIndex(swiper.realIndex);
          });
        }}
        className="mySwiper max-w-[300px] "
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img.url}
              alt="img"
              width={300}
              height={300}
              className={style.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Btns
        handlePaginationClick={handlePaginationClick}
        Slides={slides}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default ImageSlider;
