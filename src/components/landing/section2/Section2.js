import Description2 from "./Description2";
import DotPattern from "./DotPattern";
import Pagination from "./Pagination";
import ProductGrid from "./ProductsGrid";

const Section2 = (props) => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center border-t border-t-[#E0E0E0] space-y-16 mb-32">
      <DotPattern />
      <Description2 />
      <ProductGrid />
      <Pagination />
    </section>
  );
};

export default Section2;
