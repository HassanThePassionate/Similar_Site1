import React from "react";
import style from "./heroSearch.module.scss";
const HeroSearch = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <h1>Where you go for software.</h1>
        <p>
          Find the right software and services based on
          <span className="text-[#ff492c] font-semibold"> 2,563,300+ </span>
          real reviews.
        </p>
        <div className={style.input}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              contain="paint"
              buffered-rendering="static"
              viewBox="0 0 512 512"
              class="medium icon-search nessy-only"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              height={24}
              width={24}
              fill="#505059"
            >
              <path d="M496 436L375 333c-13-12-26-17-37-16 29-34 46-77 46-125C384 86 298 0 192 0S0 86 0 192s86 192 192 192c48 0 91-17 125-46-1 11 4 24 16 37l103 121c17 20 46 21 64 4 17-18 16-47-4-64zM192 320c-71 0-128-57-128-128S121 64 192 64s128 57 128 128-57 128-128 128z"></path>
            </svg>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter product name, software category, service name..."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
