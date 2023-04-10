import React from 'react';
import Box from '@mui/material/Box'
import HomeBanner from './components/HomeBanner';
import contactBanner from './images/banner2.jpg'

export default function Contact() {
  return (
    <>
      <Box>
        <HomeBanner banner={contactBanner}
          title='Contact Us'
          content='Wheather you’re looking for a stunning website – or a digital 
          marketing campaign to improve your top and bottom line, We’ll be happy 
          to help and love to hear from you. '/>
      </Box>
    </>
  )
}
