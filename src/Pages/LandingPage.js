

import React from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import CarouselBar from "../components/views/CarouselBar";
import Grid from "@mui/material/Grid";
import "react-multi-carousel/lib/styles.css";
import logo2 from "../Assets/logo2.png";
import lady from "../Assets/lady.jpg";
import ImageCard from "../components/views/ImageCard/ImageCard";

import "./LandingPage.css";
import BarChart from "../components/views/Chart/BarChart";
import LineChart from "../components/views/Chart/LineChart";
import { Container } from "@mui/material";
import AwardsLanding from "../components/views/Card/AwardsLanding";
import ResearchLanding from "../components/views/Card/ResearchLanding";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CarouselBar />
      <div style={{ paddingLeft: "5%" }}>
        <div className="content">
          <div>
            <img
              src={logo2}
              alt="logo"
              style={{ height: "20rem", width: "20rem" }}
              className="img"
            />
          </div>
          <div style={{
            paddingTop: "4rem",
          }}>
            <h1 className="head" style={{
              fontSize: "2rem",
              fontWeight: "bold",
              paddingLeft: "1rem",
            }}>
              School of Computer Engineering and Technology
            </h1>
            <div className="para" style={{
              width: "50rem",
            }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                odio arcu, sollicitudin at risus semper, consequat ultrices
                felis. Morbi tellus turpis, euismod quis maximus vehicula,
                lacinia ac nisl. Maecenas dignissim eros lorem, nec bibendum
                erat faucibus et. Praesent vitae facilisis sem. Aenean elit
                felis, varius nec auctor at, tristique ultrices neque. Morbi
                felis dui, venenatis sit amet quam a, molestie ultrices nisi.
                Vivamus dignissim imperdiet tempus. Suspendisse potenti. Morbi
                efficitur nulla ipsum, ac mattis leo sagittis id. Aliquam erat
                volutpat. Quisque vitae tempor quam. Proin a ligula vel purus
                pharetra commodo quis eget leo. Nullam placerat vitae erat quis
                viverra. 
              </p>
            </div>
          </div>
        </div>
        <h1 className="header">Meet the Dean HoS</h1>
        <div className="content">
          <div>
            <img
              src="https://computer-engineering.mitwpu.edu.in/images/School-of-Computer-Engineering-Technology/Photo-Vrushali-Kulkarni.jpg"
              alt="lady"
              style={{ height: "16rem", width: "20rem" }}
              className="img"
            />
          </div>
          <div>
            <div className="para">
            <h1 className="head" style={{
              marginLeft: '1.5rem',
            }}>
              Dr. Vrushali Kulkarni Head of School and Professor
            </h1>
              <p style={{
              width: "50rem",
              paddingRight: "30px",

            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                odio arcu, sollicitudin at risus semper, consequat ultrices
                felis. Morbi tellus turpis, euismod quis maximus vehicula,
                lacinia ac nisl. Maecenas dignissim eros lorem, nec bibendum
                erat faucibus et. Praesent vitae facilisis sem. Aenean elit
                felis, varius nec auctor at, tristique ultrices neque. Morbi
                felis dui, venenatis sit amet quam a, molestie ultrices nisi.
                Vivamus dignissim imperdiet tempus. Suspendisse potenti. Morbi
                efficitur nulla ipsum, ac mattis leo sagittis id. Aliquam erat
                volutpat. Quisque vitae tempor quam. Proin a ligula vel purus
                pharetra commodo quis eget leo. Nullam placerat vitae erat quis
                viverra.
              </p>
            </div>
          </div>
        </div>
        <h1 className="header">Awards & Achievements</h1>

        <div className="awards">
          <div className="one">
            <div style={{padding:'5rem 0rem'}}>
              <AwardsLanding />
            </div>
            <div>
             <AwardsLanding/>
            </div>
          </div>

          <div className="three">
            <div style={{padding:'5rem 0rem'}}>
             <AwardsLanding/>
            </div>
            <div>
             <AwardsLanding/>
            </div>
          </div>
        </div>

        <h1 className="header1">Research & Publication</h1>
        <div className="lcard">
          <div style={{paddingTop:'2rem'}}>
            <ResearchLanding />
          </div>
          <div style={{paddingTop:'2rem'}}>
             <ResearchLanding />
          </div>
          <div style={{paddingTop:'2rem'}}>
              <ResearchLanding />
          </div>
        </div>

        <BarChart heading='Total Citations by type' subHeading='Citaions since 2017' bottomHeader='Citations'/>

        <div className="lgraph">
          <div style={{ paddingRight: "3rem" }}>
            <LineChart />
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <LineChart />
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <LineChart />
          </div>
        </div>
      </div>
      {/* <div className="BotFoot"> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
