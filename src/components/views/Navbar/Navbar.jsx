import {
  List,
  ListItemText,
  AppBar,
  ListItem,
  Button,
  Divider,
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
        {["Research & Innovation", "Student Corner", "Login"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        className="nav__main"
        style={{
          backgroundColor: "#fff",
          height: "75px",
        }}
      >
        <Container classes="nav__container" >
          <List className="nav__main-list">
            <ListItem className="logo">
              <Link to='/'>
              <Box className="nav__container-image">
                  <img src={logo} alt="logo" className="nav__logo" />
              </Box>
              </Link>
            </ListItem>
            <Divider />
            {loggedin.value && <ListItem className="nav__main-list-item">
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
            </ListItem>}
            <Divider />
            <ListItem className="nav__main-list-item" style={{ marginLeft: '275px', width: '70%' }}>
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
