import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import EmailInput from "./EmailInput";
import Links from "./Links";

const Footer = (props) => {
  return (
    <footer className="flex h-[504px] flex-col items-end justify-between bg-blue-zodiac pb-[100px] pt-[70px] pr-24">
      <div className="flex flex-row items-center justify-end space-x-28">
        <ContactUs />
        <Links />
        <AboutUs />
      </div>

      <div className="flex justify-between items-end flex-col space-y-5">
        <EmailInput />
        <p className="text-right font-yekan text-base font-medium text-white">
          کليه حقوق محصولات و محتوای اين سایت متعلق به هوسان می باشد و هر گونه
          کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
        </p>
      </div>
    </footer>
  );
};

export default Footer;
