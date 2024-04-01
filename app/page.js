import Cards from "@/components/Cards/Cards";
import Navbar from "@/components/navbar/Navbar";

import Slider from "@/components/slider/Slider";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Slider />
      <Slider />
    </div>
  );
};

export default page;
