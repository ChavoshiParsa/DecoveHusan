import { useState } from "react";

const QuestionItem = (props) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const toggleHandler = () => {
    setIsAnswerShown((perv) => !perv);
  };

  return (
    <div
      className={`flex w-[1140px] flex-col items-start justify-center space-y-3.5 
      rounded-md border-r-[6px] border-spring-green bg-[#F7F7F8] px-8 pt-7 pb-4 text-right `}
      dir="rtl"
      onClick={toggleHandler}
    >
      <div className="flex w-[1050px] flex-row items-center justify-between">
        <p className="text-xl font-medium text-blue-zodiac">{props.question}</p>
        {isAnswerShown ? <MinusIcon /> : <AddIcon />}
      </div>
      <p
        className={`max-h-0 overflow-hidden text-lg font-medium text-dusty-gray transition-all duration-700 ease-in-out ${
          isAnswerShown && "h-auto max-h-20"
        }`}
      >
        {props.answer}
      </p>
    </div>
  );
};

const AddIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        stroke="#032068"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="#032068"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default QuestionItem;
