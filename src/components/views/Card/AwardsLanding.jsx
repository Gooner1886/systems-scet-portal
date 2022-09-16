import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo3 from '../../../Assets/logo3.jpg';

export default function AwardsLanding(props) {
  return (
    <>
         <Card sx={{ maxWidth: 445, border: '0.5 solid black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350px"
          width="50px"
          image= {props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
