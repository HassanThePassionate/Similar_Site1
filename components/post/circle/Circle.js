import Image from "next/image";
import style from "./circle.module.css";

const Circle = () => {
  return (
    <>
      <div className={style.img}>
        <Image src="/image.png" alt="img" height={127} width={170} />
      </div>
      <div className={style.circle}></div>
    </>
  );
};

export default Circle;
