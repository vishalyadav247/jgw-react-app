import { Box, Typography, Button, Divider } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Blogs() {

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [tagId, setTagId] = useState('');

  useEffect(() => {
    function my() {
      const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(axios.get('https://www.justgoweb.com/wp-json/wp/v2/posts').then((response) => {
            const posts = response.data;
            setData(posts);
          }));
        }, 100);
      });
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(axios.get('https://www.justgoweb.com/wp-json/wp/v2/categories').then((response) => {
            const cat = response.data;
            const catList = {}
            for (let b of cat) {
              catList[b.id] = b.name;
            }
            setCategories(catList)
          }, 100)
          )
        })
      })
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            axios.get(`https://www.justgoweb.com/wp-json/wp/v2/tags`).then((response) => {
              const cat = response.data;
              const tagList = {}
              for (let b of cat) {
                tagList[b.id] = b.name;
              }
              for (let b in tagList) {
                if (tagList[b] == 'popular') {
                  setTagId(b);
                  break
                }
              }
            })

          )
        }, 100)
      })
      // p3.then(
      //   axios.get(`https://www.justgoweb.com/wp-json/wp/v2/posts?tags=${tagId}`).then((response) => {
      //     const cat = response.data;
      //     console.log(cat);
      //   })
      // )
     

      Promise.all([p1, p2, p3]).then((values) => {
        // console.log(values); 
      });
    }
    my()
  }, [])



  const wrapperCss = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
    gridGap: "40px",
    width: '67%'
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
    height: '90px',
    overflow: 'hidden',
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
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '40px'
  }

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {data[0] ? (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '60px 20px', md: '60px 30px', lg: '100px 0px' } }}>

          <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex' }}>
            <Box className="blogsWrapper" sx={wrapperCss}>
              {data.map(post => (
                <Box className="blogItem" sx={itemCss} key={post.id}>
                  <Box className='blogImageWrapper'>
                    <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                  </Box>
                  <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px", marginTop: "-6px" }}>
                    <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                    <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                      <span>By {post.yoast_head_json.twitter_misc['Written by']}</span>
                      <span style={MiddleSpan}>{moment(post.date).format('MMMM Do , YYYY')}</span>
                      <span>categories : {categories[post.categories[0]]} {post.categories[1] ? ", " + categories[post.categories[1]] : ""}</span>
                    </Typography>
                    <Button variant="contained" sx={BlogCardReadMoreBtn} ><Link to={`/posts/${post.id}`} style={{ color: '#ffffff', textDecoration: 'none' }}>Read More</Link></Button>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: '33%', padding: '0px 0px 0px 50px' }}>
              <Typography>{tagId}</Typography>
              <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Popular</Typography>
            </Box>
          </Box>

        </Box>
      )
        : <Box sx={loaderCss}>Loading...</Box>}

    </>
  )
}
