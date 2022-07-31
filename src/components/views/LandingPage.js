import React from "react";
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
    </>
  );
};

export default LandingPage;
