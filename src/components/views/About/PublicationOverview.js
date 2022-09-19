import { Button, Stack } from "@mui/material";
import React, { useContext } from "react";
import Logged from "../../context";

const PublicationsOverview = () => {
  const user = useContext(Logged);
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
            Priyanka R. Balage, Dr. Kishor R. Kolhe, “Generation of
            E-Certificates using Custom Blockchain for Peer to Peer Network”,
            CLIO An Annual Interdisciplinary Journal of History (CLIO AIJH),
            ISSN: 0976-075X, Volume 6, Issue 5, pp. 157-166, April 2020. URL:
            <a
              href="https://www.ejbss.org/2020/04/clio-annual-interdisciplinary-journal.html"
              style={{ color: "#931F1D" }}
            >
              https://www.ejbss.org/2020/04/clio-annual-interdisciplinary-journal.html
            </a>
          </p>
          <br />
          <p>
            Nikhil Bhomia, Kishor Kolhe, “Anti-Theft Hybrid Solution for
            Tracking & Locating Mobile Devices with Data Security”,
            International Journal of Recent Technology and Engineering (IJRTE),
            ISSN: 2277-3878, Volume 8, Issue 2S3, pp. 696-699, DOI:
            10.35940/ijrte.B1129.0782S319, July 2019. URL:
            <a
              href="https://www.ijrte.org/wp-content/uploads/papers/v8i2S3/B11290782S319.pdf"
              style={{ color: "#931F1D" }}
            >
              https://www.ijrte.org/wp-content/uploads/papers/v8i2S3/B11290782S319.pdf
            </a>
          </p>
          <br />
          <p>
            Nitu Ghodge, Dr. Kishor R. Kolhe, et al., “Smart Travel Scheduler:
            An Expert System for Tourists”, International Journal for Research
            in Applied Science & Engineering Technology (IJRASET), ISSN:
            2321-9653, Volume 7 Issue 5, pp. 856-860, May 2019. URL:
            <a
              href="https://www.ijraset.com/fileserve.php?FID=22433"
              style={{ color: "#931F1D" }}
            >
              https://www.ijraset.com/fileserve.php?FID=22433
            </a>
          </p>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ fontFamily: "Poppins" }}
          >
            View All Publications
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PublicationsOverview;
