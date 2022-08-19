import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo3 from '../../../Assets/logo3.jpg';

export default function ResearchLanding() {
  return (
    <>
         <Card sx={{ maxWidth: 380, border: '0.5 solid black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          width="40"
          image= {logo3}
          alt="green iguana"
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum tellus, viverra non velit laoreet, auctor placerat enim.
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
    </>
  )
}
