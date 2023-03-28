import React from 'react';
import Box from '@mui/material/Box';
import Blog1 from '../images/blog1.jpg';
import Blog2 from '../images/blog2.jpg';
import Blog3 from '../images/blog3.jpg';
import { Typography } from '@mui/material';


export default function OurBlogs() {
    const wrapperCss = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "50px",
        maxWidth: "1200px",
        margin: "auto"
    }
    const itemCss = {
        border: "1px solid red"
    }
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: '60px 0px' }}>
            <Box className="blogsWrapper" sx={wrapperCss}>
                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog1} alt="blogImage" />
                    </Box>
                    <Box className='blogContent'>
                        <Typography className='blogTitle'>Shopify vs Squarespace:
                            Who will be able to climb to the crest of the ecommerce world?</Typography>
                    </Box>
                </Box>
                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog2} alt="blogImage" />
                    </Box>
                    <Box className='blogContent'>
                        <Typography className='blogTitle'>Shopify vs Big Cartel –
                         Which platform would put an end to your research of building your website?</Typography>
                    </Box>
                </Box>
                <Box className="blogItem" sx={itemCss}>
                    <Box className='blogImageWrapper'>
                        <img src={Blog3} alt="blogImage" />
                    </Box>
                    <Box className='blogContent'>
                        <Typography className='blogTitle'>Shopify vs Volusion- 
                        The battle between the oldest ecommerce platform and the leading one</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
