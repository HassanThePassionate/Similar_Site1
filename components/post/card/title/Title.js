import React from "react";
import GIcon from "../globalIcon/GIcon";
import style from "./title.module.css";
import Rating from "../../Rating/Rating";

const Title = () => {
  return (
    <>
      <div className={style.title}>
        <GIcon />
        <span className="ml-[12px] text-[32px] font-bold">similarsite.com</span>
      </div>
      <Rating />
      <p className="text-base mt-[12px]">
        Discover how your top competitor’s audience surfs the web so you can
        tailor your website experience perfectly at every stage of the customer
        journey
      </p>
    </>
  );
};

export default Title;
