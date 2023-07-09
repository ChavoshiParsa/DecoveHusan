import CompanyGoal from "./CompanyGoal";
import CompanyTeam from "./CompanyTeam";
import FormationStory from "./FormationStory";
import PartOfAct from "./PartOfAct";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-28">
      <FormationStory />
      <CompanyGoal />
      <PartOfAct />
      <CompanyTeam />
    </div>
  );
};

export default Description;
