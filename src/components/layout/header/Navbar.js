import Logo from "./Logo";
import Navigation from "./Navigation";

const Navbar = (props) => {
  return (
    <nav
      className={`${
        !props.type ? "bg-white" : "mb-12"
      } hidden items-center justify-center py-6 drop-shadow-md md:flex lg:space-x-[125px] xl:space-x-[310px]`}
    >
      <Logo />
      <Navigation type={props.type} demoButton={props.demoButton} />
    </nav>
  );
};

export default Navbar;
