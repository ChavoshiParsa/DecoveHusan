import Background from "./Background";
import HeaderDescription from "./HeaderDescription";
import Lines from "./Lines";
import Navbar from "./Navbar";
import Phone from "./Phone";
import SliderAction from "./SliderActions";

const Header = (props) => {
  return (
    <header id="header" className="relative h-[780px]">
      <Background />
      <Lines />
      <Navbar />
      <HeaderDescription />
      <Phone />
      <SliderAction />
    </header>
  );
};

export default Header;
