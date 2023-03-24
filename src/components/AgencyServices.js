import { Box, CardMedia } from '@mui/material'
import React from 'react'
import Webdesign from '../images/Webdesign.jpg'



export default function AgencyServices() {
    return (
        <Box className="pageWidth" sx={{display:"flex",flexWrap:"wrap"}}>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <CardMedia src={Webdesign} sx={{ display:{xs:"none",md:"block"} }} alt="Website & Design" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <CardMedia src={Webdesign} sx={{ display:{xs:"none",md:"block"}}} alt="Seo" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <CardMedia src={Webdesign} sx={{ display:{xs:"none",md:"block"}}}alt="E-Commerce Development" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <CardMedia src={Webdesign} sx={{ display:{xs:"none",md:"block"}}} alt="Socisl Media" />
            </Box>
        </Box>
    )
}


