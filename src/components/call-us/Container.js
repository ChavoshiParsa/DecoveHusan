import CallForm from "./CallForm";
import CallInfo from "./CallInfo";

const Container = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-28 rounded-md bg-white px-16 py-20">
      <CallForm />
      <CallInfo />
    </div>
  );
};

export default Container;
