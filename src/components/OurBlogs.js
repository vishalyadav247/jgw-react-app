import React from 'react';
import Box from '@mui/material/Box';
import Blog1 from '../images/blog1.jpg';
import Blog2 from '../images/blog2.jpg';
import Blog3 from '../images/blog3.jpg';
import { Button, Divider, Typography } from '@mui/material';


export default function OurBlogs() {
    const wrapperCss = {
        display: "grid",
        gridTemplateColumns: {xs:"1fr",sm:"1fr 1fr",md:"1fr 1fr 1fr"},
        gridGap: "40px",
        maxWidth: "1200px",
        margin: "auto"
    }
    const itemCss = {
        borderRadius:"10px",
        overflow:"hidden !important"
    }
    const BlogTitle = {
        color: "white",
        fontFamily: "poppins",
        fontSize: "24px",
        fontWeight: "400",
        lineHeight:"30px",
        height:{xs:"auto",md:"153px",lg:"auto"},
        overflow:{xs:"visible",md:"hidden",lg:"visible"}
    }
    const MiddleSpan = {
        borderLeft: "1px solid #ffffffa5",
        borderRight: "1px solid #ffffffa5",
        padding: "0px 5px",
        margin: "0px 5px"
    }
    const BlogCardReadMoreBtn={
        marginTop:"25px",
        backgroundColor:"#fcb040",
        fontSize:"12px",
        fontFamily:"open sans",
        borderRadius:"0px",
        textTransform:"capitalize",
        padding:"10px 20px"
    }
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', padding:{xs:'60px 20px',md: '60px 30px',lg: '60px 0px'} }}>
            <Box className="blogsWrapper" sx={wrapperCss}>

                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog1} alt="blogImage" />
                    </Box>
                    <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px",marginTop:"-6px" }}>
                        <Typography className='blogTitle' sx={BlogTitle}>Shopify vs Squarespace:
                            Who will be able to climb to the crest of the ecommerce world?</Typography>
                        <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                        <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                            <span>By Aditya Khanna</span>
                            <span style={MiddleSpan}>December 28th, 2020</span>
                            <span>Categories: Shopify, Web Development</span>
                        </Typography>
                        <Button variant="contained" sx={BlogCardReadMoreBtn}>Read More</Button>
                    </Box>
                </Box>

                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog2} alt="blogImage" />
                    </Box>
                    <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px",marginTop:"-6px" }}>
                        <Typography className='blogTitle' sx={BlogTitle}>Shopify vs Big Cartel – 
                        Which platform would put an end to your research of building your website?</Typography>
                        <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                        <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                            <span>By Aditya Khanna</span>
                            <span style={MiddleSpan}>December 27th, 2020</span>
                            <span>Categories: Shopify, Web Development</span>
                        </Typography>
                        <Button variant="contained" sx={BlogCardReadMoreBtn}>Read More</Button>
                    </Box>
                </Box>

                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog3} alt="blogImage" />
                    </Box>
                    <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px",marginTop:"-6px" }}>
                        <Typography className='blogTitle' sx={BlogTitle}>Shopify vs Volusion-
                         The battle between the oldest ecommerce platform and the leading one</Typography>
                        <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                        <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                            <span>By Aditya Khanna</span>
                            <span style={MiddleSpan}>December 25th, 2020</span>
                            <span>Categories: Shopify, Web Development</span>
                        </Typography>
                        <Button variant="contained" sx={BlogCardReadMoreBtn}>Read More</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
