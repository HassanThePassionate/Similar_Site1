import React from "react";
import style from "./slider.module.css";
import SliderHeading from "./slider_heading/SliderHeading";
import Cards from "./cards/Cards";

const Slider = () => {
  return (
    <div className="container p-[32px]">
      <div className="mt-[48px] mb-25px last-of-type:mb-0">
        <SliderHeading />
        <Cards />
      </div>
    </div>
  );
};

export default Slider;
