import { Button, Stack } from "@mui/material";
import React from "react";

const PublicationsOverview = () => {
  return (
    <>
      <Stack
        direction={["column", "column", "row"]}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        display={"flex"}
        paddingTop={4}
        paddingBottom={4}
      >
        <h2
          flex={0.5}
          fontFamily={"Poppins"}
          style={{
            fontWeight: "700",
            fontSize: ["large", "larger", "xx-large"],
          }}
        >
          Publications
        </h2>
        <Stack
          flex={0.5}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <p>
            D. Tenant "This is your publication title. Click to edit", Accepted,
            Institute or journal title (2023)
          </p>
          <br />
          <p>
            D. Tenant "This is your publication title. Click to edit", Accepted,
            Institute or journal title (2023)
          </p>
          <br />
          <p>
            D. Tenant "This is your publication title. Click to edit", Accepted,
            Institute or journal title (2023)
          </p>
          <br />
          <Button variant="contained" color="primary" size="large" style={{fontFamily : "Poppins"}}>
            View All Publications
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PublicationsOverview;
