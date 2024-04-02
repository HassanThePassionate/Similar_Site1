import Image from "next/image";
import React from "react";
import style from "./card.module.scss";
const Card = () => {
  return (
    <div className={style.box}>
      <div className={style.box_des}>
        <a href="#">
          <div className={style.landing_icon}>
            <Image
              src="https://developer.android.com/static/images/picto-icons/launch.svg"
              alt="img"
              height={80}
              width={80}
            />
          </div>
        </a>
        <div className={style.landing_title}>
          <h3>
            <a href="#"> Distribution </a>
          </h3>
          <div className="flex items-center gap-[8px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 -960 960 960"
            >
              <path d="m127-223-68-67 317-315 167 167 199-200H623v-94h278v277h-93v-115L542-304 375-471z"></path>
            </svg>
            233423
          </div>
          <div className={style.para}>
            Make your app launch a success with tools and strategies to help
            publish, manage, and distribute your app worldwide
          </div>
          <div className={style.buttons}>
            <a href="#"> Learn more </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
