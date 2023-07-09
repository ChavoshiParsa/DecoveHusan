import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import EmailInput from "./EmailInput";
import Links from "./Links";

const Footer = (props) => {
  return (
    <footer className="flex h-[420px] md:space-y-10 md:h-[450px] flex-col items-center md:items-end justify-between bg-blue-zodiac pb-[100px] pt-[45px] md:pt-[70px] md:pr-6 lg:pr-8 xl:pr-14">
      <div className="mb-12 flex flex-col-reverse items-center justify-end space-x-0 space-y-reverse md:mb-0 md:flex-row md:space-x-8 space-y-0 lg:space-x-20 xl:space-x-24">
        <ContactUs />
        <Links />
        <AboutUs />
      </div>

      <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-5">
        <EmailInput />
        <p className="text-center md:text-right font-yekan text-sm md:text-base font-medium xl:px-0 px-6 leading-8 text-white">
          کليه حقوق محصولات و محتوای اين سایت متعلق به هوسان می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </footer>
  );
};

export default Footer;
