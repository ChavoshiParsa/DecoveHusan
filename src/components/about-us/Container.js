import Description from "./Description";
import SectionTitle from "./SectionTitle";

const Container = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 rounded-md bg-white px-16 py-20">
      <SectionTitle />
      <Description />
    </div>
  );
};

export default Container;
