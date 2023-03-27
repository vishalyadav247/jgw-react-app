import { Box } from '@mui/material';
import React from 'react';
import OverText from './OverText';

export default function HomeBanner() {
  const obj={
    maxWidth: "1920px",
    height:" 505px",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }
  return (
    <Box className="homeBanner" style={obj}>
     <OverText />
    </Box>
  )
}
