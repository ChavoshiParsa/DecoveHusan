import { useEffect, useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMd, setIsMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        setIsMd(false);
      } else {
        setIsMd(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const leftArrowHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const rightArrowHandler = () => {
    if (currentPage !== 20) {
      setCurrentPage(currentPage + 1);
    }
  };

  const numberPageHandler = (event) => {
    setCurrentPage(pages.findIndex((e) => e === event.target.innerText) + 1);
  };

  const display = (index) => {
    index = index + 1;
    let display;
    if (isMd) {
      if (Math.abs(currentPage - index) >= 3) {
        display = "hidden";
      } else {
        display = "flex";
      }

      if (currentPage === 1 || currentPage === 2) {
        if (index === 4 || index === 5) {
          display = "flex";
        }
      }
      if (currentPage === 20 || currentPage === 19) {
        if (index === 17 || index === 16) {
          display = "flex";
        }
      }
    } else {
      if (Math.abs(currentPage - index) >= 2) {
        display = "hidden";
      } else {
        display = "flex";
      }

      if (currentPage === 1) {
        if (index === 3) {
          display = "flex";
        }
      }
      if (currentPage === 20) {
        if (index === 18) {
          display = "flex";
        }
      }
    }

    return display;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        pageNumber={<LeftArrow />}
        generalColor={"bg-[#F5F5F5] text-blue-zodiac"}
        display={"flex"}
        action={leftArrowHandler}
      />
      {pages.map((item, index) => (
        <Button
          id={`b${index}`}
          key={`b${index}`}
          value={index + 1}
          pageNumber={item}
          generalColor={
            index + 1 === currentPage
              ? "bg-spring-green text-white"
              : "bg-[#F5F5F5] text-blue-zodiac"
          }
          // display={Math.abs(currentPage - (index + 1)) >= 5 ? "hidden" : "flex"}
          display={display(index)}
          action={numberPageHandler}
        />
      ))}
      <Button
        pageNumber={<RightArrow />}
        generalColor={"bg-[#F5F5F5] text-blue-zodiac"}
        display={"flex"}
        action={rightArrowHandler}
      />
    </div>
  );
};

const Button = (props) => {
  return (
    <button
      className={`h-10 w-10 items-center justify-center rounded text-center font-yekan text-xl font-medium md:h-12 md:w-12 md:text-2xl ${props.generalColor} ${props.display}`}
      onClick={props.action}
    >
      {props.pageNumber}
    </button>
  );
};

const LeftArrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.40625 12.5L1.59375 7L6.40625 1.5"
        stroke="#032068"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.59375 12.5L6.40625 7L1.59375 1.5"
        stroke="#032068"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const pages = [
  "۱",
  "۲",
  "۳",
  "۴",
  "۵",
  "۶",
  "۷",
  "۸",
  "۹",
  "۱۰",
  "۱۱",
  "۱۲",
  "۱۳",
  "۱۴",
  "۱۵",
  "۱۶",
  "۱۷",
  "۱۸",
  "۱۹",
  "۲۰",
];

export default Pagination;
