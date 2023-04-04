import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SingleHeading(props) {
  const SingleHeadingWrapperCss = {
    height: { xs: props.heightSm, md: props.heightLg },
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    color: "#474747"
  }
  const titleCss = {
    fontSize:{xs:props.titleSizeSm,md:props.titleSizeLg},
    fontFamily: 'poppins',
    color: '#4a4a4a',
    fontWeight: '700',
    textAlign: 'center'

  }
  return (
    <Box sx={SingleHeadingWrapperCss} className="pageWidth">
      <Typography sx={titleCss}>
        {props.title}
      </Typography>
    </Box>
  )
}
