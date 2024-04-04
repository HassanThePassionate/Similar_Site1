import Cards from "@/components/Cards/Cards";
import GameCards from "@/components/gameCards/GameCards";
import HeroSearch from "@/components/heroSearch/HeroSearch";
import SmallCard from "@/components/smallCards/smallCard/SmallCard";
import SimilarCard from "@/components/thumbCards/SimilarCard/SimilarCard";
const page = () => {
  return (
    <div>
      <HeroSearch />
      <Cards />
      <SmallCard />
      <SimilarCard />
      <GameCards />
    </div>
  );
};

export default page;
