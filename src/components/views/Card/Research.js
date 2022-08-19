import React from "react";
import Button from "@mui/material/Button";
import PieChart from "../Chart/PieChart";

const Research = () => {
  return (
    <>
      <div>
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
          Add Project
        </Button>
        <div style={{padding:'1vw', width:'35vw',marginLeft:'27vw',marginTop:'2vw'}}>
        <PieChart />
        </div>
      </div>
    </>
  );
};

export default Research;
