import { DUMMY_FAQ_DATA as faqData } from "../../assets/DummyData";
import QuestionItem from "./QuestionItem";

const QuestionFlex = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2.5 mb-5">
      {faqData.map((item, index) => (
        <QuestionItem
          question={item.question}
          answer={item.answer}
          key={"q" + index}
        />
      ))}
    </div>
  );
};

export default QuestionFlex;
