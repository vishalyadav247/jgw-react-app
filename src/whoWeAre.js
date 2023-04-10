import React from 'react';
import HeadingWithContent from './components/HeadingWithContent';
import SingleHeading from './components/SingleHeading';
import TeamCardWrapper from './components/TeamCardWrapper';
import ManagementTeamWrapper from './components/ManagementTeamWrapper';
import Box from '@mui/material/Box'

export default function WhoWeAre() {
  return (
    <>
    <div style={{backgroundColor:'black',height:'84px',width:'100%',position:'sticky',top:'0px'}}></div>
      <Box sx={{padding:{xs:'20px'}}}>
      <HeadingWithContent 
      positionFromTop='12px' 
      title='Who We Are' 
      content='At Justgoweb, we help businesses leverage digital marketing solutions 
        that drive leads, brand engagement and most importantly ROI.  We have 
        best breed of marketing professionals who take a deep dive to understand 
        your business and propose solutions that deliver results. Our team has 
        extensive experience in search engine optimization, paid search, display 
        advertising and social media marketing.' 
        titleSizeSm='35px'
        titleSizeLg='42px'/>
        
      <HeadingWithContent 
      positionFromTop='59px' 
      title='Meet Our Justgoweb Ninjas'
      content='We have really exiting team of super ninjas who work together for the 
      growth of your business. Team has the right mix with problem solvers and solution 
      creators who are passionate about delivering results.' 
      titleSizeSm='28px'
      titleSizeLg='35px'/>

      <SingleHeading  
      title="Management" 
      heightSm='120px' 
      heightLg='120px'
      titleSizeSm='28px'
      titleSizeLg='30px'/>
      <ManagementTeamWrapper />

      <SingleHeading  
      title="Our Team"
      heightSm='120px' 
      heightLg='120px'
      titleSizeSm='28px'
      titleSizeLg='30px' />

      <TeamCardWrapper />
      </Box>
    </>
  )
}
