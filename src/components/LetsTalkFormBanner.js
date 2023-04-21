import { Box } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LetsTalkFormBanner(props) {
    const obj = {
        maxWidth: "1920px",
        backgroundSize: "cover !important",
        background: `url(${props.banner})`,
        backgroundPosition: "center !important",
        paddingTop:'102px',
        paddingBottom:'50px'
    }
    const titleCss = {
        color: '#ffffff',
        fontSize: '37px',
        fontFamily: 'open sans',
        fontWeight: '700',
        marginTop: '65px',
        letterSpacing: '0.7px'
    }
    const descCss = {
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'open sans',
        margin: '15px 0px 63px 0px'
    }
    const linkCss = {
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
        <>
        <Box className="homeBanner" sx={obj}>
            <Box sx={{ maxWidth: '1200px', margin: 'auto', height: "100%", display: 'flex' }}>
                <Box sx={{ width: '61.5%',paddingRight:'50px' }}>
                    <Typography sx={titleCss}>{props.title}</Typography>
                    <Typography sx={descCss}>{props.description}</Typography>
                    <Link to={props.linkAddress} style={linkCss}>{props.buttonText}</Link>
                </Box>
                <Box sx={{ width: '38.5%' ,backgroundColor:'#ffffff',borderRadius:'12% 0px 0px 0px',overflow:'hidden'}}>
                    <Box sx={{backgroundColor:'#ededed'}}>
                        <Typography sx={{fontSize:'25px',fontFamily:'open sans',textAlign:'center',color:'#00438b',fontWeight:'600',padding:'32px 0px 17px 0px',backgroundColor:'#ffffff'}}>Let's talk Shopify Plus</Typography>
                        <Box sx={{ margin: '20px 0px 0px 0px', display: 'grid',padding:'0px 20px 20px 20px',gridGap:'15px' }} className='contactUpperInputWrapper'>
                            <TextField className='letsTalkFields' label="Full Name" variant="filled"/>
                            <TextField className='letsTalkFields' label="Email Address" variant="filled" />
                            <TextField className='letsTalkFields' label="Phone Number" variant="filled" />
                            <TextField className='letsTalkFields' label="Your Website Url" variant="filled" />
                            <TextField className='letsTalkFields' label="I am enquiring about.." variant="filled"/>
                            <Button variant="contained" sx={{marginTop:'10px',borderRadius:'23px',height:'45px',fontSize:'16px'}}>Submit</Button>
                        </Box>
                        <Typography sx={{textAlign:'center',paddingBottom:'20px'}}>* 100% Privacy. We will not spam you.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}



