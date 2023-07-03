import ProductsNameTab from "./ProductsNameTab";
import Title2 from "./Title2";

const Description2 = () => {
  return (
    <div className="mb-0 md:mb-16 flex flex-col items-center justify-between space-y-12 font-yekan font-bold">
      <Title2 />
      <ProductsNameTab />
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center space-x-1 text-dusty-gray">
          <span className="text-base md:text-lg"> کالا </span>
          <span className="text-2xl md:text-3xl"> ۳۴,۴۸۳ </span>
        </div>
        <h3 className="text-xl text-spring-green md:text-2xl">
          محصولات موجود برای کفپوش
        </h3>
      </div>
    </div>
  );
};

export default Description2;
