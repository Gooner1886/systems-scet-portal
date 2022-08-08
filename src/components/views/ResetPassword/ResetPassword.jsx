import React from 'react'
import { Box } from '@mui/system'
import { Typography ,TextField,} from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import {  useState,useRef} from "react"
import { Button, } from '@mui/material';
import Container from '@material-ui/core/Container';
import './ResetPassword.scss'
import {ResetPass,VerifyCaptcha} from "../../Auth_Functionality"
import Navbar from '../../views/Navbar/Navbar'
import ReCAPTCHA from 'react-google-recaptcha'

const SITE_KEY="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export default function ResetPassword() {

  const captcha_ref=useRef(null);
  const navigate=useNavigate();
  const [email_sent,setsuccess]=useState(false);
  
  const HandleSubmit = async (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        let email=data.get('email');

        const token=captcha_ref.current.getValue();
        captcha_ref.current.reset();

        if(!token)
        {
          alert("Please fill out captcha");
          return;
        }

        const success=await VerifyCaptcha(token);

        if(success)
          await ResetPass(email,setsuccess);
        else
          alert("Please fill out captcha");
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
                marginBottom:"1rem"
              }}
            />
            
            <ReCAPTCHA
              sitekey={SITE_KEY}
              ref={captcha_ref}
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
