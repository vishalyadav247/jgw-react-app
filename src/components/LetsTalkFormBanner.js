import { Box } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LetsTalkFormBanner(props) {
    const obj = {
        maxWidth: "1920px",
        height: "100vh",
        backgroundSize: "cover !important",
        background: `url(${props.banner})`,
        backgroundPosition: "center !important",
    }
    const titleCss = {
        color: '#ffffff',
        fontSize: '37px',
        fontFamily: 'open sans',
        fontWeight: '700',
        marginTop: '20px'
    }
    const descCss = {
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'open sans',
        margin: '10px 0px 30px 0px'
    }
    const linkCss = {
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: 'poppins',
        padding: '13px 30px',
        backgroundColor: '#ffc906',
        borderRadius: '23px',
        fontWeight: '700',
        letterSpacing: '1px',
        color: '#000000'
    }
    return (
        <>
        <Box className="homeBanner" sx={obj}>
            <Box sx={{ maxWidth: '1200px', margin: 'auto', height: "100%", display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '65%' }}>
                    <Typography sx={titleCss}>{props.title}</Typography>
                    <Typography sx={descCss}>{props.description}</Typography>
                    <Link to={props.linkAddress} style={linkCss}>{props.buttonText}</Link>
                </Box>
                <Box sx={{ width: '35%' ,backgroundColor:'#ffffff'}}>
                    <Box>
                        <Typography >Let's talk Shopify Plus</Typography>
                        <Box sx={{ margin: '20px 0px', display: 'grid' }} className='contactUpperInputWrapper'>
                            <TextField id="filled-basic" label="Full Name" variant="filled" />
                            <TextField id="filled-basic" label="Email Address" variant="filled" />
                            <TextField id="filled-basic" label="Phone Number" variant="filled" />
                            <TextField id="filled-basic" label="My Website" variant="filled" />
                            <TextField id="filled-basic" label="I am enquiring about.." variant="filled" sx={{height:'100px'}}/>
                            <Button variant="contained">Submit</Button>
                        </Box>
                        <Typography >What can we help you with</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}