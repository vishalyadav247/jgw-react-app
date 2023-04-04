import React from 'react';
import Box from '@mui/material/Box';
import TeamCard from './TeamCard';
import Sujeet from '../images/sujeet.jpg';
import Kritika from '../images/kritika.jpg';
import Vishal from '../images/vishal.jpg';
import Aakansha from '../images/aakanksha.png';
import Rizwan from '../images/rizwan.jpg';
import Deepak from '../images/deepak.jpg';

export default function TeamCardWrapper() {
  const TeamCardWrapperCss={
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    maxWidth:'1200px',
    margin:'auto'
  }
  return (
    <Box sx={TeamCardWrapperCss}>
      <TeamCard 
      image={Sujeet} 
      name='Sujeet Kumar' 
      desination='Project Manager (All Rounder)' 
      description='Managing Development projects is fun. I love using tools like ASANA & Trello for project management. '/>
      <TeamCard 
      image={Kritika} 
      name='Kritika Prasad' 
      desination='Sr. SEO Associate' 
      description='SEO is science and all about research.'/>
      <TeamCard 
      image={Vishal} 
      name='Vishal Yadav' 
      desination='Shopify Developer' 
      description='I eat, drink and breathe Shopify.'/>
      <TeamCard 
      image={Aakansha} 
      name='Aakanksha Singh' 
      desination='Content Marketer' 
      description='Content is the backbone of digital marketing.'/>
      <TeamCard 
      image={Rizwan} 
      name='Mohd. Rizwan' 
      desination='SEO Associate' 
      description='SEO is science and all about research.'/>
      <TeamCard 
      image={Deepak} 
      name='Deepak Kumar' 
      desination='SEO Associate' 
      description='SEO is science and all about research.'/>
    </Box>
  )
}
