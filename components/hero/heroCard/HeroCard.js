import React from "react";
import style from "./heroCard.module.css";
import Image from "next/image";
import Rank from "@/components/post/card/rank/Rank";
import ImageSlider from "../imageSlider/ImageSlider";
import HeroRating from "../heroRating/HeroRating";
import Links from "../officallinks/Links";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const HeroCard = () => {
  return (
    <div className={style.wrapper}>
      <div
        className="container"
        style={{ maxWidth: "1800px", padding: "0 16px" }}
      >
        <BreadCrumb />
        <div className={style.header}>
          <div className={style.about_icon}>
            <div className={style.about}>
              <div className={style.icon_image}>
                <Image
                  src="https://d4.alternativeto.net/Mky-pJuHWtipsvrE2SGnoaRsWTNH009Tfauuu3Hmo2o/rs:fit:140:140:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9maXJlZm94XzE1NjMwOC5wbmc.png"
                  alt="img"
                  height={120}
                  width={120}
                  className={style.img}
                />
              </div>
              <div className="flex items-center px-[20px] py-[10px] gap-2  text-black ">
                <button className="flex items-center justify-center gap-1 bg-[#f7f3f3] h-10 px-4 rounded-full hover:bg-[#EBEAEA] transition-all  ">
                  <BiSolidLike size={18} />

                  <span className="text-sm opacity-70 min-w-[10px]">2</span>
                </button>
                <button className="flex items-center justify-center gap-1 bg-[#f7f3f3] h-10 w-10 rounded-full hover:bg-[#EBEAEA] transition-all  ">
                  <BiSolidDislike size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className={style.about_title}>
            <h1 className={style.title}>Mozilla Firefox</h1>
            <div className={style.para}>
              <p>
                High-speed, privacy-centric browser with extensive customization
                through add-ons and themes.
              </p>
            </div>
          </div>
          <div className={style.meta}>
            <div className={style.badge_row}>
              <div className={style.badge_content}>
                <ul className={style.badges}>
                  <li>
                    <span>Web Browser</span>
                  </li>
                  <li>
                    <span>Text to Speech Service</span>
                  </li>
                  <li>
                    <span className={style.free}>Free • Open Source</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[6px]"></div>
            <div className={style.badge_row}>
              <div className={style.badge_content}>
                <ul className={style.badges}>
                  <li>
                    <span>Mac</span>
                  </li>
                  <li>
                    <span>Windows</span>
                  </li>
                  <li>
                    <span>Linux</span>
                  </li>
                  <li>
                    <span>Andriod</span>
                  </li>
                  <li>
                    <span>iPhone</span>
                  </li>
                  <li>
                    <span>BSD</span>
                  </li>
                  <li>
                    <span>iPad</span>
                  </li>
                  <li>
                    <span>AppleImageHub</span>
                  </li>
                  <li>
                    <span>Snapcraft</span>
                  </li>
                  <li>
                    <span>FlatHub</span>
                  </li>
                </ul>
              </div>
            </div>
            <HeroRating />
          </div>
          <div className={style.slider}>
            <Rank />
            <ImageSlider />
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
