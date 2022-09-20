import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import timetableimg from "../../../Assets/TimeTable-img.png";

export default function TimeTableCard() {
  const card = [
    {
      title: "FY",
      description: "View the Timetable for FY",
      img: timetableimg,
      link: "https://drive.google.com/drive/u/6/folders/1R4LgzqHG89SY0HHPtK1KWd7RodiIQ1hG",
    },

    {
      title: "SY",
      description: "View the Timetable for SY",
      img: timetableimg,
      link: "https://drive.google.com/drive/u/6/folders/1jnkKV0r1q1RSNHWwZjFVLRXsCn6r0CWd",
    },

    {
      title: "TY",
      description: "View the Timetable for TY",
      img: timetableimg,
      link: "https://drive.google.com/drive/u/6/folders/1MCtWgQzVBeSz25zUnLt7jJk5xrqu53Ko",
    },

    {
      title: "FINAL YEAR",
      description: "View the Timetable for FINAL YEAR",
      img: timetableimg,
      link: "https://drive.google.com/drive/u/6/folders/1G0LNjl_3kTI7KsTD5OxnxVBdjKPh3NwY",
    },
  ];

  return (
    <>
      <Container
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {card.map((key) => {
          return (
            <Card
              sx={{ maxWidth: 250, borderRadius: "20px", marginTop: "20px" }}
            >
              <CardMedia
                component="img"
                height="240"
                image={key.img}
                alt="green iguana"
                style={{
                  width: "100%",
                  backgroundPosition: "center",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  {key.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  {key.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  style={{
                    backgroundColor: "#931F1D",
                    color: "#fff",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    marginLeft: "50px",
                    marginBottom: "10px",
                  }}
                  onClick={() => {
                    window.open(key.link);
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </>
  );
}
