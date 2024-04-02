import React from "react";
import style from "./heroCard.module.css";
import Image from "next/image";
import Rank from "@/components/post/card/rank/Rank";
// import Slider from "@/components/slider/Slider";
import ImageSlider from "../imageSlider/ImageSlider";
import HeroRating from "../heroRating/HeroRating";
import Links from "../officallinks/Links";
import BreadCrumb from "../breadCrumb/BreadCrumb";
// import HeroTags from "../heroTags/HeroTags";
// import HeroImage from "../heroImage/HeroImage";
// import HeroRating from "../heroRating/HeroRating";
// import Links from "../officallinks/Links";
// import Rank from "@/components/post/card/rank/Rank";
// import ImageSlider from "../imageSlider/ImageSlider";

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
              <div className={style.icon_btn}>
                <button className={style.btn}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className={style.svg}
                    height="0.85em"
                    width="0.85em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                  <span>7208</span>
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
