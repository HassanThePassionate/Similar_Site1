import React from "react";
import style from "./navBtn.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const NavBtns = () => {
  return (
    <div className={`${style.nav_btns}`}>
      <button>
        <span className="flex items-center gap-[8px]">
          Shop phones
          <AiOutlineArrowRight className={style.icon} />
        </span>
      </button>
    </div>
  );
};

export default NavBtns;
