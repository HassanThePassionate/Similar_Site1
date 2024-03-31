import { MdOutlineTableChart } from "react-icons/md";
import Tab from "../tab/Tab";

const SliderHeading = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center mb-[8px]">
          <MdOutlineTableChart size={24} style={{ marginRight: "20px" }} />
          <h6 className=" text-[24px] font-bold">Data sets</h6>
        </div>
        <Tab />
      </div>
      <p className="text-base mb-[20px]">
        309K high-quality public datasets. Everything from avocado prices to
        video game sales.
      </p>
    </>
  );
};

export default SliderHeading;
