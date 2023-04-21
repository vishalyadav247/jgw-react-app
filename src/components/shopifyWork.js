import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../work_Images/sociallydistantcakes_logo.png';
import imga from '../work_Images/sociallydistantcakes_image.png'

export default function ShopifyWork() {
    const LinkCss = {
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: 'poppins',
        padding: '11px 30px',
        backgroundColor: '#ffc906',
        borderRadius: '23px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        color: '#000000'
    }
    return (
        <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'1fr 1fr 1fr'}}>
            <Box sx={{gridArea:'1/1/2/2'}}>
                <img src={logo} alt='About Shopify' />
            </Box>
            <Box sx={{gridArea:'2/1/3/2'}}>
                <Typography>Socially Distant Cakes is India’s first
                    e-cupcakery that allows you to send freshly baked,
                    delicious, personalized cupcakes to your loved ones
                    from the comfort of your own home.
                </Typography>
            </Box>
            <Box sx={{gridArea:'3/1/4/2'}}>
                <a href='/shopify' style={LinkCss}>View Website</a>
            </Box>
            <Box sx={{gridArea:'1/2/4/3'}}>
                 <img src={imga} alt='About Shopify' />
            </Box>
        </Box>
    )
}
