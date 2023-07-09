import { DUMMY_COLOR_CODES as colorCode } from "../../assets/DummyData";

const Colors = () => {
  return (
    <>
      <div className="grid w-full grid-cols-7 gap-1">
        {colorCode.map((item, index) => (
          <ColorItem key={"c" + index} id={"c" + index} color={item.code} />
        ))}
      </div>
    </>
  );
};

const ColorItem = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.1665" y="1" width="35" height="35" rx="5" fill={props.color} />
      {props.color === "#FFFFFF" && (
        <rect
          x="1.1665"
          y="1"
          width="35"
          height="35"
          rx="5"
          stroke="#989898"
          stroke-width="1.5"
        />
      )}
    </svg>
  );
};

export default Colors;
