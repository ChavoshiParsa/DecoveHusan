import Container from "../about-us/Container";
import Footer from "../layout/footer/Footer";
import BottomNavbar from "../layout/header/BottomNavbar";
import Navbar from "../layout/header/Navbar";

const AboutUs = (props) => {
  return (
    <>
      <Navbar />
      <BottomNavbar />
      <section
        id="body"
        className="overflow-x-hidden bg-[#F5F5F5] px-20 text-right font-yekan pb-24"
      >
        <h3 className="py-12 text-xl font-bold text-dusty-gray">
          سیستم بصری ساز دِکووی / خدمات واقعیت مجازی
        </h3>
        <Container />
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;




