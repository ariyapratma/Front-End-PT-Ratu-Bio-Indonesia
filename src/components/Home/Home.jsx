import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CardProduct from "../CardProduct/CardProduct";
import Footer from "../Footer/Footer";
import ButtonSeeMore from "../ButtonSeeMore/ButtonSeeMore";
import Certificate from "../Certificate/Certificate";
import Excellence from "../Excellence/Excellence";
import Review from "../Review/Review";
import ImageGallery from "../HeroSection/HeroSection";

function Home() {
  useEffect(() => {
    document.title = "Home | PT Ratu Bio Indonesia";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 mb-16">
        {" "}
        <ImageGallery />
        <CardProduct />
        <ButtonSeeMore />
        <Certificate />
        <Excellence />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
