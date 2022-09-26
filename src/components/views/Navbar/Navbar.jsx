import {
  List,
  ListItemText,
  AppBar,
  ListItem,
  Button,
  Divider,
  MenuItem,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../Assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import Logged from "../../context";

import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Navbar() {
  const [state, setState] = React.useState({
    menu: false,
  });

  const navigate = useNavigate();
  const loggedin = useContext(Logged);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Research & Innovation", "Student Corner", "Login"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const links = [
    "These ar links starting from 1",
    "https://drive.google.com/drive/u/1/folders/1-MtLF6RzQXXnDja_vbVmT95iBEUpQgQn",
    "https://drive.google.com/drive/u/1/folders/1-NDUwBEYDcF9xZJm6Um97ujj5fNcxrA4",
    "https://drive.google.com/drive/u/1/folders/1-h_BgAoef7HsVO5uBIjDcmCcazpQDHIi",
    "https://drive.google.com/drive/u/1/folders/1-if0LdwqCU6FZSBxBvZjL-knr2-sIjuF",
    "https://drive.google.com/drive/u/1/folders/1-l4R9XhZ4b9xl4feDdHF9hUZst6HxO6V",
    "https://drive.google.com/drive/u/1/folders/1-mUnkZXrD5uRWn2HArPTUgxflXRpzeoZ",
    "https://drive.google.com/drive/u/1/folders/1-rQi78961d_cx2Bt7GynYwJcX0F2WLrC",
    "https://drive.google.com/drive/u/1/folders/1-tfbetbeojxkuJDt3nLgr18ZV-YDuDT9",
    "https://drive.google.com/drive/u/1/folders/1-xQiKboVT5briBE-2S-GmHmqSK1rlPPP",
    "https://drive.google.com/drive/u/1/folders/10-1Gkjc-4Rb1QpkSYcww-mLgB8BO3iQ3",
    "https://drive.google.com/drive/u/1/folders/105OVNEub5L0-MlsdJgjSMPwujro7t04i",
    "https://drive.google.com/drive/u/1/folders/1072jID3nWvKDQ5bm48wJ1gBW7bJfxD94",
  ]
  return (
    <>
      <AppBar
        className="nav__main"
        style={{
          backgroundColor: "#fff",
          height: "75px",
        }}
      >
        <Container classes="nav__container">
          <List className="nav__main-list">
            <ListItem className="logo">
              <Link to="/">
                <Box className="nav__container-image">
                  <img src={logo} alt="logo" className="nav__logo" />
                </Box>
              </Link>
            </ListItem>
            <Divider />
            {
              // loggedin.value &&
              <ListItem className="nav__main-list-item">
                <Link
                  to="/about"
                  className="nav__main-list-item-link"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "500",
                    //fontSize: '1.3rem',
                  }}
                >
                  About
                </Link>
              </ListItem>
            }
            <ListItem>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="SCET Groups"
                label="SCET Groups"
              >
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[1]
                    );
                  }}
                >
                  Group1 - Curriculum Development
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[2]
                    );
                  }}
                >
                  Group2 - Academic Monitoring
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[3]
                    );
                  }}
                >
                  Group3 - Teaching Learning Planning
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[4]
                    );
                  }}
                >
                  Group4 - Quality Improvement
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[5]
                    );
                  }}
                >
                  Group5 - Projects, Seminars & Internships
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[6]
                    );
                  }}
                >
                  Group6 - FDP Addon Courses
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[7]
                    );
                  }}
                >
                  Group7 - Infrastructure and Labs
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[8]
                    );
                  }}
                >
                  Group8 - Students Events and Chapters
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[9]
                    );
                  }}
                >
                  Group9 - Website and Social Media
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[10]
                    );
                  }}
                >
                  Group10 - Industry Collaboration
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[11]
                    );
                  }}
                >
                  Group11 - Research and Innovation
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.open(
                      links[12]
                    );
                  }}
                >
                  Group12 - Systems
                </MenuItem>
              </Select>
            </ListItem>
            <Divider />
            <ListItem
              className="nav__main-list-item"
              style={{ marginLeft: "275px", width: "70%" }}
            >
              <Link
                to="/student-section"
                className="nav__main-list-item-link"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "500",
                  //fontSize: '1.3rem',
                }}
              >
                Student Corner
              </Link>
            </ListItem>
            <Divider />

            <ListItem className="nav__main-list-item">
              <Link
                to="/research-innovation"
                className="nav__main-list-item-link"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "500",
                  //fontSize: '1.3rem',
                }}
              >
                Research & Innovation
              </Link>
            </ListItem>

            <Box className="nav__container-button">
              <Button
                variant="contained"
                className="log"
                onClick={() => {
                  if (loggedin.value) {
                    localStorage.clear();
                  }
                  navigate("/login");
                }}
              >
                {loggedin.value ? "Logout" : "Login"}
              </Button>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    className="nav__main-list-menu"
                    onClick={toggleDrawer(anchor, true)}
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    <MenuIcon
                      style={{
                        color: "black",
                      }}
                    />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </List>
        </Container>
      </AppBar>
    </>
  );
}
