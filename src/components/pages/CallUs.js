import Container from "../call-us/Container";
import Footer from "../layout/footer/Footer";
import BottomNavbar from "../layout/header/BottomNavbar";
import Navbar from "../layout/header/Navbar";

const CallUs = (props) => {
  return (
    <>
      <Navbar />
      <BottomNavbar />
      <section
        id="body"
        className="overflow-x-hidden bg-[#F5F5F5] px-20 pb-24 text-right font-yekan"
      >
        <h3 className="py-12 text-xl font-bold text-dusty-gray">
          سیستم بصری ساز دِکووی / تماس با ما
        </h3>
        <Container />
      </section>
      <Footer />
    </>
  );
};

export default CallUs;
