import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SingleHeading(props) {
  const BgText={
      position:'absolute',
      left:'50%',
      top:'50%',
      translate:'-50% -50%',
      color:'#f6f5f5',
      fontSize:{xs:'4em',sm:'7em'},
      zIndex:'-1',
      fontWeight:'700',
      fontFamily:'poppins',
      textTransform:'uppercase'
  }
  return (
   <Box sx={{height:{xs:"160px",md:"200px"},display:'flex',justifyContent:"center",alignItems:"center",color:"#474747",position:'relative'}} className="pageWidth">
    <Typography className='mainHeading' sx={{textAlign:"center"}}>
      {props.title}
    </Typography>
    <Typography sx={BgText}>{props.bgText}</Typography>
   </Box>
  )
}
