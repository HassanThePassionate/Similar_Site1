import { MdOutlineTableChart } from "react-icons/md";
import Tab from "../tab/Tab";
import Arrowbtn from "@/components/arrowBtn/Arrowbtn";

const SliderHeading = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-[8px] pl-[20px]">
          <h6 className=" text-[40px] font-medium font-semibold flex items-center gap-[8px]">
            Mini games
            <Arrowbtn />
          </h6>
        </div>
        <Tab />
      </div>
    </>
  );
};

export default SliderHeading;
