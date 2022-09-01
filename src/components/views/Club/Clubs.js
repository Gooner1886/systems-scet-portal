import React from "react";
import Navbar from "../Navbar/Navbar";
import { AppBar, Button, Divider, Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const Clubs = (props) => {
  const { clubNo } = useParams();
  const currentClubArray = props.clubDetails.filter(
    (club) => club.clubNo == clubNo
  );
  return (
    <>
      {/* <div>
          <h1>Club data</h1>
      </div> */}
      <Navbar />
      <AppBar
        style={{
          backgroundColor: "#273872",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "95px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Student Clubs
        </h1>
      </AppBar>
      <Stack
        direction={"column"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        marginTop={["50%", "32%", "15%"]}
        paddingTop={4}
        paddingBottom={4}
      >
        <Avatar
          alt="Club Logo"
          src={`${currentClubArray[0].image}`}
          sx={{
            width: ["100px", "164px", "256px"],
            height: ["100px", "164px", "256px"],
          }}
        ></Avatar>
        <h1>{`${currentClubArray[0].name}`}</h1>
        <Divider>-----------------------------</Divider>
        <p
          style={{ fontSize: ["small", "medium", "large"], margin: "2px" }}
        >{`${currentClubArray[0].summary}`}</p>
        <Stack
          direction={["column", "column", "row"]}
          display={"flex"}
          alignItems="center"
          justifyContent={"flex-start"}
        >
          <Button
            variant="contained"
            style={{ margin: "20px" }}
            onClick={() => window.open(currentClubArray[0].events)}
          >
            Events
          </Button>
          <Button
            variant="contained"
            style={{ margin: "20px" }}
            onClick={() => window.open(currentClubArray[0].achievements)}
          >
            Achievements
          </Button>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Clubs;
