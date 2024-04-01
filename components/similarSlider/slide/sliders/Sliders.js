"use client";
import React, { useState } from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../title/Title";
import Tags from "../tags/Tags";
import Buttons from "@/components/Cards/button/Buttons";

const Sliders = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
      <div className="container p-[32px]">
        <div className="flex items-center justify-between mt-[40px]">
          <div>
            <h2 className=" text-2xl font-semibold">Google Play Console</h2>
            <p className="mt-[10px]">
              Troubleshoot before launch, ensure technical performance, maximize
              your reach, and more with dozens of built-in features.
            </p>
          </div>
          <Buttons swiperInstance={swiperInstance} />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          speed={1100}
          modules={[Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          className="mySwiper"
          style={{ padding: "20px 10px" }}
        >
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.slide}>
              <div className={style.side}>
                <Title />
                <Tags />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
