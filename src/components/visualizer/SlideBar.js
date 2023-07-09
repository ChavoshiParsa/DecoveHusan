import { useState } from "react";
import SlideTab from "./SlideTab";
import ProductsContainer from "./ProductsContainer";
import FilterBar from "./FiltersBar";

const SlideBar = () => {
  const [view, setView] = useState("row");
  const handlePass = (view) => {
    setView(view);
  };

  return (
    <div className={`my-4 ml-5 pl-2 mr-1 max-h-[780px] basis-1/4 overflow-y-scroll bg-white pr-1 `}>
      <SlideTab passView={handlePass} />
      <ProductsContainer view={view} />
      <FilterBar view={view} />
    </div>
  );
};

export default SlideBar;
