import { useState } from "react";

const AccordionBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((perv) => !perv);
  };
  return (
    <div className="font-yekan w-full" dir="rtl" >
      <div className="flex flex-row items-center justify-between mb-4" onClick={toggleHandler}>
        <p className="text-lg font-bold text-blue-zodiac">{props.title}</p>
        {isOpen ? <UpArrow /> : <DownArrow />}
      </div>
      <div
        className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen && "h-auto max-h-[700px]"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

const UpArrow = () => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.25L6.14286 1.75L11.2857 6.25"
        stroke="#989898"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const DownArrow = () => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2856 1.75L6.14279 6.25L0.99993 1.75"
        stroke="#989898"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AccordionBox;
