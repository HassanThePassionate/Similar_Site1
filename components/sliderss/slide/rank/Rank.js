import React from "react";
import style from "./Ranks.module.css";
const Rank = () => {
  return (
    <div className={style.list}>
      <div className={style.iteam}>
        <div>
          <div>Global Rank:</div>
          <div className="text-[#0071CD] text-[14px] leading-[14px] cursor-pointer hover:text-[#0000E6]">
            Worldwide
          </div>
          <div className="text-[22px] leading-[28px] font-bold mt-[8px] flex items-center">
            75
            <span>
              <svg
                viewBox="0 0 17 20"
                fill="none"
                width="12px"
                height="14px"
                className="ml-[5px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 20V5.765L2.133 10.633L0 8.501L8.499 0L17 8.501L14.868 10.633L10 5.765V20H7Z"
                  fill="#00BA96"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className={style.iteam}>
        <div>
          <div>Country Rank:</div>
          <div className="text-[#0071CD] text-[14px] leading-[14px] cursor-pointer hover:text-[#0000E6]">
            United State
          </div>
          <div className="text-[22px] leading-[28px] font-bold mt-[8px] flex items-center">
            60
            <span>
              <svg
                viewBox="0 0 17 20"
                fill="none"
                width="12px"
                height="14px"
                className="ml-[5px] rotate-180"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 20V5.765L2.133 10.633L0 8.501L8.499 0L17 8.501L14.868 10.633L10 5.765V20H7Z"
                  fill="#F51A38"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
