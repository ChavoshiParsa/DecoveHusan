const ProductItem = (props) => {
  return (
    <div
      className={`relative flex w-[280px] flex-col items-center justify-center space-y-5 border-[#E0E0E0] pb-5 font-yekan ${props.br} ${props.bb}`}
    >
      <ProductColor color={props.color} />
      <img className="w-60 rounded-md" src={props.src} alt="Parquet" />
      <div className="flex flex-col items-center justify-between space-y-1.5">
        <h3 className="text-base font-bold text-blue-zodiac ">{props.name}</h3>
        <p className="text-sm font-medium text-dusty-gray">{props.info}</p>
      </div>
      <a href="/" className="text-sm font-bold text-spring-green">
        همین الان امتحان کن
      </a>
    </div>
  );
};

const ProductColor = (props) => {
  return (
    <svg
      className="absolute right-2.5 top-2.5"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="18" rx="9" fill="white" />
      <circle cx="9" cy="9" r="6" fill={props.color} />
    </svg>
  );
};

export default ProductItem;
