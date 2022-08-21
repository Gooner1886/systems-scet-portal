import React, { useRef } from 'react'
import { Box } from '@mui/system'
import { Typography ,TextField,} from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { useEffect, useState,useContext } from "react"
import { Button, } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import './Card.scss'
import {LoginInterface,CheckSignIn,VerifyCaptcha} from "../../Auth_Functionality"
import Logged from '../../context'
import ReCAPTCHA from 'react-google-recaptcha'


const SITE_KEY="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


export default function Card() {

  const captcha_ref=useRef(null);
  const navigate=useNavigate();
  const [isLoggedIn,SetLogged]=useState(null);
  const user=useContext(Logged);

  
  const HandleSubmit = async (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let email=data.get('email');
        let password=data.get('password');

        const token=captcha_ref.current.getValue();
        captcha_ref.current.reset();

        if(!token)
        {
          alert("Please fill out captcha");
          return;
        }

        const success=await VerifyCaptcha(token);

        if(success)
        {
          await LoginInterface({"email":email,"password":password,"setter":user.setter});
          
          console.log(CheckSignIn(SetLogged));
        }
        else
          alert("Please fill out captcha");
  };
  
    
  CheckSignIn(SetLogged);
  useEffect(()=>{console.log("uid is",isLoggedIn)},[isLoggedIn]);


  return (
    <>
    <Container maxWidth= 'sm' className='contain'>
    {isLoggedIn?navigate("/about"):undefined}
         <Box   className='login' style={{
                marginTop: '150px',
                marginLeft: '15%',
            }}>
                <Typography component="h1" variant="h5">
            Sign in
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
            
            <ReCAPTCHA
              sitekey={SITE_KEY}
              ref={captcha_ref}
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
              onClick={()=>navigate("/reset")}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#898484'}}
            >
              Reset
            </Button>
            </Box>
          </Box>
            </Box>
            </Container>
    
    
    
    </>
  )
}
