import { useRef, useState } from "react";

const SlideTab = (props) => {
  const [view, setView] = useState("row");

  const rowHandler = () => {
    setView("row");
    props.passView("row");
  };
  const gridHandler = () => {
    setView("grid");
    props.passView("grid");
  };
  const filterHandler = () => {
    setView("filter");
    props.passView("filter");
  };

  const divRef = useRef();
  const goTopHandler = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className={view === "filter" ? "m-4 mb-8 ml-auto mt-5 block" : "hidden"}
        onClick={() => {
          setView("row");
          props.passView("row");
        }}
      >
        <CloseIcon />
      </button>
      <div
        className={
          view === "filter"
            ? "hidden"
            : " relative mb-6 flex flex-col items-center justify-center font-yekan"
        }
        ref={divRef}
      >
        <div className="mb-6 flex w-full items-center justify-start">
          <button
            className={`${
              view === "row" ? "bg-spring-green" : "bg-[#FAFAFA]"
            } rounded-lg p-2.5`}
            onClick={rowHandler}
          >
            <RowIcon fill={view !== "row" ? "#989898" : "#FFFFFF"} />
          </button>
          <button
            className={`${
              view === "grid" ? "bg-spring-green" : "bg-[#FAFAFA]"
            } rounded-lg p-2.5`}
            onClick={gridHandler}
          >
            <GridIcon fill={view !== "grid" ? "#989898" : "#FFFFFF"} />
          </button>
          <select
            className="ml-auto w-28 text-2xl font-black text-blue-zodiac outline-none"
            dir="rtl"
          >
            <option>کف</option>
            <option>روکابینتی</option>
            <option>دیوار</option>
          </select>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center space-y-3">
          <SearchIcon styles={"absolute right-4 top-6"} />
          <input
            className="w-full rounded-md bg-[#F5F5F5] px-12 pb-3 pt-3 text-right text-lg outline-none"
            placeholder="جستجو ..."
            type="text"
            dir="rtl"
          />
          <button
            className="flex w-full items-center justify-between rounded-md border-2 border-blue-zodiac px-5 py-2"
            dir="rtl"
            onClick={filterHandler}
          >
            <FilterIcon />
            <label className="mr-4 text-xl font-bold text-blue-zodiac">
              فیلتر ها
            </label>
            <div className="mr-auto flex h-10 w-10 items-center justify-center rounded bg-[#2BEE841A] text-xl font-bold text-spring-green ">
              ۴
            </div>
          </button>
        </div>
        <button
          className="fixed bottom-2 right-32 z-30 flex items-center text-base font-bold text-blue-zodiac"
          onClick={goTopHandler}
        >
          <GoTopIcon />
          بازگشت به بالا
        </button>
      </div>
    </>
  );
};

const GoTopIcon = () => {
  return (
    <svg
      className="mr-5"
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35718 5.75L6.50003 1.25L11.6429 5.75"
        stroke="#032068"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const RowIcon = (props) => {
  const color = props.fill;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
        fill={color}
      />
      <path
        d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
        fill={color}
      />
    </svg>
  );
};

const GridIcon = (props) => {
  const color = props.fill;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
        fill={color}
      />
      <path
        d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
        fill={color}
      />
      <path
        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
        fill={color}
      />
      <path
        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
        fill={color}
      />
    </svg>
  );
};

const SearchIcon = (props) => {
  return (
    <svg
      className={props.styles}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 22L20 20"
        stroke="#989898"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const FilterIcon = (props) => {
  return (
    <svg
      className={props.styles}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        stroke="#032068"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M6 12H18"
        stroke="#032068"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M10 17H14"
        stroke="#032068"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

const CloseIcon = (props) => {
  return (
    <svg
      className={props.styles}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7829 9.98464L19.6491 2.11839C19.8768 1.88264 20.0028 1.56688 20 1.23914C19.9971 0.911392 19.8656 0.597876 19.6339 0.366116C19.4021 0.134356 19.0886 0.00289528 18.7609 4.72533e-05C18.4331 -0.00280077 18.1174 0.123192 17.8816 0.35089L10.0154 8.21714L2.14911 0.35089C1.91336 0.123192 1.59761 -0.00280077 1.26986 4.72533e-05C0.942113 0.00289528 0.628597 0.134356 0.396837 0.366116C0.165077 0.597876 0.033616 0.911392 0.030768 1.23914C0.02792 1.56688 0.153913 1.88264 0.381611 2.11839L8.24786 9.98464L0.381611 17.8509C0.262223 17.9662 0.166994 18.1041 0.101483 18.2566C0.0359717 18.4091 0.00148947 18.5732 4.71955e-05 18.7391C-0.00139507 18.9051 0.0302324 19.0697 0.0930835 19.2233C0.155935 19.377 0.248751 19.5165 0.366117 19.6339C0.483483 19.7512 0.623047 19.8441 0.776668 19.9069C0.930288 19.9698 1.09489 20.0014 1.26086 20C1.42684 19.9985 1.59086 19.964 1.74337 19.8985C1.89587 19.833 2.0338 19.7378 2.14911 19.6184L10.0154 11.7521L17.8816 19.6184C18.1174 19.8461 18.4331 19.9721 18.7609 19.9692C19.0886 19.9664 19.4021 19.8349 19.6339 19.6032C19.8656 19.3714 19.9971 19.0579 20 18.7301C20.0028 18.4024 19.8768 18.0866 19.6491 17.8509L11.7829 9.98464Z"
        fill="#032068"
      />
    </svg>
  );
};
export default SlideTab;
