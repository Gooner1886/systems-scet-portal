import React from "react";
import GroupedBarChart from "../Chart/GroupedBarChart";
import Button from "@mui/material/Button";

const Publication = () => {
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
          Add Publication
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
          <GroupedBarChart />
        </div>
      </div>
    </>
  );
};

export default Publication;
