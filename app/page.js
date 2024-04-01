import Cards from "@/components/Cards/Cards";
import Navbar from "@/components/navbar/Navbar";
import Sliders from "@/components/similarSlider/slide/sliders/Sliders";

import Slider from "@/components/slider/Slider";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Sliders />
      <Slider />
      <Slider />
    </div>
  );
};

export default page;
