import backgroundImage from "../../../assets/SectionBackground.png";

const SectionBackground = (props) => {
  return (
    <img
      className="absolute top-0 -z-40 h-[440px] lg:h-[645px] object-cover"
      src={backgroundImage}
      alt="Background"
    />
  );
};

export default SectionBackground;
