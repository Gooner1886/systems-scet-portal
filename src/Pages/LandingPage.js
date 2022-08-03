import React from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import CarouselBar from "../components/views/CarouselBar";
import Grid from "@mui/material/Grid";
import "react-multi-carousel/lib/styles.css";
import logo from "../Assets/logo.png";
import lady from "../Assets/lady.jpg";
// import Chart from "../components/views/Chart/Chart";
import ImageCard from "../components/views/ImageCard/ImageCard";

import "./LandingPage.css";
import BarChart from "../components/views/Chart/BarChart";
import LineChart from "../components/views/Chart/LineChart";
import { Container } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CarouselBar />
      {/* <div>LandingPage</div> */}
      {/* <Grid container columns={30} spacing={3}>
        <Grid item xs={2} sm={1}></Grid>
        <Grid item xs={4} sm={12}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "16rem", width: "20rem" }}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <h1>School of Computer Engineering and Technology</h1>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              odio arcu, sollicitudin at risus semper, consequat ultrices felis.
              Morbi tellus turpis, euismod quis maximus vehicula, lacinia ac
              nisl. Maecenas dignissim eros lorem, nec bibendum erat faucibus
              et. Praesent vitae facilisis sem. Aenean elit felis, varius nec
              auctor at, tristique ultrices neque. Morbi felis dui, venenatis
              sit amet quam a, molestie ultrices nisi. Vivamus dignissim
              imperdiet tempus. Suspendisse potenti. Morbi efficitur nulla
              ipsum, ac mattis leo sagittis id. Aliquam erat volutpat. Quisque
              vitae tempor quam. Proin a ligula vel purus pharetra commodo quis
              eget leo. Nullam placerat vitae erat quis viverra.
            </p>
          </div>
        </Grid>
      </Grid> */}
      {/* <Chart /> */}
      <div className="content">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ height: "16rem", width: "20rem" }}
            className="img"
          />
        </div>
        <div>
          <h1 className="head">School of Computer Engineering and Technology</h1>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              odio arcu, sollicitudin at risus semper, consequat ultrices felis.
              Morbi tellus turpis, euismod quis maximus vehicula, lacinia ac
              nisl. Maecenas dignissim eros lorem, nec bibendum erat faucibus
              et. Praesent vitae facilisis sem. Aenean elit felis, varius nec
              auctor at, tristique ultrices neque. Morbi felis dui, venenatis
              sit amet quam a, molestie ultrices nisi. Vivamus dignissim
              imperdiet tempus. Suspendisse potenti. Morbi efficitur nulla
              ipsum, ac mattis leo sagittis id. Aliquam erat volutpat. Quisque
              vitae tempor quam. Proin a ligula vel purus pharetra commodo quis
              eget leo. Nullam placerat vitae erat quis viverra.
            </p>
          </div>
        </div>
      </div>
      <h1 style={{padding:'3rem'}}>Meet the Dean HoS</h1>
      <div className="content">
        <div>
          <img
            src={lady}
            alt="lady"
            style={{ height: "16rem", width: "20rem" }}
            className="img"
          />
        </div>
        <div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              odio arcu, sollicitudin at risus semper, consequat ultrices felis.
              Morbi tellus turpis, euismod quis maximus vehicula, lacinia ac
              nisl. Maecenas dignissim eros lorem, nec bibendum erat faucibus
              et. Praesent vitae facilisis sem. Aenean elit felis, varius nec
              auctor at, tristique ultrices neque. Morbi felis dui, venenatis
              sit amet quam a, molestie ultrices nisi. Vivamus dignissim
              imperdiet tempus. Suspendisse potenti. Morbi efficitur nulla
              ipsum, ac mattis leo sagittis id. Aliquam erat volutpat. Quisque
              vitae tempor quam. Proin a ligula vel purus pharetra commodo quis
              eget leo. Nullam placerat vitae erat quis viverra.
            </p>
          </div>
          <h1 className="head">Dr. Vrushali Kulkarni Head of School and Professor</h1>
        </div>
      </div>
      <h1 style={{padding:'3rem'}}>Awards & Achievements</h1>
      <div className="awards">
        <div className="one">
          <div style={{padding:'5rem'}}><ImageCard /> </div>
          <div style={{padding:'5rem'}}><ImageCard /> </div>
        </div>

        <div className="three">
          <div style={{padding:'5rem'}}><ImageCard /> </div>
          <div style={{padding:'5rem'}}><ImageCard /> </div>
        </div>
      </div>
      <BarChart />
      {/* <Container maxWidth="xl">
        <Grid container spacing={5} columns={12}>
          <Grid item xs={6} sm={1}>
            <LineChart />
          </Grid>
          <Grid item xs={6} sm={1}>
            <LineChart />
          </Grid>
          <Grid item xs={6} sm={1}>
            <LineChart />
          </Grid>
        </Grid>
      </Container> */}
      <div className="lgraph">
        <div><LineChart /></div>
        <div><LineChart /></div>
        <div><LineChart /></div>
      </div>
      {/* <div className="BotFoot"> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
