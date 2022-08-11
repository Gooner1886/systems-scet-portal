
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

export default function clubcard() {

  const card = [

    {
      title: 'Innovators Hub',
      description: 'The major goal of Innovators Hub, which...',
      img : ihlogo,
      
    },

    {
      title: 'SWE',
      description: 'Summary : The Society of Women Engineer...',
      img : swe,
    },

    {
      title: 'GDSC',
      description: 'Google Developer Student Clubs (GDSC)...',
      img : gdsc,
    },

    
  
  ]
   

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
    }}>
     {
      card.map((key)=>{
        return(
          <Card sx={{ maxWidth: 280 , borderRadius: '20px', marginTop: '20px' }}>
          <CardMedia
            component="img"
            height="240"
            image= {key.img}
            alt="green iguana"
            style={{
              width: '100%',
              backgroundPosition: 'center',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {key.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="left">
              {key.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{
              backgroundColor: '#931F1D',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              marginLeft: '50px',
              marginBottom: '10px',
            }}>Read More</Button>
          </CardActions>
        </Card>
        )
      })
     } 
    </Container>
      
    </>
  );
}
