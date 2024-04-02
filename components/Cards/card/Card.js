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
