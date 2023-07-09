import { useState } from "react";

const ProductItem = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // const [isSelected, setIsSelected] = useState(false);

  const v = props.view === "grid";

  return (
    <div
      className={`${
        false ? "border-2 border-spring-green" : !v && "border border-[#E0E0E0]"
      } ${
        v
          ? "border-[#E0E0E0] hover:border-2 m-1"
          : "relative flex flex-row items-center justify-end p-3"
      } rounded-lg font-yekan`}
      // onClick={() => {
      //   setIsSelected((prev) => !prev);
      // }}
    >
      <HeartIcon
        styles={`absolute left-2 top-4 cursor-pointer z-10 ${v && " hidden"}`}
        fill={isFavorite ? "#EE2B2B" : "none"}
        stroke={isFavorite ? "#EE2B2B" : "#989898"}
        onClick={() => {
          setIsFavorite((prev) => !prev);
        }}
      />
      <div
        className={`${
          !v && "flex flex-row items-center justify-end space-x-4"
        }`}
      >
        <div
          className={`flex flex-col items-end justify-center text-right ${
            v && " hidden"
          }`}
        >
          <h2 className="text-base font-black text-blue-zodiac">
            {props.name}
          </h2>
          <h3 className="text-sm font-medium text-dusty-gray">
            سایز: {props.size}
          </h3>
        </div>
        <img
          src={props.src}
          width={v ? "95px" : "110px"}
          height={v ? "95px" : "110px"}
          alt="a product of floor"
        />
      </div>
    </div>
  );
};

const HeartIcon = (props) => {
  return (
    <svg
      className={props.styles}
      onClick={props.onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5166 17.3417C10.2333 17.4417 9.76663 17.4417 9.48329 17.3417C7.06663 16.5167 1.66663 13.075 1.66663 7.24168C1.66663 4.66668 3.74163 2.58334 6.29996 2.58334C7.81663 2.58334 9.15829 3.31668 9.99996 4.45001C10.8416 3.31668 12.1916 2.58334 13.7 2.58334C16.2583 2.58334 18.3333 4.66668 18.3333 7.24168C18.3333 13.075 12.9333 16.5167 10.5166 17.3417Z"
        stroke={props.stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default ProductItem;
