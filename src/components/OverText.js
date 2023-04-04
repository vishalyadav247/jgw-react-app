import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';

export default function OverText(props) {
    const styleObj = {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection:"column",
        color:"white",
        paddingTop:"20px"
    }
    const titleCss={
        fontSize:{xs:"32px",md:"37px"},
        marginBottom:"20px",
        textAlign:"center",
        fontFamily:"open sans",
        fontWeight:"700"
    }
    const contentCss={
        width: { xs: '90%', md: '70%' ,lg:"49%"},
        fontSize:'20px',
        textAlign:'center',
        letterSpacing:" 0.5px" ,
        fontFamily:"open sans"
    }
    return (
        <Box style={styleObj} sx={{ justifyContent:"center",paddingTop:{}}}>
            <Typography sx={titleCss}>{props.title}</Typography>
            <Divider style={{width:"180px",height:"5px",backgroundColor:"white",marginBottom:"25px"}}/>
            <Typography sx={contentCss}>
                {props.content}
            </Typography>
        </Box>
    )
}
