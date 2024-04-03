import Cards from "@/components/Cards/Cards";
import GameCards from "@/components/gameCards/GameCards";
import SmallCard from "@/components/smallCards/smallCard/SmallCard";
import SimilarCard from "@/components/thumbCards/SimilarCard/SimilarCard";
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
