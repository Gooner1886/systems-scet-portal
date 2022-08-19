import React from "react";
import BarChart from "../Chart/BarChart";
import Button from "@mui/material/Button";
const Patent = () => {
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
          Add Patent
        </Button>
        <div style={{padding:'1vw', width:'55vw',height:'30vw',marginTop:'2vw',marginLeft:'15vw',marginBottom:'10vw'}}>
        <BarChart
          heading="Total Patents"
          subHeading="Patents since 2017"
          bottomHeader="Patents"
        />
        </div>
      </div>
    </>
  );
};

export default Patent;
