import React from "react";
import Image from "next/image";
import style from "./card.module.css";
const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.text_wrap}>
        <div className={style.text}>FitBit Fitness Tracker Data</div>
        <div className={style.img}>
          <Image src="/card_img.png" alt="img" height={48} width={48} />
        </div>
      </div>
      <div className={style.size}>Usability 8.8 · 45 MB</div>
      <div className={style.para}>
        Pattern recognition with tracker data: Improve Your Overall Health
      </div>
    </div>
  );
};

export default Card;
