import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
  TextareaAutosize,
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
import Footer from "../Footer";

const MainForm = () => {
  const [formData, setFormData] = React.useState({
    facultyName: "", // 1st page
    paperTitle: "",
    submissionType: "",
    journalName: "",
    conferenceName: "",
    bookName: "",
    publisherName: "",
    authorName: "",
    coauthorName: [],
    affiliations: "",
    journalType: "",
    ISSN: Number,
    ISBN: Number,
    DOI: "",
    status: "",
    pages: Number,
    month: Number,
    year: Number,
    journalLoc: "",
    link: "",
    proofLink: "",
    citationFormat: "",
    domain: "",
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <div>
      <Navbar />
      <p style={{ fontSize: "2vw", marginTop: "10vw" }}>
        <b>Add New Publication / Citation</b>
      </p>
      <p style={{ fontSize: "1.4vw" }}>
        Add or update your new Citation or Research information if any to the
        form below
      </p>

      <div
        style={{
          paddingTop: "1vw",
          backgroundColor: "#fbfcf8",
          marginBottom: "20px",
        }}
      >
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
              <div style={{ marginBottom: "1vw" }}>
                <b>Name</b>
              </div>
              <div style={{ marginBottom: "1.5vw" }}>
                <TextField
                  id="name-input"
                  name="name"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  value={formData.facultyName}
                  onChange={(e) =>
                    setFormData({ ...formData, facultyName: e.target.value })
                  }
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
              <div style={{ marginBottom: "1vw" }}>
                <div>
                  <b style={{ marginRight: "16.2vw" }}>Email Address</b>
                  <b>Contact Number</b>
                </div>
              </div>
              <div style={{ marginBottom: "1.5vw" }}>
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
              <div>
                <b>Type of information to be added</b>
              </div>
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
            (activeStep === 1 && (
              <div>
                {/* <div style={{ marginBottom: "1vw" }}>
                    <b>Paper Title</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="paperTitle"
                      name="name"
                      label="Paper Title"
                      type="text"
                      variant="outlined"
                      value={formData.paperTitle}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          paperTitle: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div>
                  <div style={{ marginBottom: "1vw" }}>
                    <b>Submission Type</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="submissionType"
                      name="name"
                      label="Submission Type"
                      type="text"
                      variant="outlined"
                      value={formData.submissionType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          submissionType: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div> */}
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>Paper Title</b>
                    <b>Submission Type</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="paperTitle"
                    name="name"
                    label="Paper Title"
                    type="text"
                    variant="outlined"
                    value={formData.paperTitle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paperTitle: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="submissionType"
                    name="name"
                    label="Submission Type"
                    type="text"
                    variant="outlined"
                    value={formData.submissionType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        submissionType: e.target.value,
                      })
                    }
                  />
                </div>
                {/* <div style={{ marginBottom: "1vw" }}>
                    <b>Journal Name</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="journalName"
                      name="name"
                      label="Journal Name"
                      type="text"
                      variant="outlined"
                      value={formData.journalName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          journalName: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div> */}
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>Journal Name</b>
                    <b>Journal Type</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="journalName"
                    name="name"
                    label="Journal Name"
                    type="text"
                    variant="outlined"
                    value={formData.journalName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        journalName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="journalType"
                    name="name"
                    label="Journal Type"
                    type="text"
                    variant="outlined"
                    value={formData.journalType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        journalType: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Conference Name</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="conferenceName"
                    name="name"
                    label="Conference Name"
                    type="text"
                    variant="outlined"
                    value={formData.conferenceName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conferenceName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Book Name</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="bookName"
                    name="name"
                    label="Book Name"
                    type="text"
                    variant="outlined"
                    value={formData.bookName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bookName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Publisher Name</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="publisherName"
                    name="name"
                    label="Publisher Name"
                    type="text"
                    variant="outlined"
                    value={formData.publisherName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        publisherName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                {/* <div style={{ marginBottom: "1vw" }}>
                    <b>Author Name</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="authorName"
                      name="name"
                      label="Author Name"
                      type="text"
                      variant="outlined"
                      value={formData.authorName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          authorName: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div>    
                  <div style={{ marginBottom: "1vw" }}>
                    <b>Co-Author Name</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="coauthorName"
                      name="name"
                      label="Co-Author Name"
                      type="text"
                      variant="outlined"
                      value={formData.coauthorName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          coauthorName: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div>                    */}
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>Author Name</b>
                    <b>Co Author Name</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="authorName"
                    name="name"
                    label="Author Name"
                    type="text"
                    variant="outlined"
                    value={formData.authorName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        authorName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="coauthorName"
                    name="name"
                    label="Co-Author Name"
                    type="text"
                    variant="outlined"
                    value={formData.coauthorName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        coauthorName: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Affiliations</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextareaAutosize
                    id="affiliations"
                    name="name"
                    label="Publisher Name"
                    type="text"
                    variant="outlined"
                    value={formData.affiliations}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        affiliations: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
              </div>
            )) ||
            (activeStep === 2 && (
              <div>
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>ISSN Number</b>
                    <b>ISBN Number</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="issn"
                    name="name"
                    label="ISSN"
                    type="number"
                    variant="outlined"
                    value={formData.ISSN}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ISSN: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="publisherName"
                    name="name"
                    label="ISBN"
                    type="number"
                    variant="outlined"
                    value={formData.ISBN}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ISBN: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>DOI</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="DOI"
                    name="name"
                    label="DOI"
                    type="text"
                    variant="outlined"
                    value={formData.DOI}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        DOI: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Status</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="status"
                    name="name"
                    label="Status"
                    type="text"
                    variant="outlined"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Pages</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="pages"
                    name="name"
                    label="Number of Pages"
                    type="number"
                    variant="outlined"
                    value={formData.pages}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pages: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>Month</b>
                    <b>Year</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="month"
                    name="name"
                    label="Month"
                    type="number"
                    variant="outlined"
                    value={formData.month}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        month: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="year"
                    name="name"
                    label="Year"
                    type="number"
                    variant="outlined"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        year: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Journal Location</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="status"
                    name="name"
                    label="Journal Location"
                    type="text"
                    variant="outlined"
                    value={formData.journalLoc}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        journalLoc: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                {/* <div style={{ marginBottom: "1vw" }}>
                    <b>Link</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="status"
                      name="name"
                      label="Link"
                      type="text"
                      variant="outlined"
                      value={formData.link}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          link: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div>
                  <div style={{ marginBottom: "1vw" }}>
                    <b>Proof Link</b>
                  </div>
                  <div style={{ marginBottom: "1.5vw" }}>
                    <TextField
                      id="status"
                      name="name"
                      label="Proof Link"
                      type="text"
                      variant="outlined"
                      value={formData.proofLink}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          proofLink: e.target.value,
                        })
                      }
                      style={{ marginRight: "10vw" }}
                    />
                  </div> */}
                <div style={{ marginBottom: "1vw" }}>
                  <div>
                    <b style={{ marginRight: "16.2vw" }}>Link</b>
                    <b>Proof Link</b>
                  </div>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="status"
                    name="name"
                    label="Link"
                    type="text"
                    variant="outlined"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        link: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                  <TextField
                    id="status"
                    name="name"
                    label="Proof Link"
                    type="text"
                    variant="outlined"
                    value={formData.proofLink}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        proofLink: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Citation Format</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="status"
                    name="name"
                    label="Citation Format"
                    type="text"
                    variant="outlined"
                    value={formData.citationFormat}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        citationFormat: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
                <div style={{ marginBottom: "1vw" }}>
                  <b>Domain</b>
                </div>
                <div style={{ marginBottom: "1.5vw" }}>
                  <TextField
                    id="status"
                    name="name"
                    label="Domain"
                    type="text"
                    variant="outlined"
                    value={formData.domain}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        domain: e.target.value,
                      })
                    }
                    style={{ marginRight: "10vw" }}
                  />
                </div>
              </div>
            ))}
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
          {activeStep === 2 ? (
            <Button onClick={handleSubmit}>Submit</Button>
          ) : (
            <Button onClick={handleNext}>
              <NavigateNextIcon />
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainForm;
