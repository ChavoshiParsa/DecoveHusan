import backgroundImage from "../../../assets/Background.png";

const Background = (props) => {
  return (
    <img
      className="absolute -z-50 object-top h-[750px] w-full object-none"
      src={backgroundImage}
      alt="Background"
    />
  );
};

export default Background;
