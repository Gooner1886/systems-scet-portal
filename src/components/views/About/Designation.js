import { Icon, Stack } from "@mui/material";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useContext } from "react";
import { blue, pink } from "@mui/material/colors";
import Logged from "../../context";

const Designation = () => {
  const user = useContext(Logged);
  return (
    <>
      <Box
        marginTop={["32%", "24%", "6%"]}
        width={"100%"}
        paddingTop={4}
        paddingBottom={4}
        bgcolor="#EDEBD7"
        borderTop={"1px solid black"}
      >
        <Stack
          direction={["column", "column", "row"]}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <a
            href="https://www.linkedin.com/in/kishor-kolhe-1696317/"
            alt="LinkedIn"
          >
            <Icon
              as={LinkedInIcon}
              cursor={"pointer"}
              fontSize={"large"}
              color={"primary"}
            ></Icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCjAU8KWnxL44s5XqOxmIIfw"
            alt="Youtube"
          >
            <Icon
              as={YouTubeIcon}
              cursor={"pointer"}
              fontSize={"large"}
              sx={{ color: pink[600] }}
            ></Icon>
          </a>

          <a href="https://www.facebook.com/kishor.kolhe.50" alt="Facebook">
            <Icon
              as={FacebookIcon}
              cursor={"pointer"}
              fontSize={"large"}
              sx={{ color: blue[900] }}
            ></Icon>
          </a>

          <a href="https://twitter.com/kishorkolhe6" alt="Twitter">
            <Icon
              as={TwitterIcon}
              cursor={"pointer"}
              fontSize={"large"}
              color={"primary"}
            ></Icon>
          </a>

          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            spacing={"2"}
          >
            <h2 fontFamily={"Poppins"}>{`${user.value.name}, ${user.value.title}`}</h2>
            <p fontFamily={"Poppins"}>{`${user.value.position}`}</p>
            <p fontFamily={"Poppins"}>MITWPU</p>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Designation;
