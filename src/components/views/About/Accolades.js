import { Icon, Stack } from "@mui/material";
import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { red, yellow } from "@mui/material/colors";
import { orange } from "@material-ui/core/colors";

const Accolades = () => {
  return (
    <>
      <Stack
        direction={["column", "column", "row"]}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-around"}
        paddingTop={6}
        paddingBottom={6}
        bgcolor="#EDEBD7"
        borderBottom={"1px solid black"}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Icon
            as={WorkspacePremiumIcon}
            cursor={"pointer"}
            fontSize={"large"}
            sx={{ color: red[800] }}
          ></Icon>
          <p style={{ fontSize: "large", fontWeight: "700" }}>
            24+ years of experience
          </p>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Icon
            as={WorkspacePremiumIcon}
            cursor={"pointer"}
            fontSize={"large"}
            sx={{ color: red[800] }}
          ></Icon>
          <p style={{ fontSize: "large", fontWeight: "700" }}>
            60 UG + PG projects
          </p>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Icon
            as={WorkspacePremiumIcon}
            cursor={"pointer"}
            fontSize={"large"}
            sx={{ color: red[800] }}
          ></Icon>
          <p style={{ fontSize: "large", fontWeight: "700" }}>
            15 Seminars conducted
          </p>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Icon
            as={WorkspacePremiumIcon}
            cursor={"pointer"}
            fontSize={"large"}
            sx={{ color: red[800] }}
          ></Icon>
          <p style={{ fontSize: "large", fontWeight: "700" }}>
            25 papers published
          </p>
        </Stack>
      </Stack>
    </>
  );
};

export default Accolades;
