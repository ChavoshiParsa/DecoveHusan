import Background from "./Background";
import BottomNavbar from "./BottomNavbar";
import HeaderDescription from "./HeaderDescription";
import Lines from "./Lines";
import Navbar from "./Navbar";
import Phone from "./Phone";

const Header = (props) => {
  return (
    <header
      id="header"
      className="relative flex flex-col items-center justify-start h-[960px] md:h-auto"
    >
      <Background />
      <Lines />
      <Navbar type="main"/>
      <BottomNavbar />
      <div className="mx-5 mt-14 flex flex-col-reverse items-center justify-center space-y-12 space-y-reverse md:mx-10 md:mt-[60px] md:flex-row md:items-start md:space-x-20 ">
        <Phone />
        <HeaderDescription />
      </div>
    </header>
  );
};

export default Header;
