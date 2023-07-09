import { NavLink, useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const navigate = useNavigate();

  return (
    <ul className="flex flex-row-reverse items-center justify-center space-x-9 whitespace-nowrap text-right font-yekan text-lg font-bold">
      <button
        className={`ml-9 hidden h-10 w-32 rounded-[5px] border border-spring-green text-base text-spring-green ${
          props.demoButton ? "hidden" : "lg:block"
        }`}
        onClick={() => {
          navigate("/visualizer");
        }}
      >
        نسخه ی نمایشی
      </button>
      <NavItem type={props.type} link="home" content="خانه" />
      <NavItem
        type={props.type}
        link="virtual-reality-services"
        content="خدمات واقعیت مجازی"
      />
      <NavItem type={props.type} link="about-us" content="درباره ما" />
      <NavItem type={props.type} link="call-us" content="تماس با ما" />
      <NavItem
        type={props.type}
        link="terms-and-conditions"
        content="قوانین و شرایط"
      />
      <NavItem type={props.type} link="work-with-us" content="همکاری با ما" />
    </ul>
  );
};

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        to={"/" + props.link}
        className={(navData) =>
          navData.isActive
            ? "text-spring-green"
            : `${props.type ? "text-white" : "text-blue-zodiac"}`
        }
      >
        {props.content}
      </NavLink>
    </li>
  );
};

export default Navigation;
