import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = (props) => {
  return (
    <nav className="flex h-28 items-center justify-between px-20">
      <Logo />
      <Navigation />
    </nav>
  );
};

export default Navbar;
