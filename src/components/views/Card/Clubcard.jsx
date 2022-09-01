
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import ihlogo from '../../../Assets/Ih-logo.png';
import swe from '../../../Assets/swe-logo.png';
import gdsc from '../../../Assets/gdsc-logo.png';
import { Link } from "react-router-dom";

export default function clubcard(props) {

  // const card = [

  //   {
  //     title: 'Innovators Hub',
  //     description: 'The major goal of Innovators Hub, which...',
  //     img : ihlogo,
      
  //   },

  //   {
  //     title: 'SWE',
  //     description: 'Summary : The Society of Women Engineer...',
  //     img : swe,
  //   },

  //   {
  //     title: 'GDSC',
  //     description: 'Google Developer Student Clubs (GDSC)...',
  //     img : gdsc,
  //   },

    
  
  // ]
   

  return (
    <>
    <Container style={{
      marginTop: "50px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
      fontFamily: "Poppins"
    }}>
     {
      props.cards.map((card, idx)=>{
        return(
          <Card sx={{ maxWidth: 280 , borderRadius: '20px', marginTop: '20px' }}>
          <CardMedia
            component="img"
            height="240"
            image= {card.image}
            alt="green iguana"
            style={{
              width: '100%',
              backgroundPosition: 'center',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontFamily="Poppins, sans-serif" fontWeight = "bold">
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Link to={`${card.clubNo}`} style = {{textDecoration: "none"}}>  
            <Button size="small" style={{
              backgroundColor: '#931F1D',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              margin: '10px 0px',
              fontFamily: 'Poppins'
            }}>Read More</Button></Link>
          </CardActions>
        </Card>
        )
      })
     } 
    </Container>
      
    </>
  );
}
