import {
  DUMMY_PRODUCT_DATA as productData,
  imp,
} from "../../../assets/DummyData";
import ProductItem from "./ProductItem";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-4">
      {productData.map((item, index) => (
        <ProductItem
          src={imp(index + 1)}
          id={item.id}
          key={item.id}
          name={item.name}
          info={item.info}
          color={item.color}
          br={(index + 1) % 4 !== 0 ? "border-r" : ""}
          bb={productData.length - (index + 1) >= 4  ? "border-b" : ""}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
