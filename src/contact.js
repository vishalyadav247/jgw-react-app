import React from 'react';
import Box from '@mui/material/Box'
import HomeBanner from './components/HomeBanner';
import contactBanner from './images/banner2.jpg'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  const contactWrapperCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding:{xs:'0px 25px',sm:'0px 0px'}
  }
  const contactFormCss = {
    maxWidth: '695px',
    width: '100%'
  }
  const formHeadingCss = {
    fontSize: '35px',
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#4a4a4a',
    margin: '110px 0px 55px 0px'
  }
  const formInnerHeadingCss = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#474747',
    fontFamily: 'poppins'
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
          <Typography sx={formInnerHeadingCss}>Tell us a bit about yourself</Typography>
          <Box sx={{ margin: '20px 0px', display: 'grid' }} className='contactUpperInputWrapper'>
            <TextField id="filled-basic" label="Full Name" variant="filled" />
            <TextField id="filled-basic" label="Email Address" variant="filled" />
            <TextField id="filled-basic" label="Phone Number" variant="filled" />
            <TextField id="filled-basic" label="My Website" variant="filled" />
          </Box>
          <Typography sx={formInnerHeadingCss}>What can we help you with</Typography>
          <Box sx={{ margin: '20px 0px 50px 0px', display: 'grid' }} className='contactLowerInputWrapper'>
            <TextField id="filled-basic" label="I am enquiring about.." variant="filled" sx={{height:'100px'}}/>
            <Button variant="contained" sx={{marginTop:'50px',borderRadius:'23px',height:'45px',fontSize:'16px'}}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
