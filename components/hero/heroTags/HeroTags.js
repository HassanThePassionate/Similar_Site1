import React from "react";
import style from "./hero.module.css";
import Link from "next/link";
const HeroTags = () => {
  return (
    <div>
      <div className={style.badge}>
        <ul className={style.badge_list}>
          <li>
            <Link href="#">Web Browser</Link>
          </li>
          <li>
            <Link href="#">Text to Speech Service</Link>
          </li>
          <li>
            <Link href="#" className={style.green}>
              Free • Open Source
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.badge_row}>
        <ul className={style.badge_list}>
          <li>
            <Link href="#" className="text-[#003a5b] bg-[#e0eaf4]">
              Mac
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#003a5b] bg-[#e0eaf4]">
              Windows
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#003a5b] bg-[#e0eaf4]">
              Linux
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#003a5b] bg-[#e0eaf4]">
              BSD
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#003a5b] bg-[#e0eaf4]">
              iPad
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroTags;
