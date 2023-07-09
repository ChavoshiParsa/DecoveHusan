const Links = (props) => {
  return (
    <div className="hidden flex-col items-end justify-between space-y-3 font-yekan text-white xl:flex">
      <h2 className="whitespace-nowrap text-right text-xl font-bold">
        بخش های سایت
      </h2>
      <ul className="space-y-2.5 text-right">
        <li className="flex items-center justify-end">
          <a href="/">خدمات ما</a>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-end">
          <a href="/">محصولات ما</a>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-end">
          <a href="/">تماس با ما</a>
          <DiscIcon />
        </li>
      </ul>
    </div>
  );
};

const DiscIcon = () => {
  return (
    <svg
      className="ml-2"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.5" cy="3.33252" r="3" fill="#2BEE84" />
    </svg>
  );
};

export default Links;
