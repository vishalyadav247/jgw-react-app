import { Box, Typography, Button, Divider } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Blogs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function my() {
      await axios.get('https://www.justgoweb.com/wp-json/wp/v2/posts').then((response) => {
        const posts = response.data;
        setData(posts);
      })
    }
    my()
  },[])



  const wrapperCss = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
    gridGap: "40px",
    maxWidth: "1200px",
    margin: "auto"
  }
  const itemCss = {
    borderRadius: "10px",
    overflow: "hidden !important"
  }
  const BlogTitle = {
    color: "white",
    fontFamily: "poppins",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "30px",
    // height: { xs: "auto", md: "153px", lg: "auto" },
    height: '90px',
    overflow: 'hidden',
    // overflow: { xs: "visible", md: "hidden", lg: "visible" }
  }
  const MiddleSpan = {
    borderLeft: "1px solid #ffffffa5",
    borderRight: "1px solid #ffffffa5",
    padding: "0px 5px",
    margin: "0px 5px"
  }
  const BlogCardReadMoreBtn = {
    marginTop: "25px",
    backgroundColor: "#fcb040",
    fontSize: "12px",
    fontFamily: "open sans",
    borderRadius: "0px",
    textTransform: "capitalize",
    padding: "10px 20px"
  }
  const loaderCss = {
    width:'100%',
    height:'90vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#272bff',
    fontSize:'40px'
}

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {data[0] ? (
      <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '60px 20px', md: '60px 30px', lg: '60px 0px' } }}>
        <Box className="blogsWrapper" sx={wrapperCss}>
        
          {data.map(post => (
            <Box className="blogItem" sx={itemCss} key={post.id}>
              <Box className='blogImageWrapper'>
                <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
              </Box>
              <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px", marginTop: "-6px" }}>
                <Typography className='blogTitle' sx={BlogTitle}>{post.yoast_head_json.og_title}</Typography>

                <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                  <span>By {post.yoast_head_json.twitter_misc['Written by']}</span>
                  <span style={MiddleSpan}>December 28th, 2020</span>
                  <span>Categories: Shopify, Web Development</span>
                </Typography>
                <Button variant="contained" sx={BlogCardReadMoreBtn} ><Link to={`/posts/${post.id}`}>Read More</Link></Button>
              </Box>
            </Box>
          ))}
          

        </Box>

      </Box>
      ) 
          : <Box sx={loaderCss}>Loading...</Box>}

    </>
  )
}
