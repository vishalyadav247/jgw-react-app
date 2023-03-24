import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SingleHeading(props) {
  return (
   <Box sx={{height:"200px",display:'flex',justifyContent:"center",alignItems:"center"}} className="pageWidth">
    <Typography className='mainHeading' sx={{textAlign:"center"}}>
      {props.title}
    </Typography>
   </Box>
  )
}
