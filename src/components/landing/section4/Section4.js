import ForProducers from "./ForProducers";
import ForSellers from "./ForSellers";
import HelixArrowIcon from "./HelixArrowIcon";
import RectDotPattern from "./RectDotPattern";
import Title4 from "./Title4";

const Section4 = (props) => {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-6 md:space-y-12">
      <Title4 />
      <RectDotPattern position={"top-[270px] left-10 md:left-24"} />
      <ForSellers />
      <HelixArrowIcon />
      <RectDotPattern position={"md:top-[720px] top-[1000px] right-0 md:right-32"} />
      <ForProducers />
    </section>
  );
};

export default Section4;
