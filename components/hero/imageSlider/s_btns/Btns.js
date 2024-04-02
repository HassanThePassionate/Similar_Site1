import React from "react";
import style from "./btns.module.css";

const Btns = ({ handlePaginationClick, Slides, activeIndex }) => {
  const handleDotClick = (index) => {
    handlePaginationClick(index);
  };

  return (
    <div className={style.wrap}>
      {Slides.map((_, index) => (
        <div
          key={index}
          className={`${style.dot} ${
            activeIndex === index ? style.active : ""
          }`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Btns;
