const Navigation = (props) => {
  return (
    <ul className="flex flex-row-reverse space-x-9 text-right text-white text-lg font-bold justify-center items-center font-yekan">
      <button className="border border-spring-green rounded-[5px] w-32 h-10 text-spring-green text-base ml-9">
        نسخه ی نمایشی
      </button>
      <li className="text-spring-green">خانه</li>
      <li>خدمات واقعیت مجازی</li>
      <li>درباره ما</li>
      <li>تماس با ما</li>
      <li>قوانین و شرایط</li>
      <li>همکاری با ما</li>
    </ul>
  );
};

export default Navigation;
