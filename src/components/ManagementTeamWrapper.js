import React from 'react';
import Box from '@mui/material/Box';
import TeamCard from './TeamCard';
import Aditya from '../images/aditya.jpg';
import Priyanka from '../images/priyanka.jpg'

export default function ManagementTeamWrapper() {
  const ManagementTeamWrapperCss={
    display:'flex',
    justifyContent:'center',
    maxWidth:'1200px',
    margin:'auto',
    flexWrap:'wrap',
  }
  return (
    <Box sx={ManagementTeamWrapperCss}>
      <TeamCard 
      image={Aditya} 
      name='Aditya Khanna' 
      desination='Director and Founder' 
      description='SEO is powerful channel for any business. It is a game changer once you know the roadmap for success.'/>
      <TeamCard 
      image={Priyanka} 
      name='Priyanka Luthra Khanna' 
      desination='Co - Founder and HR Manager' 
      description='We don’t hire employees, we hire Ninjas.'/>
    </Box>
  )
}
