import React from 'react'
import { Box } from '@mui/system'
import { Typography ,TextField,} from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { useEffect, useState,useContext } from "react"
import { Button, } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import './ResetPassword.scss'
import {ResetPass} from "../../Auth_Functionality"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../views/Navbar/Navbar'


export default function ResetPassword() {

  const navigate=useNavigate();
  const [email_sent,setsuccess]=useState(false);
  
  const HandleSubmit = async (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        let email=data.get('email');

        await ResetPass(email,setsuccess);
  };

  return (
    <Box className='Reset'>
    {email_sent?navigate("/"):undefined}
      <Navbar/>

    <Container maxWidth= 'sm' className='contain'>
         <Box   className='reset_dialog' style={{
                marginTop: '150px',
            }}>
                <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box component="form" onSubmit={HandleSubmit} noValidate sx={{ mt: 1 }}>
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
            
            <Box style={{
                display: 'flex',
                justifyContent: 'center',

            }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: '#931F1D'}}
            >
              Reset
            </Button>
            </Box>
          </Box>
            </Box>
            </Container>
    
    
    
    </Box>
  )
}
