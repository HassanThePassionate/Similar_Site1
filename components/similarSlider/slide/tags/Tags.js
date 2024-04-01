import Link from "next/link";
import style from "./tags.module.css";
import { IoIosList } from "react-icons/io";

const Tags = () => {
  return (
    <div>
      <div className={style.badge_row}>
        <div className={style.badge_content}>
          <ul className={style.badges}>
            <li>
              <span>Web Browser</span>
            </li>
            <li>
              <span>Text to Speech Service</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" my-[10px]">
        <span className="flex gap-1  items-center">
          <IoIosList color="#666" />
          <Link href="#" className="underline text-[#999] text-sm">
            256 altenative
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Tags;
