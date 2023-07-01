const Lines = (props) => {
  return (
    <div className="absolute -z-40 w-full flex flex-row justify-between items-center">
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
};

const Line = (props) => {
  return <div className="w-[1px] h-[770px] bg-[#FFFFFF1A]"></div>;
};

export default Lines;
