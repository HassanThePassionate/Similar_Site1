import Image from "next/image";
import React from "react";
import style from "./card.module.scss";
const Card = () => {
  return (
    <div className={`${style.card} mt-[20px]`}>
      <div className={style.icon}>
        <Image
          src="https://developer.android.com/static/images/picto-icons/launch.svg"
          alt="img"
          height={80}
          width={80}
        />
      </div>
      <div className={style.card_text}>
        <h2>Distribution</h2>
        <p>
          Make your app launch a success with tools and strategies to help
          publish, manage, and distribute your app worldwide
        </p>
        <div className={style.btn}>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
