import Container from "../TakePhoto/Container";
import Header from "../TakePhoto/Header";
import Footer from "../layout/footer/Footer";
import BottomNavbar from "../layout/header/BottomNavbar";
import Navbar from "../layout/header/Navbar";

const TakePhoto = (props) => {
  return (
    <>
      <Navbar />
      <BottomNavbar />
      <section id="body" className="">
        <Header />
        <Container />
      </section>
      <Footer />
    </>
  );
};

export default TakePhoto;
