import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function HeadingWithContent(props) {
    const wrapper={
        paddingTop:props.positionFromTop,
        maxWidth:'1200px',
        margin:'auto'
    }
    const title={
        fontSize:{xs:props.titleSizeSm,md:props.titleSizeLg},
        fontFamily:'poppins',
        color:'#4a4a4a',
        fontWeight:'700',
        textAlign:'center',
        marginBottom:'27px'
    }
    const content={
        fontSize:'17px',
        fontFamily:'open sans',
        color:'#7a7a7a',
        fontWeight:'300',
        textAlign:'center',
        lineHeight:'1.8'
    }
  return (
    <>
      <Box sx={wrapper}>
        <Typography sx={title}>
            {props.title}
        </Typography>
        <Typography sx={content}>
        {props.content}
        </Typography>
      </Box>
    </>
  )
}
