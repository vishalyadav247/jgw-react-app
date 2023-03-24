import { Box } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service4.jpg'


export default function AgencyServices() {
    return (
        <Box className="pageWidth" sx={{display:"flex",flexWrap:"wrap"}}>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <img src={service1} style={{  }} alt="logo" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <img src={service2} style={{  }} alt="logo" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <img src={service3} style={{  }} alt="logo" />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"50%",md:"25%"}}}>
                <img src={service4} style={{  }} alt="logo" />
            </Box>
        </Box>
    )
}
