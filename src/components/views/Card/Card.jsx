import React from 'react'
import { Box } from '@mui/system'
import { Typography ,TextField,} from '@material-ui/core'
import { Button, } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import '../Card/Card.scss'


export default function Card() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <>

    <Container maxWidth= 'sm' className='contain'>
         <Box   className='login' style={{
                marginTop: '150px',
                marginLeft: '15%',
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
            </Container>
    
    
    
    </>
  )
}
