import React from "react";
import Link from "next/link";
import style from "./title.module.css";
import GIcon from "../globalIcon/GIcon";

const Title = () => {
  return (
    <>
      <div className={style.title}>
        <GIcon />
        <span className=" text-[16px] font-bold">similarsite.com</span>
        <Link href="#" className={style.link}>
          Free • Open Source
        </Link>
      </div>
      <p className="text-[14px] mt-[12px]">
        Discover how your top competitor’s audience surfs the web so you can
        tailor your website experience perfectly at every stage of the customer
        journey
      </p>
    </>
  );
};

export default Title;
