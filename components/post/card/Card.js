import React from "react";
import style from "./card.module.css";
import Tags from "../tags/Tags";
import Score from "../score/Score";
import Circle from "../circle/Circle";
import Title from "./title/Title";
import Competitors from "../competitors/Competitors";
import Rank from "./rank/Rank";

const Card = () => {
  return (
    <div className={`mb-10  relative overflow-hidden ${style.wrapper}`}>
      <div>
        <div className={style.wrap}>
          <div className={style.left_side}>
            <Title />
          </div>

          <div className={style.right_side}>
            <Rank />
            <Score />
          </div>
        </div>
        <div>
          <Tags />
          <Competitors />
        </div>
      </div>
      <Circle />
    </div>
  );
};

export default Card;
