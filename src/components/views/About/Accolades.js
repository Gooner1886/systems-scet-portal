import { Icon, Stack } from "@mui/material";
import React, { useContext } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { red, yellow } from "@mui/material/colors";
import { orange } from "@material-ui/core/colors";
import Logged from "../../context";

const Accolades = () => {
  const user = useContext(Logged);
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
            {`${user.value.experience}+ years of experience`}
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
            {`${user.value.projects} UG + PG projects`}
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
            {`${user.value.trainings} Seminars conducted`}
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
            {`${user.value.papers} papers published`}
          </p>
        </Stack>
      </Stack>
    </>
  );
};

export default Accolades;
