import React from "react";
import style from "./navBtn.module.css";
const NavBtns = () => {
  return (
    <div className={`${style.nav_btns}`}>
      <button className={style.nav_btn}>
        <strong>Log in</strong>
      </button>
      <button className={`${style.nav_btn} bg-[#1f51e5] text-white`}>
        <strong>Sign up</strong>
      </button>
    </div>
  );
};

export default NavBtns;
