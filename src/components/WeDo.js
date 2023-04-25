import React from 'react'
import { Box, Typography } from '@mui/material';
import Wedo from '../images/wedo.jpg'

export default function WeDo() {
    const TextCss={
        color:"#000000",
        textAlign:"center",
        fontSize:{xs: "20px", md: "26px"},
        fontWeight:"700",
        width:{xs: "100%", lg: "250px",xl:"95%"},
        height:{xs: "50px",sm:"30px", lg: "75px"},
        margin:"auto",
        fontFamily:"poppins"
    }
    return (
        <>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, height:{xs:"740px",sm:"650px"}, overflow: "hidden" }} className='weDo'>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gridTemplateRows: { xs: "185px", sm: "325px 325px" } }} className="wedoLeft">
                    <Box sx={{ backgroundColor: " rgb(255, 232, 255)" }} className="center">
                        <Box sx={{ position: "absolute" }}>
                            <Typography sx={TextCss}>&nbsp;&nbsp;WEBSITE & DESIGNING</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: " rgb(174, 214, 117)" }} className="center">
                        <Box sx={{ position: "absolute" }}>
                            <Typography sx={TextCss}>&nbsp;E-COMMERCE & DEVELOPMENT</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: " rgb(141, 200, 253)" }} className="center">
                        <Box sx={{ position: "absolute" }}>
                            <Typography sx={TextCss}>&nbsp;SEARCH ENGINE OPTIMIZATION</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: " rgb(253, 245, 118);" }} className="center">
                        <Box sx={{ position: "absolute" }}>
                            <Typography sx={TextCss}>SOCIAL MEDIA MARKETING</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="wedoRight" sx={{ display: { xs: "none", lg: "block" } }}>
                    <img src={Wedo} alt="Website & Design" loading='lazy' />
                </Box>
            </Box>
        </>
    )
}
