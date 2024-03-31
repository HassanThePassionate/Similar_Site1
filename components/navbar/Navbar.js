import React from "react";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Menu from "./menu/Menu";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Logo />
      <Searchbar />
      <Menu />
    </div>
  );
};

export default Navbar;
