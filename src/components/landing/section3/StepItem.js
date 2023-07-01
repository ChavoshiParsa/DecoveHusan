const StepItem = (props) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-16 font-yekan font-bold">
      {props.children}
      <div className="flex">
        <p className="text-2xl text-blue-zodiac">{props.text}</p>
        <span className="text-xl text-spring-green">{props.number}</span>
      </div>
    </div>
  );
};

export default StepItem;
