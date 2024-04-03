import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import Rating from "../post/card/Card";
import HeroCard from "./heroCard/HeroCard";

const Hero = () => {
  return (
    <div
      className="container"
      style={{ maxWidth: "1800px", padding: "0 16px" }}
    >
      <HeroCard />
      <h2
        className="text-3xl mt-[40px] mb-[20px]"
        style={{
          fontFamily: "gdsage",
        }}
      >
        Top 7 google.com Alternative and Competitor
      </h2>
      <div
        className=" grid"
        style={{
          gridTemplateColumns: "minmax(0, 9fr) minmax(0, 3fr) ",
          columnGap: "15px",
        }}
      >
        <div className="bg-white text-black pr-[30px] pb-[20px]">
          {[...Array(7)].map((a, i) => (
            <Rating key={i} />
          ))}
        </div>
        <div>
          <div className="bg-white border-[1px] border-[#d4dbe0] text-black  p-[20px] mb-5">
            <h3 className="text-[28px] font-semibold mb-3">
              Share this article
            </h3>
            <div>
              <ul className="flex items-center ">
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <CiMail size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaFacebook size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaLinkedin size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <RiTwitterXLine size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaPinterestP size={30} color="#09757A" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white border-[1px] border-[#d4dbe0] text-black  pt-[40px] px-[30px] pb-[20px]">
            <h2 className="text-[32px] font-semibold pb-[16px]">
              Related articles
            </h2>
            <div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer relative overflow-hidden w-full text-ellipsis whitespace-nowrap "
                >
                  Allow indexing of all pages in WordPress
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer relative overflow-hidden w-full text-ellipsis whitespace-nowrap "
                >
                  Sign in to WordPress
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer relative overflow-hidden w-full text-ellipsis whitespace-nowrap "
                >
                  Secure my website
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer relative overflow-hidden w-full text-ellipsis whitespace-nowrap "
                >
                  Add categories to my WordPress site
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0]">
                <Link
                  href="#"
                  className="text-xl ffont-medium text-[#111]  cursor-pointe relative overflow-hidden w-full text-ellipsis whitespace-nowrap r"
                >
                  Add tags to my WordPress site
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
