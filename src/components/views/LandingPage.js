import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CarouselBar from "./CarouselBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const LandingPage = () => {
  return (
    <>
      <NavBar />
      <CarouselBar />
      <div>LandingPage</div>
      <div className="BotFoot">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
