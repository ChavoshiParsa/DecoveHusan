import {
  imp,
  DUMMY_PRODUCT_FAMILY as productData,
} from "../../assets/DummyData";

const ProductFamily = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {productData.map((item, index) => (
        <ProductItem
          src={imp(`product-family/Product Family Image (${index}).png`)}
          name={item.name}
        />
      ))}
    </div>
  );
};

const ProductItem = (props) => {
  return (
    <div className="flex w-full flex-row items-center justify-start">
      <img src={props.src} alt="product family" />
      <h3 className="mr-3 text-base font-bold text-dusty-gray">{props.name}</h3>
      <input type="checkbox" className="mr-auto accent-spring-green" />
    </div>
  );
};

export default ProductFamily;
