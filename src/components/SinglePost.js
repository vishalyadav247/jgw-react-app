import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import moment from 'moment';


export default function SinglePost() {
  const postId = window.location.pathname;
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});


  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(axios.get(`https://www.justgoweb.com/wp-json/wp/v2${postId}`).then((response) => {
            const posts = response.data;
            console.log(posts);
            // console.log(posts.yoast_head_json.schema['@graph'][4].description);
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

      Promise.all([p1, p2]).then((values) => {
        // console.log(values); 
      });
    }
    my()

  }, [])

  const loaderCss = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '40px'
  }
  const titleCss={
    fontSize:'32px',
    marginBottom:'30px',
    fontFamily:'poppins'
  }

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {data.id ? (
        <Box sx={{ maxWidth: '1200px', margin: 'auto', padding: '50px 0px', overflow: 'hidden' }}>
          <Box sx={{ maxWidth: '800px' }}>
            <Typography sx={titleCss} dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
            <img src={data.yoast_head_json.og_image[0].url} alt="blogImage" />
            <Typography sx={{fontFamily:"open sans",fontSize:'17px'}} dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
            <Typography sx={{margin:'70px 0px 20px 0px',borderBottom:'1px solid rgb(252, 176, 64)',borderTop:'1px solid rgb(252, 176, 64)',padding:'10px 0px'}}>
                    <span>{moment(data.date).format('MMMM Do , YYYY')}</span>
                    <span> | {categories[data.categories[0]]} {data.categories[1] ? ", " + categories[data.categories[1]] : ""}</span>
                  </Typography>
            <Typography sx={{fontFamily:'poppins',fontSize:'20px',color:'#00438b'}}>About the Author: {data.yoast_head_json.schema['@graph'][4].name}</Typography>
            <Box sx={{display:'flex',margin:'30px 0px 20px 0px' }}>
              <img src={data.yoast_head_json.schema['@graph'][4].image['url']} alt="blogImage" style={{  width: '90px' }}/>
              <Typography sx={{padding:'0px 0px 0px 20px'}}>{data.yoast_head_json.schema['@graph'][4].description}</Typography>
            </Box>
            
          </Box>
        </Box>
      )
        : <Box sx={loaderCss}>Loading...</Box>}



    </>
  )
}
