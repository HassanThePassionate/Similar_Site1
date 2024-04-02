import { TfiHelpAlt } from "react-icons/tfi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";

import Link from "next/link";
import React from "react";
import style from "./smallCard.module.scss";
import Arrowbtn from "@/components/arrowBtn/Arrowbtn";
const SmallCard = () => {
  return (
    <div className="container">
      <div className="w-[50%] pb-[40px]">
        <h2 className=" text-[40px] tracking-[0.5px] leading-[44px] font-semibold mb-[16px] flex items-center gap-[8px]">
          Google Play Console
          <Arrowbtn />
        </h2>
        <p className="mt-[10px] text-base tracking-[0.5px] font-normal ">
          Troubleshoot before launch, ensure technical performance, maximize
          your reach, and more with dozens of built-in features.
        </p>
      </div>
      <ul className={style.list}>
        <li>
          <Link href="#" className="bg-[#e5dbf6]">
            <h3>Why Andriod</h3>
            <TfiHelpAlt size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e8f0fe]">
            <h3>Solutions</h3>
            <SiHomeassistantcommunitystore size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#d1daf4]">
            <h3>Industry</h3>
            <BsFillPeopleFill size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e5dbf6]">
            <h3>Why Andriod</h3>
            <TfiHelpAlt size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e8f0fe]">
            <h3>Solutions</h3>
            <SiHomeassistantcommunitystore size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#d1daf4]">
            <h3>Industry</h3>
            <BsFillPeopleFill size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e5dbf6]">
            <h3>Why Andriod</h3>
            <TfiHelpAlt size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e8f0fe]">
            <h3>Solutions</h3>
            <SiHomeassistantcommunitystore size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#d1daf4]">
            <h3>Industry</h3>
            <BsFillPeopleFill size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e5dbf6]">
            <h3>Why Andriod</h3>
            <TfiHelpAlt size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#e8f0fe]">
            <h3>Solutions</h3>
            <SiHomeassistantcommunitystore size={36} className={style.icon} />
          </Link>
        </li>
        <li>
          <Link href="#" className="bg-[#d1daf4]">
            <h3>Industry</h3>
            <BsFillPeopleFill size={36} className={style.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SmallCard;
