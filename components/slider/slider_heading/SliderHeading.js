import { MdOutlineTableChart } from "react-icons/md";
import Tab from "../tab/Tab";
import Arrowbtn from "@/components/arrowBtn/Arrowbtn";

const SliderHeading = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-[8px] pl-[10px]">
          <MdOutlineTableChart size={34} style={{ marginRight: "20px" }} />
          <h6 className=" text-[40px] font-semibold flex items-center gap-[8px]">
            Data sets
            <Arrowbtn />
          </h6>
        </div>
        <Tab />
      </div>
      <p className="text-base mb-[20px]  pl-[10px]">
        309K high-quality public datasets. Everything from avocado prices to
        video game sales.
      </p>
    </>
  );
};

export default SliderHeading;
