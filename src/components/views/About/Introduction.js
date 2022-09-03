import { Avatar, Stack } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <>
      <Stack
        border={"1px solid black"}
        paddingTop={4}
        paddingBottom={4}
        direction={["column", "column", "row"]}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
        display={"flex"}
      >
        <Avatar
          alt="Faculty name"
          src="%PUBLIC_URL%/faculty photos/Kishor Kolhe.JPG"
          sx={{
            width: ["64px", "128px", "256px"],
            height: ["64px", "128px", "256px"],
          }}
          flex={"0.5"}
        ></Avatar>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flex={"0.5"}
        >
          <p fontFamily={"Poppins"} style={{ textAlign: "left" }}>
            Dr. Kishor R. Kolhe has spent more than 24 years in Engineering
            Academics and Industry. Out of 11 years of Industry Experience he
            worked as Deputy Manager and HOD, Prepress and Information
            Technology Division of The Times of India, Pune for 9.5 years.
          </p>
          <br />
          <p fontFamily={"Poppins"} style={{ textAlign: "left" }}>
            More than 13 years he worked in Engineering Academics in Computer
            Engineering and Information Technology Departments in Savitribai
            Phule Pune University and Bharati Vidyapeeth Deemed University,
            Pune. He also worked as HOD, Department of Information Technology,
            Trinity College of Engineering, Pune. He is working as CEO
            (Examination), SPPU at MAEER’s MIT College of Engineering, Pune as
            an additional administrative responsibility from last 6 years.
            Currently he is working as an Associate Professor, CSE in School of
            Computer Engineering and Technology, Dr. Vishwanath Karad MIT World
            Peace University, Pune.
          </p>
        </Stack>
      </Stack>
    </>
  );
};

export default Introduction;
