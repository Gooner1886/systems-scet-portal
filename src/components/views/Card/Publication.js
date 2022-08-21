import React, { useState } from "react";
import GroupedBarChart from "../Chart/GroupedBarChart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Publication = () => {
  const chartData1 = [6578, 6787, 3245, 9876, 2324, 5123, 2435];
  const [data1, setData1] = useState(chartData1);
  const chartData2 = [657, 678, 324, 987, 232, 512, 243];
  const [data2, setData2] = useState(chartData2);
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
            Add Publication
          </Link>
        </Button>
        <div
          style={{
            padding: "1vw",
            width: "55vw",
            height: "33vw",
            marginTop: "2vw",
            marginLeft: "15vw",
          }}
        >
          <GroupedBarChart data1={data1} data2={data2} />
        </div>
      </div>
    </>
  );
};

export default Publication;
