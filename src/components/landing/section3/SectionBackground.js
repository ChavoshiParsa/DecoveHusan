import backgroundImage from "../../../assets/SectionBackground.png";

const SectionBackground = (props) => {
  return (
    <img
      className="absolute -z-40 top-0"
      src={backgroundImage}
      alt="Background"
    />
  );
};

export default SectionBackground;
