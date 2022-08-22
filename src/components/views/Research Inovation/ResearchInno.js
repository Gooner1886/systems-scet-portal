import React from 'react'
import { AppBar,Box } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import Grant from '../Card/Grant';
import Patent from '../Card/Patent';
import Publication from '../Card/Publication';
import Research from '../Card/Research';
import logo from '../../../Assets/logo.png'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const blue = {
  5: "#931F1D",
  20: "#FBFCF8",
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(TabUnstyled)`
  font-family: Poppins, sans-serif;
  color: Black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  //background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[5]};
    color: ${blue[20]};
  }

  // &:focus {
  //   color: #fff;
  //   border-radius: 3px;
  //   outline: 2px solid ${blue[200]};
  //   outline-offset: 2px;
  // }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[5]};
    color: ${blue[20]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: Poppins, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[20]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  font-family: Poppins;
`;


export default function ResearchInno() {
  return (
    <>
      <Navbar />
        <AppBar
        style={{
          backgroundColor: "#273872",
          display:'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '95px'
        }}
      >
        {/* <Link to='/'>
          <img src={logo} alt='logo' style={{width: '7rem', height: '5rem',marginRight:'45rem', backgroundColor:"white"}}/>
        </Link> */}
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Poppins"
          }}
        >
          Research & Innovation
        </h1>

      </AppBar>

      <TabsUnstyled
        defaultValue={0}
        style={{
          marginTop: "200px",
          marginBottom: "100px",
        }}
      >
        <TabsList>
          <Tab
            style={{
              border: "1px solid black",
            }}
          >
            Research
          </Tab>
          <Tab
            style={{
              border: "1px solid black",
            }}
          >
            Publication
          </Tab>
          <Tab
            style={{
              border: "1px solid black",
            }}
          >
            Grants
          </Tab>
          <Tab
            style={{
              border: "1px solid black",
            }}
          >
            Patents
          </Tab>
        </TabsList>
        <TabPanel value={0}>
            <Research />
        </TabPanel>
        <TabPanel value={1}>
          <Publication />
        </TabPanel>
        <TabPanel value={2}>
          <Grant />
        </TabPanel>
        <TabPanel value={3}>
          <Patent />
        </TabPanel>
      </TabsUnstyled>
      <Footer />
    </>
  )
}
