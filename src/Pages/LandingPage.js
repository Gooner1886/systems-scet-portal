import React from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import CarouselBar from "../components/views/CarouselBar";
import "react-multi-carousel/lib/styles.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CarouselBar />
      <div>LandingPage</div>
      <div className="BotFoot">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
