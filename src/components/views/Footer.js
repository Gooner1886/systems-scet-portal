import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Image } from "@mui/icons-material";
import Link from "@mui/material/Link";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo2 from "../../Assets/logo2.png";

const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 6, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#273872"
        color="white"
      >
        <Container maxWidth="xl" style={{ paddingLeft: "20rem" }}>

          <Grid container spacing={5} columns={25}>
            <Grid item xs={5} sm={4}>
              <Box style={{ fontWeight: "bold", paddingBottom: "2rem" }}>
                SCET
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Research
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Student Chapter
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
              </Box>
            </Grid>

            <Grid item xs={5} sm={4}>
              <Box style={{ fontWeight: "bold", paddingBottom: "2rem" }}>
                Support
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Help Center
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Safety Center
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Community
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Guidelines
                </Link>
              </Box>
            </Grid>

            <Grid item xs={5} sm={4}>
              <Box style={{ fontWeight: "bold", paddingBottom: "2rem" }}>
                Legal
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Cookies Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Terms of Service
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Law Enforcement
                </Link>
              </Box>
            </Grid>

            <Grid item xs={5} sm={4}>
              <Box style={{ fontWeight: "bold", paddingBottom: "2rem" }}>
                Social
              </Box>
              <Box>
                <Link
                  href="https://twitter.com/MITWPUOfficial"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <TwitterIcon color="white" />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.instagram.com/mitwpu_scet/"
                  target="_blank"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <InstagramIcon color="white" />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.facebook.com/MITWPUOfficial"
                  target="_blank"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <FacebookIcon color="white" />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/company/mitwpu-scet/"
                  target="_blank"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <LinkedInIcon color="white" />
                </Link>
              </Box>
            </Grid>

            <Grid item xs={5} sm={4}>
              <Box>Find Us</Box>
              <div className="map">
                 <iframe width="400" height="200" allowfullscreen="" loading="lazy"  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3783.246621064879!2d73.81269391472068!3d18.517754187410638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2bfb9e53a05f9%3A0x2be5e8da02be693e!2sMIT%20World%20Peace%20University%2C%20Survey%20No%2C%20124%2C%20Paud%20Rd%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!3m2!1d18.5177542!2d73.81488259999999!5e0!3m2!1sen!2sin!4v1663356252577!5m2!1sen!2sin"/>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
