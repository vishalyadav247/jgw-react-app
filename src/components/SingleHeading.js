import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SingleHeading(props) {
  return (
   <Box sx={{height:{xs:"160px",md:"200px"},display:'flex',justifyContent:"center",alignItems:"center",color:"#474747"}} className="pageWidth">
    <Typography className='mainHeading' sx={{textAlign:"center"}}>
      {props.title}
    </Typography>
   </Box>
  )
}
