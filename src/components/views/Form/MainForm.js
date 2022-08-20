import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Navbar from "../Navbar/Navbar";

const MainForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Navbar />
      <p style={{fontSize:'2vw',marginTop:"10vw"}}><b>Add New Publication / Citation</b></p>
      <p style={{fontSize:'1.4vw'}}>Add or update your new Citation or Research information if any to the form below</p>
      <div style={{ paddingTop:'1vw',backgroundColor: "#fbfcf8" }}>
        <Box style={{ marginTop: "2vw", marginLeft: "40vw", width: "20vw" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step key={1}>
              <StepLabel></StepLabel>
            </Step>
            <Step key={2}>
              <StepLabel></StepLabel>
            </Step>
            <Step key={3}>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </Box>
        <div style={{ marginLeft: "5vw" }}>
          {(activeStep === 0 && (
            <div>
              <div style={{marginBottom:'1vw'}}><b>Name</b></div>
              <div style={{marginBottom:'1.5vw'}}>
                <TextField
                  id="name-input"
                  name="name"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  // value={formValues.name}
                  // onChange={handleInputChange}
                  style={{ marginRight: "10vw" }}
                />
                <TextField
                  id="name-input"
                  name="name"
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  // value={formValues.name}
                  // onChange={handleInputChange}
                />
              </div>
              <div style={{marginBottom:'1vw'}}>
                <div><b style={{ marginRight: "16.2vw" }}>Email Address</b><b>Contact Number</b></div>
              </div>
              <div style={{marginBottom:'1.5vw'}}>
                <TextField
                  id="name-input"
                  name="name"
                  label="Email"
                  type="text"
                  variant="outlined"
                  // value={formValues.name}
                  // onChange={handleInputChange}
                  style={{ marginRight: "10vw" }}
                />
                <TextField
                  id="name-input"
                  name="name"
                  label="Contact"
                  type="text"
                  variant="outlined"
                  // value={formValues.name}
                  // onChange={handleInputChange}
                />
              </div>
              <div><b>Type of information to be added</b></div>
              <div>
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Research Paper"
              />
              </div>
              <div>
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Citation"
              />
              </div>
              <div>
              <FormControlLabel
                key="male"
                value="male"
                control={<Radio size="small" />}
                label="Patent"
              />
              </div>

              
              

            </div>
          )) ||
            (activeStep === 1 && <h1>Hi step 2</h1>) ||
            (activeStep === 2 && <h1>Hi step 3</h1>)}
        </div>
        <div style={{ marginLeft: "46.5vw" }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            <NavigateBeforeIcon />
          </Button>
          <Button onClick={handleNext}>
            {activeStep === 2 ? "Submit" : <NavigateNextIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
