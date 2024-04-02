import React from "react";
import style from "./tab.module.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Tab = () => {
  return (
    <div className={style.tab}>
      <LiaLongArrowAltRightSolid size={20} />
      <span className={style.tab_text}>View all</span>
    </div>
  );
};

export default Tab;
