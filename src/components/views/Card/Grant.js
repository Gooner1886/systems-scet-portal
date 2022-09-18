import React, { useState } from "react";
import BarChart from "../Chart/BarChart";
import BarChart2 from "../Chart/BarChart2";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Grant.css";

const Grant = () => {
  const chartData = [6578, 6787, 3245, 9876, 2324, 5123, 2435];
  const [data, setData] = useState(chartData);
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
          <Link to="/form" style={{ textDecoration: "none", color: "white" }}>
            Add Grant
          </Link>
        </Button>
        <div
          style={{
            padding: "1vw",
           // width: "100%",
            height: "30vw",
            marginTop: "2vw",
            marginLeft: "10vw",
            marginBottom: "20vw",
          }}
        >
          <BarChart2
            data={data}
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
