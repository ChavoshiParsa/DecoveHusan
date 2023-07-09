import ActionBox from "./ActionBox";
import QuestionFlex from "./QuestionFlex";
import Title from "./Title";

const Container = () => {
  return (
    <section className="bg-white p-24 flex flex-col justify-center items-center font-yekan" id="FAQ">
      <Title />
      <QuestionFlex />
      <ActionBox />
    </section>
  );
};

export default Container;
