import HomeParts from "./HomeParts";
import StairPattern from "./StairPattern";
import Title1 from "./Title1";

const Section1 = (props) => {
  return (
    <section className="relative mt-24 flex flex-col items-center justify-center space-y-14 mb-24">
      <StairPattern />
      <Title1 />
      <HomeParts />
    </section>
  );
};

export default Section1;
