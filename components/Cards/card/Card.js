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
          <div className={style.wrap}>
            <div className={style.review}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                color="orange"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "orange" }}
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <span className="text-sm mt-[1px]">
                5.0
                <span style={{ color: "silver", margin: "0 4px" }}>|</span>1
                review
              </span>
            </div>
            <div className={style.review_text}>
              <span className="text-sm">Productivity</span>
            </div>
          </div>
          {/* <div className={style.buttons}>
            <a href="#"> Learn more </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
