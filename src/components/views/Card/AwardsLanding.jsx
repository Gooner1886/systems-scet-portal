import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo3 from '../../../Assets/logo3.jpg';

export default function AwardsLanding() {
  return (
    <>
         <Card sx={{ maxWidth: 445, border: '0.5 solid black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          width="40"
          image= {'https://media-exp1.licdn.com/dms/image/C4D22AQGsj4hnoncnzg/feedshare-shrink_800/0/1658406785905?e=1665014400&v=beta&t=Nike3e_KTCLCLonwfhu0C0qXCxxAyrW8HsOyuZU6AcM'}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              The three students of our Engineering department have been selected by Amazon with a CTC of 44.14 Lakh* + 2.5 Lakh worth of employee benefits.
              We couldn't have been prouder!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
