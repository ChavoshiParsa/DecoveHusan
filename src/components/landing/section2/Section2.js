import Description2 from "./Description2";
import DotPattern from "./DotPattern";
import Pagination from "./Pagination";
import ProductGrid from "./ProductsGrid";

const Section2 = (props) => {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-12 mb-24 md:space-y-16">
      <DotPattern />
      <Description2 />
      <ProductGrid />
      <Pagination />
    </section>
  );
};

export default Section2;
