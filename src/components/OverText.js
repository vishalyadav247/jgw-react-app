import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';

export default function OverText() {
    const styleObj = {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection:"column",
        color:"white",
        paddingTop:"20px"
    }
    return (
        <Box style={styleObj} sx={{ justifyContent:"center"}}>
            <Typography sx={{fontSize:{xs:"32px",md:"37px"},marginBottom:"20px",textAlign:"center",fontFamily:"open sans",fontWeight:"700"}}>DOMINATE THE COMPETITION</Typography>
            <Divider style={{width:"180px",height:"5px",backgroundColor:"white",marginBottom:"25px"}}/>
            <Typography sx={{ width: { xs: '90%', md: '70%' ,lg:"49%"},fontSize:'20px',textAlign:'center',letterSpacing:" 0.5px" ,fontFamily:"open sans"}}>
                Honest and ROI-Driven Digital Marketing Agency for small and large
                businesses. Trusted by more than 500 satisfied clients. We help businesses
                dominate all Digital Marketing Channels by implementing full-service digital
                solutions that drives results.
            </Typography>
        </Box>
    )
}
