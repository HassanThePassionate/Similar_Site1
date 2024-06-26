"use client";
import React, { useState } from "react";
import style from "./cards.module.scss";
import Card from "./card/Card";
import Buttons from "./button/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Arrowbtn from "../arrowBtn/Arrowbtn";
const Cards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className={style.wrapper}>
      <div className="container">
        <div className="flex items-center justify-between mt-[40px]">
          <div className="w-[50%] pl-[20px]">
            <h2 className=" text-[40px] tracking-[0.5px] leading-[44px] font-semibold mb-[16px] flex items-center gap-[8px]">
              Google Play Console
              <Arrowbtn />
            </h2>
            <p className="mt-[10px] text-base tracking-[0.5px] font-normal ">
              Troubleshoot before launch, ensure technical performance, maximize
              your reach, and more with dozens of built-in features.
            </p>
          </div>
          <Buttons swiperInstance={swiperInstance} />
        </div>

        <Swiper
          speed={1100}
          slidesPerView={4}
          spaceBetween={30}
          onSwiper={setSwiperInstance}
          navigation={{ nextEl: "#next", prevEl: "#prev" }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ padding: "20px" }}
        >
          <div class="row_group">
            {[...Array(10)].map((a, i) => (
              <SwiperSlide key={i}>
                <Card />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
