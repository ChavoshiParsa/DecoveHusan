import AccordionBox from "./AccordionBox";
import Colors from "./Colors";
import Materials from "./Materials";
import ProductFamily from "./ProductFamily";

const FilterBar = (props) => {
  const v = props.view === "filter";
  return (
    <div
      className={`${
        !v && "hidden"
      } mr-4 flex flex-col items-center justify-center space-y-5`}
      dir="rtl"
    >
      <div className="flex w-full flex-row items-center justify-between font-yekan">
        <h2 className="text-[26px] font-black text-blue-zodiac">فیلتر ها</h2>
        <button
          className="text-base font-bold text-blue-zodiac"
          onClick={() => {}}
        >
          پاک کردن فیلتر ها
        </button>
      </div>
      <div className="name filter"></div>
      <Line />
      <AccordionBox title="خانواده محصولات">
        <ProductFamily />
      </AccordionBox>
      <Line />
      <AccordionBox title="مواد">
        <Materials />
      </AccordionBox>
      <Line />
      <AccordionBox title="مجموعه"></AccordionBox>
      <Line />
      <AccordionBox title="رنگ">
        <Colors />
      </AccordionBox>
      <Line />
      <AccordionBox title="ویژگی"></AccordionBox>
      <Line />
      <AccordionBox title="نام تجاری"></AccordionBox>
    </div>
  );
};

const Line = () => {
  return <div className="w-full border-t border-[#9898984D]" />;
};

export default FilterBar;
