import "./App.css";
import { Route, Routes } from "react-router-dom";
import Logged from "./components/context";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import { useState } from "react";
import React from "react";
import ResetPassword from "./components/views/ResetPassword/ResetPassword";
import StudentSection from "./components/views/Student Section/StudentSection";
import ResearchInno from "./components/views/Research Inovation/ResearchInno";
import About from "./components/views/About/About";
import MainForm from "./components/views/Form/MainForm";
import Clubs from "./components/views/Club/Clubs";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [logged, setlogged] = useState(false); //for checking if user is logged in

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/v1/functionality/getAllCitations")
  //     .then((res) => {
  //       const data = res.data;
  //       console.log("This is the data received", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const cards = [
    {
      name: "Innovators Hub",
      image: "https://i.ibb.co/m9H2hW9/IH-logo.jpg",
      department: "CSE",
      type: "Tech",
      description: "The major goal of Innovators Hub, which...",
      summary:
        "The major goal of Innovators Hub, which was founded in 2018, is to use technology, research, and innovation to address people's everyday concerns. Similarly, their goal is to establish an atmosphere in which students of our college can develop their projects, personalities, and ideas and make them market-ready. They provide students a platform where they may acquire the highly important personality development skill sets and the vital nontechnical talents that assist a student's profile stand out from the crowd, from project management to research to deployment. Their club is a space where students are free to explore, learn, and invent. ",
      events:
        "https://drive.google.com/file/d/1v6nVSLYhj73ygSfDKABOXUj1j-6cNbA3/view?usp=sharing",
      achievements:
        "https://drive.google.com/file/d/1B7nxJXGrhmZo40OU1Jy0zadeKfSLtPoz/view?usp=sharing",
      clubNo: 1,
    },
    {
      name: "SWE",
      image: "https://i.ibb.co/DPdQRHT/SWE-logo.jpg ",
      department: "CSE",
      type: "Tech",
      description: "Summary : The Society of Women Engineer...",
      summary:
        "Summary : The Society of Women Engineers, is a non profit organization, a key to enhance the quality of life and carry ahead the value of diversity. The overall professional development is the ultimate mission of this affiliate group. It was inaugurated on 29th August 2018. It focuses on the development of students for a better professional life, enhanced career growth and networking.",
      events:
        "https://drive.google.com/file/d/11a-j0gFvAh-H4FwBuyQIrsxWrajrEyvQ/view?usp=sharing",
      achievements:
        "https://drive.google.com/file/d/1Q1vcpjucrEW_AI93yo76yED-YXJC3UvT/view?usp=sharing",
      clubNo: 2,
    },
    {
      name: "GDSC",
      image: "https://i.ibb.co/G2xRzc5/GDSC-logo.jpg",
      department: "CSE",
      type: "Tech",
      description: "Google Developer Student Clubs (GDSC)...",
      summary:
        "Google Developer Student Clubs (GDSC), MIT-WPU is a community group for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcomed by the chapter. By joining GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
      events:
        "https://drive.google.com/file/d/1r__lObbHgpXFZFXRJs_swfQQ2C5EaxM5/view?usp=sharing",
      achievements: "#",
      clubNo: 3,
    },
  ];
  return (
    <div className="font">
      <Logged.Provider value={{ value: logged, setter: setlogged }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset" element={<ResetPassword />} />
          <Route
            exact
            path="/student-section"
            element={<StudentSection cards={cards} />}
          />
          <Route
            path="/student-section/:clubNo"
            element={<Clubs clubDetails={cards} />}
          />
          <Route exact path="/research-innovation" element={<ResearchInno />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/form" element={<MainForm />} />
        </Routes>
      </Logged.Provider>
    </div>
  );
};

export default App;
