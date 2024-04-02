import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footer_text}>
          <div className={style.text}>
            <p className=" text-sm mb-[8px]  text-neutral-800 font-semibold ">
              <span className="text-[#FF9D28] mr-[10px]">/ </span>
              WHO ARE YOU
            </p>
            <h2 className="mb-[8px] text-[32px] leading-[44px] font-semibold ">
              The #1 destination for finding the right software and services
            </h2>
            <p className=" text-sm mb-[20px]  text-neutral-800 font-semibold ">
              We help your organization save time, increase productivity and
              accelerate growth.
            </p>
            <Link
              href="#"
              className="flex items-center gap-[4px] text-sm font-semibold uppercase text-[#68c5ed] hover:text-[#458caa] transition-all "
            >
              Learn More About Capterra
              <IoMdArrowRoundForward size={24} />
            </Link>
          </div>
        </div>
        <div className={style.footer_links}>
          <div className={style.links}>
            <ul>
              <li>
                <Link href="#">SOFTWARE CATEGORIES</Link>
              </li>
              <li>
                <Link href="#">SERVICE CATEGORIES</Link>
              </li>
              <li>
                <Link href="#">FAQS</Link>
              </li>
              <li>
                <Link href="#">BLOG & RESEARCH</Link>
              </li>
              <li>
                <Link href="#">GLOSSARY</Link>
              </li>
              <li>
                <Link href="#">WRITE A REVIEW</Link>
              </li>
            </ul>
          </div>
          <div className={style.links}>
            <ul>
              <li>
                <Link href="#">MY ACCOUNT</Link>
              </li>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li>
                <Link href="#">CAREERS</Link>
              </li>
              <li>
                <Link href="#">LEGAL TERMS</Link>
              </li>
              <li>
                <Link href="#">PRIVACY POLICY</Link>
              </li>
            </ul>
          </div>
          <div className={style.links}>
            <ul>
              <li>
                <Link href="#">FOR VENDORS</Link>
              </li>
              <li>
                <Link href="#"> VENDOR LOGIN</Link>
              </li>
            </ul>
          </div>
          <div className={style.links}>
            <ul>
              <li>
                <Link href="#">Capterra Inc.</Link>
              </li>
              <li>
                <Link href="#">1201 Wilson Blvd</Link>
              </li>
              <li>
                <Link href="#">9th Floor</Link>
              </li>
              <li>
                <Link href="#">Arlington, VA 22209</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_icons">
          <ul className={style.social_links}>
            <li>
              <Link href="#">
                <FaLinkedinIn size={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsTwitterX size={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <RiFacebookFill size={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaYoutube size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
