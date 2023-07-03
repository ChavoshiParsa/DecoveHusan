import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = (props) => {
  return (
    <nav className="hidden items-center justify-center py-12 md:flex lg:space-x-[125px] xl:space-x-[310px]">
      <Logo />
      <Navigation />
    </nav>
  );
};

export default Navbar;
