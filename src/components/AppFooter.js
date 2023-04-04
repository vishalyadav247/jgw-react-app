import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Map from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Clutch from '../images/clutch.png'

export default function AppFooter() {
    const [fcHeight,setFcHeight]= useState({
        height1:'0px',
        height2:'0px',
        height3:'0px',
    });
    const [accordianIcon,setAccordianIcon]= useState('+');
    const [accordianIcon2,setAccordianIcon2]= useState('+');
    const [accordianIcon3,setAccordianIcon3]= useState('+')

    const fcShow1=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height1:'210px'})
        })
    }
    const fcShow2=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height2:'60px'})
        })
    }
    const fcShow3=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height3:'150px'})
        })
    }
    const fcHide1=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height1:'0px'})
        })
    }
    const fcHide2=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height2:'0px'})
        })
    }
    const fcHide3=()=>{
        setFcHeight((obj)=>{
            return ({...obj,height3:'0px'})
        })
    }
    const fcShowHide1=()=>{
        if(accordianIcon === '+'){
            fcShow1()
            setAccordianIcon('-')
        }else{
            fcHide1()
            setAccordianIcon('+')
        }
    }
    const fcShowHide2=()=>{
        if(accordianIcon2 === '+'){
            fcShow2()
            setAccordianIcon2('-')
        }else{
            fcHide2()
            setAccordianIcon2('+')
        }
    }
    const fcShowHide3=()=>{
        if(accordianIcon3 === '+'){
            fcShow3()
            setAccordianIcon3('-')
        }else{
            fcHide3()
            setAccordianIcon3('+')
        }
    }
    const footerBoxCss = {
        display: "grid",
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr', lg: "1fr 1fr 1fr 1fr 1fr" },
        gridGap: "20px",
        gridRowGap: {xs: '25px', sm: '35px', lg: '20px' },
        maxWidth: "1200px",
        margin: "auto",
        paddingTop: "40px",
        paddingBottom: {xs:"20px",sm:'0px'},
        color: "#ffffff"
    }
    const headingText = {
        fontFamily: "poppins",
        fontSize: "22px",
        fontWeight: "700",
        marginBottom: {xs:'15px',sm:"30px"}
    }
    const footerLinks = {
        fontFamily: "open sans",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "30px"
    }
    return (
        <>
            <Box className="footerWraper" sx={{ backgroundColor: "#00438b", minHeight: "422px", padding: { xs: '20px', md: '25px', lg: '0px' } }}>
                <Box className="footerBox" sx={footerBoxCss}>

                    {/* box one */}
                    <Box>
                        <Typography sx={headingText}>Who We Are</Typography>
                        <Box sx={{ display: "flex", paddingTop: "5px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "11px", letterSpacing: "1px" }}>REVIEWED ON</Typography>
                                <img src={Clutch} alt="abc" style={{ width: "82px", height: "23px", marginTop: "3px" }} />
                            </Box>
                            <Box sx={{ marginLeft: "15px", marginTop: "0px" }}>
                                <Typography sx={{ color: "#ff3d2e" }}>
                                    <StarIcon />
                                    <StarIcon sx={{ marginLeft: "-3px" }} />
                                    <StarIcon sx={{ marginLeft: "-3px" }} />
                                    <StarIcon sx={{ marginLeft: "-3px" }} />
                                    <StarIcon sx={{ marginLeft: "-3px" }} />
                                </Typography>
                                <Typography sx={{ fontSize: "14px", letterSpacing: "1px", paddingLeft: "5px", marginTop: "-3px" }}>6 REVIEWS</Typography>
                            </Box>
                        </Box>
                    </Box>


                    {/* box second */}
                    <Box>
                        <Typography sx={headingText}>What We Do
                            <Typography sx={{ float: "right", display: { xs: 'block', md: 'none' }, marginRight: '10px', fontSize: '26px' }} onClick={fcShowHide1}>{accordianIcon}</Typography>
                        </Typography>
                        <Box sx={{height:{xs:fcHeight.height1,md:'auto',overflow:'hidden',transition:'0.4s all linear'}}}>
                            <Typography sx={footerLinks}>Search Engine Optimisation</Typography>
                            <Typography sx={footerLinks}>Social Media Marketing</Typography>
                            <Typography sx={footerLinks}>Paid Search Marketing</Typography>
                            <Typography sx={footerLinks}>Content Marketing</Typography>
                            <Typography sx={footerLinks}>Web Designing</Typography>
                            <Typography sx={footerLinks}>Logo Design</Typography>
                            <Typography sx={footerLinks}>Software Development</Typography>
                        </Box>
                    </Box>


                    {/* box third */}
                    <Box>
                        <Typography sx={headingText}>Our Work
                            <Typography sx={{ float: "right", fontSize: '22px', display: { xs: 'block', md: 'none', marginRight: '10px', fontSize: '26px' } }} onClick={fcShowHide2}>{accordianIcon2}</Typography>
                        </Typography>
                        <Box sx={{height:{xs:fcHeight.height2,md:'auto'},overflow:'hidden',transition:'0.2s all linear'}}>
                            <Typography sx={footerLinks}>Seo Results</Typography>
                            <Typography sx={footerLinks}>Web Design Portfolio</Typography>
                        </Box>
                    </Box>


                    {/* box fourth */}
                    <Box >
                        <Typography sx={headingText}>Careers</Typography>
                        <Typography sx={headingText} id='footerBlog'>Our Blog</Typography>
                    </Box>


                    {/* box fifth */}
                    <Box>
                        <Typography sx={{ margin: {xs:"-25px 0px 30px 0px",sm:"-12px 0px 30px 0px",md:"25px 0px 30px 0px"}, fontFamily: "poppins", fontSize: "22px", fontWeight: "300" }}>
                            <Map fontSize='large' sx={{ border: "2px solid #ffffff", borderRadius: "50%", padding: "5px", position: "relative", top: "8px", left: "-5px" }} />
                            Contact<Typography sx={{ float: "right", display: { xs: 'block', md: 'none' }, marginRight: '10px', fontSize: '26px', paddingTop: '10px' }} onClick={fcShowHide3}>{accordianIcon3}</Typography>
                        </Typography>
                        <Box sx={{height:{xs:fcHeight.height3,md:'auto'},overflow:'hidden',transition:'0.3s all linear'}}>
                            <Typography sx={{ fontSize: "17px", fontFamily: "open sans", fontWeight: "300", marginBottom: "20px", lineHeight: '30px' }} >
                                #Bay: 105, <br />
                                Sweetball Business Centre,<br />
                                A - 74, Sector 63, Noida,<br />
                                Uttar Pradesh 201301
                            </Typography>
                        </Box>
                        <Box>
                        <Typography sx={headingText}>Follow Us</Typography>
                            <Typography sx={{ marginLeft: "-4px" }}><FacebookIcon fontSize='large' sx={{ marginRight: "15px" }} /><TwitterIcon fontSize='large' sx={{ marginRight: "15px" }} /><LinkedInIcon fontSize='large' sx={{ marginRight: "15px" }} /></Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
            {/* footer Strip */}
            <Box sx={{ backgroundColor: "#003c8c", height: "60px", color: '#ffffff', fontWeight: '300', fontFamily: 'open sans', fontSize: '12px', padding: { xs: '0px 20px', md: '0px 25px', lg: '0px' } }}>
                <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', padding: '0px' }}>
                        <li style={{ padding: '5px 10px 5px 0px' }}>About</li>
                        <li style={{ padding: '5px 10px 5px 0px' }}>Blog</li>
                        <li style={{ padding: '5px 10px 5px 0px' }}>Contact</li>
                    </ul>
                    <Typography sx={{ fontWeight: '300', fontFamily: 'open sans', fontSize: '12px' }}>© 2017 Justgoweb Digital ® Delhi</Typography>
                </Box>
            </Box>
        </>
    )
}
