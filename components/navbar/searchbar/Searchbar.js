import React from "react";
import SearchIcon from "./searchIcon/SearchIcon";
import style from "./searchbar.module.css";
const Searchbar = () => {
  return (
    <div className={style.search_bar}>
      <input type="text" name="search" id="search" />
      <SearchIcon />
    </div>
  );
};

export default Searchbar;
