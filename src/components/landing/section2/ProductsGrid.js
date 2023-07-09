import { useEffect, useState } from "react";
import {
  DUMMY_PRODUCT_DATA as productData,
  imp,
} from "../../../assets/DummyData";
import ProductItem from "./ProductItem";

const ProductGrid = () => {
  let cols = 4;
  let size = 12;
  const windowWidth = window.innerWidth;
  if (windowWidth <= 767) {
    cols = 2;
    size = 8;
  } else if (767 < windowWidth && windowWidth <= 1280) {
    cols = 3;
    size = 9;
  }
  const [gridCols, setGridCols] = useState(cols);
  const [reducedSize, setReducedSize] = useState(size);

  function resizeArray(originalArray, newSize) {
    let newArray = originalArray.slice(0, newSize);
    return newArray;
  }

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setGridCols(2);
        setReducedSize(8);
      } else if (767 < windowWidth && windowWidth <= 1280) {
        setGridCols(3);
        setReducedSize(9);
      } else {
        setGridCols(4);
        setReducedSize(12);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {resizeArray(productData, reducedSize).map((item, index) => (
        <ProductItem
          src={imp(`products/Product (${index + 1}).png`)}
          id={item.id}
          key={item.id}
          name={item.name}
          info={item.info}
          color={item.color}
          br={(index + 1) % gridCols !== 0 ? "border-r" : ""}
          bb={reducedSize - (index + 1) >= gridCols ? "border-b" : ""}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
