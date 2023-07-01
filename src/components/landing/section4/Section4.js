import ForProducers from "./ForProducers";
import ForSellers from "./ForSellers";
import HelixArrowIcon from "./HelixArrowIcon";
import RectDotPattern from "./RectDotPattern";
import Title4 from "./Title4";

const Section4 = (props) => {
  return (
    <section className="relative flex flex-col items-center justify-between space-y-20">
      <Title4 />
      <RectDotPattern position={"top-[270px] left-24"} />
      <ForSellers />
      <HelixArrowIcon />
      <RectDotPattern position={"top-[720px] right-24"} />
      <ForProducers />
    </section>
  );
};

export default Section4;
