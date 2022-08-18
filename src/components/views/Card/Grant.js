import React from "react";
import BarChart from "../Chart/BarChart";
import Button from "@mui/material/Button";

import "./Grant.css";

const Grant = () => {
  return (
    <>
      <div className="container">
        <Button
          size="large"
          style={{
            backgroundColor: "#931F1D",
            color: "#fff",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            marginLeft: "45vw",
            marginBottom: "10px",
          }}
        >
          Add Grant
        </Button>
        <div style={{padding:'1vw', width:'55vw',height:'30vw',marginTop:'2vw',marginLeft:'15vw'}}>
        <BarChart
          heading="Grants and other revenue generation"
          subHeading="Grants since 2017"
          bottomHeader="Grants"
        />
        </div>
      </div>
    </>
  );
};

export default Grant;
