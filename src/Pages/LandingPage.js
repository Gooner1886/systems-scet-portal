import React, { useEffect, useState } from "react";
import Footer from "../components/views/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import CarouselBar from "../components/views/CarouselBar";
import "react-multi-carousel/lib/styles.css";
import logo2 from "../Assets/logo2.png";

import "./LandingPage.css";
import BarChart from "../components/views/Chart/BarChart";
import LineChart from "../components/views/Chart/LineChart";
import AwardsLanding from "../components/views/Card/AwardsLanding";
import ResearchLanding from "../components/views/Card/ResearchLanding";
import Achieve2 from "../Assets/Achieve2.jpg";
import Achieve1 from "../Assets/Achieve1.jpg";
import Achieve3 from "../Assets/Achieve3.jpg";
import Achieve4 from "../Assets/Achieve4.jpg";
import axios from "axios";

const LandingPage = (props) => {
  // const chartData = [6578, 6787, 3245, 9876, 2324, 5123, 2435];
  // const [data, setData] = useState(chartData);

  // const [jc, setJc] = useState([234, 45, 67, 987, 345, 456]);
  // const [bc, setBc] = useState([234, 45, 67, 987, 345, 456]);
  // const [cc, setCc] = useState([234, 45, 67, 987, 345, 456]);
  let journalCount = [];
  let conferenceCount = [];
  let bookCount = [];

  props.allData.forEach((el) => {
    if (el.citationType === "Journal") {
      journalCount.push(el.count);
    } else if (el.citationType === "Conference") {
      conferenceCount.push(el.count);
    } else {
      bookCount.push(el.count);
    }
  });
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
          <div
            style={{
              paddingTop: "4rem",
            }}
          >
            <h1
              className="head"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                paddingLeft: "1rem",
              }}
            >
              School of Computer Engineering and Technology
            </h1>
            <div
              className="para"
              style={{
                width: "50rem",
                fontSize: "0.9rem",
              }}
            >
              <p>
                The UG Programs offered by School of Computer Engineering and
                Technology are 4 years full time programs. The course curriculum
                includes cutting-edge technologies like Artificial Intelligence,
                Machine Learning, Data Analytics, Cloud Computing, IoT, etc and
                Peace courses taught by experienced and eminent faculties.
                MIT-WPU consistently tops in ranking of engineering colleges and
                is widely recognized in India and abroad for its excellence in
                education. The salient features include fully equipped
                laboratories and Center of Excellence established by MNC like
                IBM, AMDOCS, NVIDIA, IEEE Pune section (Affordable Agriculture
                Technology Laboratory). The academic and research partners
                include NVIDIA, Federation University (Australia).
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
            <div
              className="para"
              style={{
                marginTop: "5rem",
              }}
            >
              <h1
                className="head"
                style={{
                  marginLeft: "1.5rem",
                }}
              >
                Dr. Vrushali Kulkarni (Head of School and Professor)
              </h1>
              <p
                style={{
                  width: "53rem",
                  paddingRight: "30px",
                  fontSize: "0.9rem",
                }}
              >
                Dr. Vrushali Kulkarni possesses Ph.D. in “Machine Learning” from
                College of Engineering, Pune. Prior to that, she has done
                ME(Computer Engg) from College of Engg, Pune, and BE(CSE) from
                Walchand College of Engg, Sangli. She has over 25 years of
                teaching experience. She has a specialization in teaching Data
                Structures, Algorithms, Compilers, Data Mining, and Business
                Intelligence. She has been in administration for the last 10
                years, the Department has achieved NBA twice during her tenure.
                At the research front, she has received research funding from
                BCUD, RCFC, MIT, Pune. Recently she has received funding from
                IBM for a project based on the theme of “Humanoid Robots”.She
                has received an “Ideal Teacher” award from MIT, Pune, “Best
                Faculty” award from Cognizant and “Star Achiever” award from
                Accenture.
              </p>
            </div>
          </div>
        </div>
        <h1 className="header">Awards & Achievements</h1>

        <div className="awards">
          <div className="one">
            <div style={{ padding: "5rem 0rem" }}>
              <AwardsLanding
                image={Achieve1}
                desc="The three students of our Engineering department have been selected by Amazon with a CTC of 44.14 Lakh* + 2.5 Lakh worth of employee benefits."
              />
            </div>
            <div>
              <AwardsLanding
                image={Achieve2}
                desc="MIT-WPU School of Computer Engineering and Technology is glad to announce that our students are placed in BMC Software with the CTC of 12.5 LPA. Congratulations to the students !"
              />
            </div>
          </div>

          <div className="three">
            <div style={{ padding: "5rem 0rem" }}>
              <AwardsLanding
                image={Achieve3}
                desc="Mr. Tanmay Unhale, Final Year BTech (CSE) student on receiving Best Paper award for his paper titled, Novel Approach For Feature Selection Using Genetic Algorithm,under the guidance of Prof. Shilpa Sonawani."
              />
            </div>
            <div>
              <AwardsLanding image={Achieve4} />
            </div>
          </div>
        </div>

        <h1 className="header1">Research & Publication</h1>
        <div className="lcard">
          <div style={{ paddingTop: "2rem" }}>
            <ResearchLanding />
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <ResearchLanding />
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <ResearchLanding />
          </div>
        </div>

        <BarChart
          data={props.allData}
          heading="Total Citations by type"
          subHeading="Citations since 2017"
          bottomHeader="Citations"
        />

        <div className="lgraph">
          <div style={{ paddingRight: "3rem" }}>
            <LineChart data={journalCount} title="Journal Citations" />
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <LineChart data={bookCount} title="Book Citations" />
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <LineChart data={conferenceCount} title="Conf. Citations" />
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
