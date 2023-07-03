import HomeParts from "./HomeParts";
import StairPattern from "./StairPattern";
import Title1 from "./Title1";

const Section1 = (props) => {
  return (
    <section className="relative mb-28 mt-10 flex flex-col items-center justify-center space-y-16 border-b border-b-[#E0E0E0] pb-28 md:mt-8 ">
      <StairPattern />
      <Title1 />
      <HomeParts />
    </section>
  );
};

export default Section1;
