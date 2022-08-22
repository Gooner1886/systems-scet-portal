import React, { useState } from "react";
import Button from "@mui/material/Button";
import PieChart from "../Chart/PieChart";
import { Link } from "react-router-dom";

const Research = () => {
  const [data, setData] = useState([23, 11, 54, 72, 12]);
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
            fontFamily: "Poppins"
          }}
        >
          <Link to="/form" style={{ textDecoration: "none",color:'white' }}>
            Add Project
          </Link>
        </Button>
        <div
          style={{
            padding: "1vw",
            width: "35vw",
            marginLeft: "27vw",
            marginTop: "2vw",
          }}
        >
          <PieChart data={data} />
        </div>
      </div>
    </>
  );
};

export default Research;
