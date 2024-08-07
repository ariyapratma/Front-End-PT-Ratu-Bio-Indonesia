import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import AboutUsSection from "./AboutUsSection";
import HeroVisionMision from "../HeroVisionMision/HeroVisionMision";
import OurTeam from "./OurTeam";
import OurLegal from "./OurLegal";
import Footer from "../Footer/Footer";

function AboutUs() {
  useEffect(() => {
    document.title = "About | PT Ratu Bio Indonesia";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 mb-16">
        {""}
        <HeroSection />
        <AboutUsSection />
        <HeroVisionMision />
        <OurTeam />
        <OurLegal />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
