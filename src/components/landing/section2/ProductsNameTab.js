const ProductsNameTab = () => {
  return (
    <div className="w-[300px] overflow-hidden sm:w-[630px] md:w-[700px] lg:w-[1000px] xl:w-[1140px]">
      <ul className="flex items-center justify-center space-x-10 whitespace-nowrap text-2xl">
        <Item name="کاسه توالت" blur="blur-3" />
        <Item name="سنگ کاری" blur="blur-2" />
        <Item name="کاشی کاری" blur="blur-1" />
        <Item name="کاغذ دیواری" />
        <Item name="کفپوش" color="spring-green" />
        <Item name="سرامیک" />
        <Item name="موکت" />
        <Item name="فرش" blur="blur-1" />
        <Item name="روشویی" blur="blur-2" />
        <Item name="دوش حمام" blur="blur-3" />
      </ul>
    </div>
  );
};

const Item = (props) => {
  return (
    <li className={`text-${props.color || "blue-zodiac"} ${props.blur}`}>
      {props.name}
    </li>
  );
};

export default ProductsNameTab;
