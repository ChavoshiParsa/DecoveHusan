import { useState } from "react";

const SliderAction = (props) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const leftHandler = () => {
    if (currentSlide < 7) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(1);
    }
  };
  const rightHandler = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(7);
    }
  };

  return (
    <div className="hidden flex-col items-end justify-start space-y-2 xl:flex">
      <div className="flex space-x-1">
        <ArrowButton onClick={leftHandler}>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton onClick={rightHandler}>
          <RightArrow />
        </ArrowButton>
      </div>
      <SlidePointer slideNumber={currentSlide} />
    </div>
  );
};

const RightArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4297 5.93L20.4997 12L14.4297 18.07"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57031 5.93L3.50031 12L9.57031 18.07"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 12H3.67"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowButton = (props) => {
  return (
    <button
      className="border-[1.5px] border-white p-2.5"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

const SlidePointer = (props) => {
  /* const pointerFunction = () => {
    let pointer = [];
    for (let i = 1; i <= 7; i++) {
      if (i === props.slideNumber) {
        pointer.push(
          <ShapePointer className="w-[40px] bg-spring-green" />
        );
      } else {
        pointer.push(
          <ShapePointer className="w-[7px] bg-[#FFFFFF4D]" />
        );
      }
    }
    return pointer;
  };  */

  const mainClass = "bg-spring-green w-[40px]";
  const minor = "bg-[#FFFFFF4D] w-[7px]";

  return (
    <div className="flex flex-row-reverse space-x-1 space-x-reverse">
      <ShapePointer className={props.slideNumber === 1 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 2 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 3 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 4 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 5 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 6 ? mainClass : minor}/>
      <ShapePointer className={props.slideNumber === 7 ? mainClass : minor}/>
    </div>
  );
};

const ShapePointer = (props) => {
  return <div className={`${props.className} h-[7px] rounded-full transition-colors duration-500 ease-out`}></div>;
};

export default SliderAction;
