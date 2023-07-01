import FunctionDescription from "./FunctionDescription";
import SectionBackground from "./SectionBackground";
import Title3 from "./Title3";

const Section3 = (props) => {
  return (
    <section className="relative flex flex-col justify-center items-center space-y-16 mb-48">
      <SectionBackground />
      <Title3 />
      <FunctionDescription/>
    </section>
  );
};

export default Section3;
