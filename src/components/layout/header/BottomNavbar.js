import { cloneElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  const [isMain, setIsMain] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollHeight <= 360) {
        setIsMain(true);
      } else {
        setIsMain(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-0 h-16 bg-[#F5F5F5] transition md:hidden z-50 drop-shadow ${
        isMain ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <ul className="flex w-screen list-none flex-row items-center justify-between px-6 sm:px-12">
        <NavItem link="more" content="بیشتر">
          <MoreIcon />
        </NavItem>
        <NavItem link="about-us" content="درباره ما">
          <PeopleIcon />
        </NavItem>
        <NavItem link="virtual-reality-services" margin="-mt-8">
          <CameraIcon />
        </NavItem>
        <NavItem link="call-us" content="تماس با ما">
          <CallIcon />
        </NavItem>
        <NavItem link="home" content="خانه">
          <HomeIcon />
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = (props) => {
  const [textColor, setTextColor] = useState("spring-green");

  const clonedChild = cloneElement(props.children, {
    color: textColor,
  });

  return (
    <li>
      <NavLink
        to={"/" + props.link}
        className={(navData) => {
          navData.isActive
            ? setTextColor("spring-green")
            : setTextColor("blue-zodiac");
          return `flex flex-col items-center justify-center space-y-1.5 ${props.margin}`;
        }}
        color={textColor}
      >
        {clonedChild}
        <span
          className={`whitespace-nowrap text-center font-yekan text-sm font-bold text-${textColor}`}
        >
          {props.content}
        </span>
      </NavLink>
    </li>
  );
};

const MoreIcon = (props) => {
  let color = props.color === "spring-green" ? "#2BEE84" : "#032068";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.9965 12H16.0054"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9955 12H12.0045"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.99451 12H8.00349"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const PeopleIcon = (props) => {
  let color = props.color === "spring-green" ? "#2BEE84" : "#032068";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9704 14.44C18.3404 14.67 19.8504 14.43 20.9104 13.72C22.3204 12.78 22.3204 11.24 20.9104 10.3C19.8404 9.59001 18.3104 9.35 16.9404 9.59"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.00043 14.44C5.63043 14.67 4.12043 14.43 3.06043 13.72C1.65043 12.78 1.65043 11.24 3.06043 10.3C4.13043 9.59001 5.66043 9.35 7.03043 9.59"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.47 11.9101 9.47C13.3401 9.47 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.08973 17.78C7.67973 18.72 7.67973 20.26 9.08973 21.2C10.6897 22.27 13.3097 22.27 14.9097 21.2C16.3197 20.26 16.3197 18.72 14.9097 17.78C13.3197 16.72 10.6897 16.72 9.08973 17.78Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CameraIcon = () => {
  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="84" height="84" rx="42" fill="#2BEE84" />
      <path
        d="M41.7602 57H52.2402C55.0002 57 56.1002 55.31 56.2302 53.25L56.7502 44.99C56.8902 42.83 55.1702 41 53.0002 41C52.3902 41 51.8302 40.65 51.5502 40.11L50.8302 38.66C50.3702 37.75 49.1702 37 48.1502 37H45.8602C44.8302 37 43.6302 37.75 43.1702 38.66L42.4502 40.11C42.1702 40.65 41.6102 41 41.0002 41C38.8302 41 37.1102 42.83 37.2502 44.99L37.7702 53.25C37.8902 55.31 39.0002 57 41.7602 57Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.5 43H48.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47 53C48.79 53 50.25 51.54 50.25 49.75C50.25 47.96 48.79 46.5 47 46.5C45.21 46.5 43.75 47.96 43.75 49.75C43.75 51.54 45.21 53 47 53Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="5"
        y="5"
        width="84"
        height="84"
        rx="42"
        stroke="#2BEE84"
        stroke-opacity="0.5"
        stroke-width="10"
      />
    </svg>
  );
};

const CallIcon = (props) => {
  let color = props.color === "spring-green" ? "#2BEE84" : "#032068";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

const HomeIcon = (props) => {
  let color = props.color === "spring-green" ? "#2BEE84" : "#032068";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0402 6.82L14.2802 2.79C12.7102 1.69 10.3002 1.75 8.79023 2.92L3.78023 6.83C2.78023 7.61 1.99023 9.21 1.99023 10.47V17.37C1.99023 19.92 4.06023 22 6.61023 22H17.3902C19.9402 22 22.0102 19.93 22.0102 17.38V10.6C22.0102 9.25 21.1402 7.59 20.0402 6.82ZM12.7502 18C12.7502 18.41 12.4102 18.75 12.0002 18.75C11.5902 18.75 11.2502 18.41 11.2502 18V15C11.2502 14.59 11.5902 14.25 12.0002 14.25C12.4102 14.25 12.7502 14.59 12.7502 15V18Z"
        fill={color}
      />
    </svg>
  );
};

export default BottomNavbar;
