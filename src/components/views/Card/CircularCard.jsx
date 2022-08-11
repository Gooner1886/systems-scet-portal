import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../../Assets/Circular-img.png';
import { Container } from "@mui/system";


export default function CircularCard() {

  const card = [

    {
      title: 'All Circulars',
      description: 'View all the circulars till date',
    },

    {
      title: '2021 Circulars',
      description: 'View all the circulars in 2021',
    },

    {
      title: '2022 Circulars',
      description: 'View all the circulars in 2022',
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
            image= {img}
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