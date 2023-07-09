import Rules from "./Rules";
import Title from "./Title";

const Container = () => {
  return (
    <div
      className="flex flex-col items-start justify-center rounded-md bg-white px-16 py-20"
      dir="rtl"
    >
      <Title/>
      <Rules/>
    </div>
  );
};

export default Container;
