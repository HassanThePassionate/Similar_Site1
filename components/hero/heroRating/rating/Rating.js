import Link from "next/link";
import style from "./rating.module.css";

const Rating = () => {
  return (
    <div className={style.wrapper}>
      <Link href="#">
        <span class={style.rating}>
          <span class={style.rating_star} style={{ width: "100%" }}></span>
        </span>
        <span class={style.review_rating}>
          4.9
          <span class={style.review_count}>11 Reviews</span>
        </span>
      </Link>
    </div>
  );
};

export default Rating;
