import React from 'react';
import { useEffect, useState } from 'react';
import { Typography, Box,Button,TextField } from '@mui/material';
import moment from 'moment';
import { Link } from "react-router-dom";
import newsletterImage from '../images/newslatterformimage.jpg';
import EmailIcon from '../images/emailicon.png'


export default function SinglePost(props) {
  const [postId,setPostId] = useState(window.location.pathname);
  const { data, categories,popularPost } = props;
  const [post, setPost] = useState({});

  const [recentPost, setRecentPost] = useState([])
  const topScroll = () => {
    setTimeout(()=>{
      setPostId(window.location.pathname)
    },10)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }

  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
        const postArray = []
        for (let i = 0; i < 3; i++) {
          const post = data[i];
          postArray.push(post)
        }
        resolve(postArray)
      });
      p1.then((value) => {
        setRecentPost(value)
      })

    }
    my()

  }, [data])

  useEffect(() => {

    function my() {
      const p1 = new Promise((resolve, reject) => {
        for (let i of data) {
          if (postId.includes(i.id)) {
            const post = i;
            resolve(post)
          }
        }
      });
      p1.then((value) => {
        setPost(value)
      })

    }
    my()

  }, [postId,post,data])

  const loaderCss = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '30px'
  }
  const titleCss = {
    fontSize: '32px',
    marginBottom: '30px',
    fontFamily: 'poppins'
  }
 

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {post.id ? (
        <Box sx={{ maxWidth: '1200px', margin: 'auto', padding: { xs: '30px 20px 30px 20px', lg: '50px 0px 50px 0px' }, overflow: 'hidden' }}>
          <Box sx={{ fontSize: '13px', padding: '8px 0px', boxShadow: '1px 1px 2.5px #ded8f4', display: { xs: 'none', md: 'block', marginBottom: '30px' } }}>
            <span><Link to='/blogs' style={{ textDecoration: 'none', fontWeight: '600', color: 'black' }}>Blogs</Link></span><span style={{ padding: '0px 6px' }}>|</span><span dangerouslySetInnerHTML={{ __html: post.title.rendered }}></span>
          </Box>
          <Box sx={{ maxWidth: "1200px", display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ width: { xs: '100%', md: '67%' } }}>
              <Typography sx={titleCss} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
              <Typography sx={{ fontFamily: "open sans", fontSize: '17px' }} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              <Typography sx={{ margin: '70px 0px 20px 0px', borderBottom: '1px solid rgb(252, 176, 64)', borderTop: '1px solid rgb(252, 176, 64)', padding: '10px 0px' }}>
                <span>{moment(post.date).format('MMMM Do , YYYY')}</span>
                <span> | {categories[post.categories[0]]} {post.categories[1] ? ", " + categories[post.categories[1]] : ""}</span>
              </Typography>
              <Typography sx={{ fontFamily: 'poppins', fontSize: '20px', color: '#00438b' }}>About the Author: {post.yoast_head_json.schema['@graph'][4].name}</Typography>
              <Box sx={{ display: 'flex', margin: '30px 0px 20px 0px' }}>
                <img src={post.yoast_head_json.schema['@graph'][4].image['url']} alt="blogImage" style={{ width: '90px' }} />
                <Typography sx={{ padding: '0px 0px 0px 20px' }}>{post.yoast_head_json.schema['@graph'][4].description}</Typography>
              </Box>
            </Box>



            <Box sx={{ width: { xs: '100%', md: '33%' }, padding: { xs: '30px 0px 0px 0px', md: '12px 0px 0px 50px' } }}>
              <Box >
                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Popular Posts</Typography>
                {popularPost[0] ? (
                  <Box>
                    {
                      popularPost.map(post => (
                        <Box key={post.id} sx={{ backgroundColor: '#ebebf4', margin: '10px 0px', padding: '10px' }}>
                          <Link to={`/posts/${post.id}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                            <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500' }} />
                          </Link>
                          <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '14px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                        </Box>
                      ))
                    }
                  </Box>
                )
                  : 'loading'}
              </Box>
              <Box sx={{ margin: '30px 0px' }}>
                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Recent Posts</Typography>
                {recentPost[0] ? (
                  <Box>
                    {
                      recentPost.map(post => (
                        <Box key={post.id} sx={{ backgroundColor: '#ebebf4', margin: '10px 0px', padding: '10px' }}>
                          <Link to={`/posts/${post.id}`} style={{ color: '#000000', textDecoration: 'none' }} onClick={topScroll} >
                            <Typography dangerouslySetInnerHTML={{ __html: post.title.rendered }} sx={{ fontFamily: 'open sans', fontWeight: '500' }} />
                          </Link>
                          <Typography sx={{ marginTop: '15px', fontFamily: 'open sans', color: '#5c5d66', fontSize: '14px' }}>{moment(post.date).format('MMMM Do , YYYY')}</Typography>
                        </Box>
                      ))
                    }
                  </Box>
                )
                  : 'loading'}
              </Box>
              <Box sx={{ boxShadow: '0px 0px 6px #ccc', borderRadius: '4px', backgroundColor: '#ffffff', position: 'relative', paddingBottom: '10px' }} >
                <img src={newsletterImage} alt='check' />
                <Typography sx={{ fontSize: '18px', fontFamily: 'open sans', textAlign: 'center', fontWeight: '700', textTransform: 'uppercase', position: 'absolute', top: '50px', left: '50%', transform: 'translate(-50%)', color: '#ffffff', width: '280px' }}>Never Miss the Latest News</Typography>
                <Box sx={{ width: '135px', height: '125px', margin: 'auto', position: 'relative', top: '-60px' }}>
                  <img src={EmailIcon} alt='check' />
                </Box>
                <Typography sx={{ textAlign: 'center', color: '#f5881f', fontSize: '16px', fontFamily: 'poppins', fontWeight: '500', position: 'relative', top: '-30px' }}>Newsletter Signup</Typography>
                <Box className="letterInputParent">
                  <TextField id="filled-basic" label="Email Your Address" variant="filled" sx={{ width: '100%', padding: '0px 20px' }} className='newsletterEmailInput' />
                </Box>
                <Box sx={{ margin: '30px 20px 20px 20px' }}>
                  <Button color='warning' variant="contained" sx={{ borderRadius: '4px', height: '45px', fontSize: '16px', width: '100%' }} id='letternewsBtn' >Subscribe</Button>
                </Box>
              </Box>
            </Box>






          </Box>
        </Box>
      )
        : <Box sx={loaderCss}><Box style={{ width: '200px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
