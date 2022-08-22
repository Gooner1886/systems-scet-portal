import React, { useState } from "react";
import BarChart from "../Chart/BarChart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Patent = () => {
  const chartData = [6578, 6787, 3245, 9876, 2324, 5123, 2435];
  const [data, setData] = useState(chartData);
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
          <Link to="/form" style={{ textDecoration: "none", color: "white" }}>
            Add Patent
          </Link>
        </Button>
        <div
          style={{
            padding: "1vw",
            width: "55vw",
            height: "30vw",
            marginTop: "2vw",
            marginLeft: "15vw",
            marginBottom: "15vw",
          }}
        >
          <BarChart
            data={data}
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
