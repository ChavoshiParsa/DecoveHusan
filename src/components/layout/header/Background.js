import backgroundImage from "../../../assets/Background.png";

const Background = (props) => {
  return (
    <img
      className="absolute w-screen -z-50"
      src={backgroundImage}
      alt="Background"
    />
  );
};

export default Background;
