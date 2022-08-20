import { Stack } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Accolades from "./Accolades";
import Designation from "./Designation";
import Introduction from "./Introduction";
import PublicationsOverview from "./PublicationOverview";

const About = () => {
  return (
    <>
      <Navbar />
      <Stack
        direction={"column"}
        alignItems={"stretch"}
        justifyContent={"center"}
        spacing={"2"}
      >
        <Designation />
        <Introduction />
        <Accolades />
        <PublicationsOverview />
      </Stack>
      <Footer />
    </>
  );
};

export default About;
