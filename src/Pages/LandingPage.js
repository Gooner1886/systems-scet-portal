import React from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import CarouselBar from "../components/views/CarouselBar";
import Grid from "@mui/material/Grid";
import "react-multi-carousel/lib/styles.css";
import logo from "../Assets/logo.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CarouselBar />
      {/* <div>LandingPage</div> */}
      <Grid container columns={25} spacing={3}>
        <Grid item xs={2} sm={1}></Grid>
        <Grid item xs={4} sm={12}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "16rem", width: "20rem" }}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio
            arcu, sollicitudin at risus semper, consequat ultrices felis. Morbi
            tellus turpis, euismod quis maximus vehicula, lacinia ac nisl.
            Maecenas dignissim eros lorem, nec bibendum erat faucibus et.
            Praesent vitae facilisis sem. Aenean elit felis, varius nec auctor
            at, tristique ultrices neque. Morbi felis dui, venenatis sit amet
            quam a, molestie ultrices nisi. Vivamus dignissim imperdiet tempus.
            Suspendisse potenti. Morbi efficitur nulla ipsum, ac mattis leo
            sagittis id. Aliquam erat volutpat. Quisque vitae tempor quam. Proin
            a ligula vel purus pharetra commodo quis eget leo. Nullam placerat
            vitae erat quis viverra.
          </p>
        </Grid>
      </Grid>

      <div className="BotFoot">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
