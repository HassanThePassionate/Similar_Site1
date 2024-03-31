"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./cards.module.css";
import Card from "./card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Sliderbtn from "./button/Sliderbtn";
const Cards = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative">
      <Sliderbtn swiperInstance={swiperInstance} />
      <Link href="#">
        <div className={style.cards}>
          <Swiper
            speed={1100}
            slidesPerView={4}
            spaceBetween={30}
            onSwiper={setSwiperInstance}
            navigation={{ nextEl: "#next", prevEl: "#prev" }}
            modules={[Navigation]}
            className="mySwiper"
            style={{ padding: "20px 10px" }}
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <Card />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
