import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../Assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { color } from "@mui/system";

const pages = ["Research & Innovations", "Student Corner"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
            <Box className='nav__container-image' style={{
              display : 'flex',
              flex: 1,
              padding: '0.5rem'
            }}>
                   <img src={logo} alt="logo" className="nav__logo" style={{
                      width: '100px',
                      height: '80px'
                   }} />
            </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              Backgroundcolor="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <div>
            <div>
              <Box sx={{ display: { xs: "none", md: "flex" , paddingLeft: '1rem' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "flex", flexGrow: '1',}}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  sx={{
                    my: 2,
                    display: "block",
                    padding: "0.4375rem 1.5625rem",
                    borderRadius: "9px",
                    color: "white",
                    backgroundColor: "#931f1d", 
                  }}
                >
                 {/* <Link>Login</Link>  */}
                 <NavLink to="/login" style={{
                  textDecoration: 'none',
                  color: 'white'
                 }}>Login</NavLink>
                 
                </Button>
              </Box>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
