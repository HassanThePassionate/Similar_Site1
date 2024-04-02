import Link from "next/link";
import style from "./gameCards.module.scss";
import Image from "next/image";
import { IoIosList } from "react-icons/io";
import SliderHeading from "../slider/slider_heading/SliderHeading";
const GameCards = () => {
  return (
    <div className="container p-[32px] ">
      <div className="mt-[40px]">
        <SliderHeading />
      </div>
      <ul className={style.list}>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/sz_mmbiz_png/OFye4rdPwyccR5UXGz9z5X74I2ghib0yT0pU4aFufUDy11cR8IiccLf69rba9ecRuUwAX3WtMGNNPE1nhDnBzialA/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">catch the goose</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/mmbiz_png/MQtUTOO9xqftvD8A2fxrDo4ibuXia3qDxyfAZ1lXkGYfa68SJn36SarLwiahOB6FBZN6CV4gicJOOQNWIhI7NU6iaAw/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">Snake War</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/sz_mmbiz_png/1xIRUpctR7KlxAic0oNBZxibzices5hBsAp2bt6PicI899CLL9tDzDdibGHgpeb6xQjdWltIn2CYlxqynYpx2MF4cDA/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">Subway Surface</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/sz_mmbiz_png/FOibiaUicWic69rFCqZ4GrUu76PzfoFw3a3Ca1icQn87dicWFicEe1PicYB5Vee4pjaOvaQlSHnSyfj95t4Cf2wUyTcCfg/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">CrossFire-King</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/mmbiz_png/k8icSqFlSialCclo0Wng76xIyWmpqoxjDHRicyA7KQzrBhUibz6J0Qlab4wMA2oTZwzs2tYxEl1lmQ0O2OVdpHtMxQ/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">Jump</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div href="#" className={style.link}>
            <div className="img">
              <Image
                src="https://mmbiz.qpic.cn/mmbiz_png/YXiccDpC3EysptzthAXotHzQibmHkPdaS5Miansg9H9gAfPEwZzXoxqwc6QVpxB10ZLazLmQc4grLgP1icoS67wicicw/640?wx_fmt=png&wxfrom=200"
                alt="img"
                height={72}
                width={72}
              />
            </div>
            <h4 className="mt-[8px] mb-[2px] text-[16px]">Played with Humb</h4>
            <div className=" my-[10px]">
              <span className="flex gap-1  items-center">
                <IoIosList color="#666" />
                <Link href="#" className="underline text-[#999] text-sm">
                  256 altenative
                </Link>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GameCards;
