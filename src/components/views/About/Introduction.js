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
          src="https://bit.ly/dan-abramov"
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
          <p
            fontFamily={"Poppins"}
            style={{ textAlign: "left"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p
            fontFamily={"Poppins"}
            style={{ textAlign: "left"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Stack>
      </Stack>
    </>
  );
};

export default Introduction;
