"use client";
import React, { useState } from "react";
import Tab from "./tab/Tab";
import Buttons from "./button/Buttons";
import Slides from "./slides/Slides";
import style from "./slider.module.css";
const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => swiperInstance && swiperInstance.slideNext();
  const goPrevs = () => swiperInstance && swiperInstance.slidePrev();

  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2>Best Streaming Websites</h2>
        <div className={style.wrap}>
          <div className={style.tab_wrap}>
            <div className={style.tab}>Recommended</div>
            <Tab title="Create my website" />
            <Tab title="Connect with customers" />
            <Tab title="Build and protect your brand" />
          </div>
          <div>
            <Buttons next={goNexts} prev={goPrevs} />
          </div>
        </div>
        <Slides setSwiperInstance={setSwiperInstance} />
      </div>
    </div>
  );
};

export default Slider;
