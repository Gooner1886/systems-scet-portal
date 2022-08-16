import React from "react";
import Button from '@mui/material/Button';
import PieChart from "../Chart/PieChart";
import Footer from "../Footer";

const Research = () => {
  return (
    <>
      <Button
        size="large"
        style={{
          backgroundColor: "#931F1D",
          color: "#fff",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginLeft: "37rem",
          marginBottom: "10px",
        }}
      >
        Add Project
      </Button>
      <PieChart />
      <Footer />
    </>
  );
};

export default Research;
