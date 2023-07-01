const ContactUs = (props) => {
  return (
    <div className="flex flex-col items-end justify-between space-y-3 font-yekan text-white">
      <h2 className="text-xl font-bold">ارتباط با ما</h2>
      <ul className="w-[400px] space-y-2.5 text-right">
        <li className="flex items-center justify-between">
          <p className="text-base font-medium text-white">info@husanco.ir</p>
          <a href="/" className="ml-auto">
            :ایمیل
          </a>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-base font-medium text-white">
            ۰۴۱۳-۳۸۳۰۷۲۸ - ۰۹۱۲۷۹۸۳۵۶۹
          </p>
          <a href="/" className="ml-auto">
            :تلفن
          </a>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-base font-medium text-white">
            تبریز - خ ۲۹ بهمن - دانشگاه تبریز - مرکز رشد
          </p>
          <a href="/" className="ml-auto">
            :آدرس
          </a>
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

export default ContactUs;
