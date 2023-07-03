const Navigation = (props) => {
  return (
    <ul className="flex flex-row-reverse items-center justify-center space-x-9 whitespace-nowrap text-right font-yekan text-lg font-bold text-white">
      <button className="ml-9 h-10 w-32 rounded-[5px] border border-spring-green text-base text-spring-green lg:block hidden">
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
