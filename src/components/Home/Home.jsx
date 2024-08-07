import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSectionOwner from "./HeroSectionOwner";
import JourneyBioQueen from "./JourneyBioQueen";
import Footer from "../Footer/Footer";
import ButtonSeeMore from "../ButtonSeeMore/ButtonSeeMore";
import Certificate from "../Certificate/Certificate";
import Excellence from "../Excellence/Excellence";
import Review from "../Review/Review";
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  useEffect(() => {
    document.title = "Home | PT Ratu Bio Indonesia";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 mb-16">
        {" "}
        <HeroSection />
        <HeroSectionOwner />
        <Certificate />
        <JourneyBioQueen />
        <ButtonSeeMore />
        <Excellence />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
