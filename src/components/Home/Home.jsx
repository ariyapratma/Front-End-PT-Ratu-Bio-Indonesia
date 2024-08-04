import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import CardProduct from "../CardProduct/CardProduct";
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
        {/* Add margin to account for fixed Navbar and Footer */}
        <Carousel />
        <CardProduct />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
