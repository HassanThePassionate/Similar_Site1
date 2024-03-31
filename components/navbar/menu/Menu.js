import React from "react";
import style from "./menu.module.css";
import Link from "next/link";
import NavBtns from "../navbtns/NavBtns";
const Menu = () => {
  return (
    <div>
      <nav className={style.nav_menu}>
        <ul className={`${style.nav_list} flex items-center gap-[24px] `}>
          <li>
            <Link href="#" className="gap-[3px]">
              Catagories
              <svg
                class="lucide lucide-chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="gap-[3px]">
              Vendors Solutions
              <svg
                class="lucide lucide-chevron-down"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#" className="gap-[8px] font-semibold">
              <svg
                class="lucide lucide-pencil"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
              Write a review
            </Link>
          </li>
          <li>
            <Link href="#" className="gap-[8px] font-semibold">
              <svg
                class="lucide lucide-heart"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#191919"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              Research Board
            </Link>
          </li>
          <NavBtns />
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
