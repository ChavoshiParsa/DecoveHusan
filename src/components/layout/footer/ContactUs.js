const ContactUs = (props) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-3 font-yekan text-white md:items-end">
      <h2 className="text-lg font-bold lg:text-xl">ارتباط با ما</h2>
      <ul className="w-[300px] space-y-1.5 text-center md:text-right lg:w-[400px] lg:space-y-2.5">
        <li className="flex items-center justify-between">
          <p className="text-sm font-medium text-white lg:text-base">
            info@husanco.ir
          </p>
          <p className="ml-auto">:ایمیل</p>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-medium text-white lg:text-base">
            ۰۴۱۳-۳۸۳۰۷۲۸ - ۰۹۱۲۷۹۸۳۵۶۹
          </p>
          <p className="ml-auto">:تلفن</p>
          <DiscIcon />
        </li>
        <li className="flex items-center justify-between">
          <p className="text-sm font-medium text-white lg:text-base">
            تبریز - خ ۲۹ بهمن - دانشگاه تبریز - مرکز رشد
          </p>
          <p className="ml-auto">:آدرس</p>
          <DiscIcon />
        </li>
      </ul>
    </div>
  );
};

const DiscIcon = () => {
  return (
    <svg
      className="ml-1.5 lg:ml-2"
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
