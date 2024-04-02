import Cards from "@/components/Cards/Cards";
import Footer from "@/components/footer/Footer";
import GameCards from "@/components/gameCards/GameCards";
import Navbar from "@/components/navbar/Navbar";

import SmallCard from "@/components/smallCards/smallCard/SmallCard";
import SimilarCard from "@/components/thumbCards/SimilarCard/SimilarCard";
import React from "react";

const page = () => {
  return (
    <div>
      <Cards />
      <SmallCard />
      <SimilarCard />
      <GameCards />
    </div>
  );
};

export default page;
