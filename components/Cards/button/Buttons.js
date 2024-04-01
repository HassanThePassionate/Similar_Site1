import style from "./button.module.css";

const Buttons = ({ swiperInstance }) => {
  const handleSlide = (direction) => {
    if (swiperInstance) {
      swiperInstance[direction]();
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.btn} onClick={() => handleSlide("slidePrev")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          id="IconChangeColor"
          height="15"
          width="15"
          className="slider-svg"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            id="mainIconPathAttribute"
            strokeWidth="0.5"
            stroke="#ffff"
          ></path>
        </svg>
      </div>
      <div className={style.btn} onClick={() => handleSlide("slideNext")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          id="IconChangeColor"
          height="15"
          width="15"
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            id="mainIconPathAttribute"
            strokeWidth="0.5"
            stroke="#ffff"
            className="slider-svg"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Buttons;
