import React from 'react';
import Box from '@mui/material/Box'
import HomeBanner from './components/HomeBanner';
import contactBanner from './images/banner2.jpg'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  const contactWrapperCss={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  }
  const contactFormCss={
    maxWidth:'740px',
    border:'1px solid grey'
  }
  const formHeadingCss={
    fontSize:'35px',
    fontFamily:'poppins',
    fontWeight:'700',
    color:'#4a4a4a',
    margin:'85px 0px'
  }
  return (
    <>
      <Box>
        <HomeBanner banner={contactBanner}
          title='CONTACT US'
          content='Wheather you’re looking for a stunning website – or a digital 
          marketing campaign to improve your top and bottom line, We’ll be happy 
          to help and love to hear from you. '/>
      </Box>
      <Box sx={contactWrapperCss}>
        <Typography sx={formHeadingCss}>CONTACT US</Typography>
        <Box sx={contactFormCss}>
          <Typography>Tell us a bit about yourself</Typography>
          <TextField id="filled-basic" label="Full Name" variant="filled" />
          <TextField id="filled-basic" label="Email Address" variant="filled" />
          <TextField id="filled-basic" label="Phone Number" variant="filled" />
          <TextField id="filled-basic" label="My Website" variant="filled" />
          <Typography>What can we help you with</Typography>
          <TextField id="filled-basic" label="I am enquiring about.." variant="filled" />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </>
  )
}
