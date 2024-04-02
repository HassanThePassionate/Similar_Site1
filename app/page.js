import Cards from "@/components/Cards/Cards";
import GameCards from "@/components/gameCards/GameCards";
import Navbar from "@/components/navbar/Navbar";
import Sliders from "@/components/similarSlider/slide/sliders/Sliders";

import Slider from "@/components/slider/Slider";
import SmallCard from "@/components/smallCards/smallCard/SmallCard";
import SimilarCard from "@/components/thumbCards/SimilarCard/SimilarCard";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <SmallCard />
      <SimilarCard />
      <Sliders />
      <GameCards />
      <Slider />
    </div>
  );
};

export default page;
