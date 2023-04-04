import { Box } from '@mui/material';
import React from 'react';
import OverText from './OverText';

export default function HomeBanner(props) {
  const obj = {
    maxWidth: "1920px",
    height: " 505px",
    backgroundSize: "cover !important",
    background: `url(${props.banner})`,
    backgroundPosition: "center !important",
  }
  return (
    <Box className="homeBanner" sx={obj}>
      <OverText title={props.title} content={props.content}/>
    </Box>
  )
}
