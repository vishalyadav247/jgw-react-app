import React from 'react';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import moment from 'moment';
import { Link } from "react-router-dom";


export default function SinglePost(props) {
  const postId = window.location.pathname;
  const {data,categories} = props;
  const [post,setPost] = useState({})

  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
          for(let i of data){
            if(postId.includes(i.id)){
              const post = i;
              resolve(post)
          }
          }   
      });
      p1.then((value)=>{
          setPost(value)
      })
      
    }
    my()

  }, [post,data])

  const loaderCss = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '30px'
  }
  const titleCss={
    fontSize:'32px',
    marginBottom:'30px',
    fontFamily:'poppins'
  }

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {post.id ? (
        <Box sx={{ maxWidth: '1200px', margin: 'auto', padding:{xs: '30px 20px 30px 20px',lg: '50px 0px 50px 0px'}, overflow: 'hidden' }}>
          <Box sx={{fontSize:'13px',padding:'8px 0px',boxShadow: '1px 1px 2.5px #ded8f4',display:{xs:'none',md:'block',marginBottom:'30px'}}}>
            <span><Link to='/blogs' style={{textDecoration:'none',fontWeight:'600',color:'black'}}>Blogs</Link></span><span style={{padding:'0px 6px'}}>|</span><span dangerouslySetInnerHTML={{ __html: post.title.rendered }}></span>
          </Box>
          <Box sx={{ maxWidth: '800px'}}>
            <Typography sx={titleCss} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
            <Typography sx={{fontFamily:"open sans",fontSize:'17px'}} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <Typography sx={{margin:'70px 0px 20px 0px',borderBottom:'1px solid rgb(252, 176, 64)',borderTop:'1px solid rgb(252, 176, 64)',padding:'10px 0px'}}>
                    <span>{moment(post.date).format('MMMM Do , YYYY')}</span>
                    <span> | {categories[post.categories[0]]} {post.categories[1] ? ", " + categories[post.categories[1]] : ""}</span>
                  </Typography>
            <Typography sx={{fontFamily:'poppins',fontSize:'20px',color:'#00438b'}}>About the Author: {post.yoast_head_json.schema['@graph'][4].name}</Typography>
            <Box sx={{display:'flex',margin:'30px 0px 20px 0px' }}>
              <img src={post.yoast_head_json.schema['@graph'][4].image['url']} alt="blogImage" style={{  width: '90px' }}/>
              <Typography sx={{padding:'0px 0px 0px 20px'}}>{post.yoast_head_json.schema['@graph'][4].description}</Typography>
            </Box>
            
          </Box>
        </Box>
      )
        : <Box sx={loaderCss}><Box style={{width:'200px'}}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
