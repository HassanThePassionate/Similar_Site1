import style from "./score.module.css";

const Score = () => {
  return (
    <div className="mt-[10px]">
      <p>Similarity Score</p>
      <span className="flex items-center text-[14px] font-bold ">
        100%
        <span className={style.line_box}>
          <span className={style.line}></span>
        </span>
      </span>
    </div>
  );
};

export default Score;
