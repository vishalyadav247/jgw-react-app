import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SingleHeading(props) {

  const SingleHeadingWrapperCss = {
    height: { xs: props.heightSm, md: props.heightLg },
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    color: "#474747",
    position:'relative'
  }

  const titleCss = {
    fontSize:{xs:props.titleSizeSm,md:props.titleSizeLg},
    fontFamily: 'poppins',
    color: '#4a4a4a',
    fontWeight: '700',
    textAlign: 'center'
  }

  const BgText={
    position:'absolute',
    left:'50%',
    top:'50%',
    translate:'-50% -50%',
    color:'#f6f5f5',
    fontSize:{xs:'4em',md:'7em'},
    zIndex:'-1',
    fontWeight:'700',
    fontFamily:'poppins',
    textTransform:'uppercase'
}
  return (
    <Box sx={SingleHeadingWrapperCss} className="pageWidth">
      <Typography sx={titleCss}>
        {props.title}
      </Typography>
      <Typography sx={BgText}>{props.bgText}</Typography>
    </Box>
  )
}
