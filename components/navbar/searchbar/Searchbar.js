"use client";
import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "./searchIcon/SearchIcon";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const [input, setInput] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setInput(true);
    }
  };
  const handleClick = () => {
    setInput(!input);
  };
  return (
    <>
      <div
        className={`${style.search_bar} ${input ? style.white : style.blue}`}
        onClick={handleClick}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          ref={searchRef}
        />
        <SearchIcon input={input} />
      </div>
    </>
  );
};

export default Searchbar;
