import {
  DUMMY_DEMO_PRODUCTS as demoProducts,
  imp,
} from "../../assets/DummyData";
import ProductItem from "./ProductItem";

const ProductsContainer = (props) => {
  const view = props.view;
  let styles = "";

  if (view === "row") {
    styles = "flex flex-col justify-center space-y-2";
  }
  if (view === "grid") {
    styles = "grid grid-cols-3 gap-4";
  }
  if (view === "filter") {
    styles = "hidden";
  }

  return (
    <div className={styles + " "}>
      {demoProducts.map((item, index) => (
        <ProductItem
          id={"dp" + index}
          key={"dp" + index}
          src={imp(`demo-products/Product Image (${index % 15}).png`)}
          name={item.name}
          size={item.size}
          view={view}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
