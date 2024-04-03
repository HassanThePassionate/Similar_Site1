"use client";
import { useState } from "react";
import Link from "next/link";
import style from "./competitors.module.css";
import Image from "next/image";
import { data } from "../../../constant/CardsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Buttons from "./button/Buttons";

const Competitors = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();
  return (
    <>
      <h2 className={style.title}>Competitors and Alternatives</h2>
      <div className={style.cards}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          className="mySwiper max-w-[800px]"
          style={{ padding: "0 10px" }}
        >
          {data.map((elm, id) => (
            <SwiperSlide key={id}>
              <div className={style.card}>
                <div className={style.id}>#{id + 1}</div>
                <div className="flex mb-[12px]">
                  <div className={style.img}>
                    <Image src={elm.img} alt="img" height={20} width={20} />
                  </div>
                  <Link href="#" className={style.link}>
                    {elm.link}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Buttons next={goNexts} prev={goPrevs} />
      </div>
    </>
  );
};

export default Competitors;
