import Image from "next/image";
import Rating from "../Rating/Rating";
import { data } from "../../../constant/Similardata";
import style from "./SimilarCard.module.css";
import Link from "next/link";
import Arrowbtn from "@/components/arrowBtn/Arrowbtn";
const SimilarCard = () => {
  return (
    <div className='container'>
      <div className='w-[50%] pb-[40px] pt-[40px] pl-[20px]'>
        <h2 className=' text-[40px] tracking-[0.5px] leading-[44px] font-semibold mb-[16px] flex items-center gap-[8px]'>
          Google Play Console
          <Arrowbtn />
        </h2>
        <p className='mt-[10px] text-base tracking-[0.5px] font-normal '>
          Troubleshoot before launch, ensure technical performance, maximize
          your reach, and more with dozens of built-in features.
        </p>
      </div>
      <div className={style.cards}>
        {data.map((item, index) => (
          <Link href='/post' key={index} className={style.card}>
            <div className={style.image}>
              <Image src={item.img} alt='app' width={64} height={64} />
            </div>
            <div className={style.texts}>
              <div className='text'>
                <h3>{item.title}</h3>
              </div>
              <div className='text'>
                <p>{item.catagory}</p>
              </div>
              <div className='text'>
                <Rating />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarCard;
