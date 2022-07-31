import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { margin } from '@mui/system';
import './LoginForm.scss'
import bg from '../../../Assets/login-bg.png'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import Card from '../../../components/views/Card/Card';

export default function LoginForm() {
    const theme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <Box className='Main'>

        <Card/>
       
      {/* <Container maxWidth= 'sm' className='contain'>
        
            <Box className='login' style={{
                marginTop: '100px',
            }}>
                <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{
                backgroundColor: '#fff',
                border: 'none',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{
                backgroundColor: '#fff',
                border: 'none',
              }}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{
                    color: '#931F1D',
                }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',

            }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: '#931F1D'}}
            >
              Sign In
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#898484'}}
            >
              Reset
            </Button>
            </Box>
          </Box>
            </Box>
       
      </Container> */}


    
    
    </Box>
  )
}
