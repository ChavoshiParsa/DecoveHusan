const SliderAction = (props) => {
  return (
    <div className="absolute top-[686px] left-[1178px] flex flex-col items-end justify-between w-[112px] h-[65px]">
      <div className="flex space-x-1">
        <ArrowButton>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton>
          <RightArrow />
        </ArrowButton>
      </div>
      <SlidePointer />
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
    <button className="border-[1.5px] border-white p-2.5">
      {props.children}
    </button>
  );
};

const SlidePointer = (props) => {
  return (
    <div className="flex space-x-1">
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Rectangle />
    </div>
  );
};

const Ellipse = (props) => {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.5" cy="3.5" r="3.5" fill="white" fillOpacity="0.3" />
    </svg>
  );
};

const Rectangle = (props) => {
  return (
    <svg
      width="40"
      height="7"
      viewBox="0 0 40 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="7" rx="3" fill="#2BEE84" />
    </svg>
  );
};

export default SliderAction;
