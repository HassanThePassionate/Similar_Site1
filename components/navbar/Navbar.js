import React from "react";
import Logo from "./logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Menu from "./menu/Menu";
import NavBtns from "./navbtns/NavBtns";

const Navbar = () => {
  return (
    <div className="flex gap-[32px] items-center">
      <div className="container">
        <Logo />
        <Searchbar />
        <Menu />
        <NavBtns />
      </div>
    </div>
  );
};

export default Navbar;
