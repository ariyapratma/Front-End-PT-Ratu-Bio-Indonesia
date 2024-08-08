import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSectionMainContent from "../HeroSectionMainContent/HeroSectionMainContent";
import Flyer from "../Flyer/Flyer";
import HeroSectionCompany from "./HeroSectionCompany";
import Certificate from "../Certificate/Certificate";
import Service from "../Services/Service";
import HeroSectionVideo from "./HeroSectionVideo";
import ButtonSeeMore from "../ButtonSeeMore/ButtonSeeMore";
import Excellence from "../Excellence/Excellence";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";

function Home() {
  useEffect(() => {
    document.title = "Home | PT Ratu Bio Indonesia";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 mb-16">
        {" "}
        <HeroSectionMainContent />
        <Flyer />
        <HeroSectionCompany />
        <Certificate />
        <Service />
        <HeroSectionVideo />
        <ButtonSeeMore />
        <Excellence />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
