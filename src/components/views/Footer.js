import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 6, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#273872"
        color="white"
      >
        <Container maxWidth="xl">
          <Grid container spacing={5} columns={25}>
            <Grid item xs={5} sm={4}>
              <Box>SCET</Box>
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
              <Box>Support</Box>
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
              <Box>Legal</Box>
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
              <Box>Social</Box>
              <Box>
                <Link
                  href="/"
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
                  href="/"
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <YouTubeIcon color="white" />
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
                  <FacebookIcon color="white" />
                </Link>
              </Box>
            </Grid>

            <Grid item xs={5} sm={4}>
              <Box>Find Us</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
