import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import logo from '../../../Assets/logo.png'

export default function ImageCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="100"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            odio arcu, sollicitudin at risus semper, consequat ultrices felis.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}