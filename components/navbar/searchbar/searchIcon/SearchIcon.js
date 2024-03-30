import React from "react";
import style from "./searchIcon.module.css";
const SearchIcon = () => {
  return (
    <button className={style.search_icon}>
      <svg
        class="lucide lucide-search"
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
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    </button>
  );
};

export default SearchIcon;
