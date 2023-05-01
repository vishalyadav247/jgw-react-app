import { Box, Typography, Divider, TextField, Button } from '@mui/material'
import { Link } from "react-router-dom";
import moment from 'moment';
import { useEffect, useState } from 'react';
import newsletterImage from './images/newslatterformimage.jpg';
import EmailIcon from './images/emailicon.png'

export default function Blogs(props) {
  const { data, categories, popularPost } = props;
  const [recentPost, setRecentPost] = useState([])

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

  const wrapperCss = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
    gridGap: "40px",
    width: { xs: '100%', md: '67%' }
  }
  const itemCss = {
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
  const loaderCss = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#272bff',
    fontSize: '30px'
  }
  const topScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
      {data[0] ? (
        <Box sx={{ backgroundColor: '#fffffff', padding: { xs: '50px 20px', md: '50px 30px', lg: '50px 0px' } }}>
          
          <Box sx={{ maxWidth: "1200px", margin: "auto",fontSize: '13px', padding: '8px 0px', boxShadow: '1px 1px 2.5px #ded8f4', display: { xs: 'none', md: 'block', marginBottom: '42px' } }}>
            <span><Link to='/' style={{ textDecoration: 'none', fontWeight: '600', color: 'black' }}>Home</Link></span><span style={{ padding: '0px 6px' }}>|</span><span>Blogs</span>
          </Box>
          
          <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>

            <Box className="blogsWrapper" sx={wrapperCss}>
              {data.map(post => (
                <Box className="blogItem" sx={itemCss} key={post.id}>
                  <Box className='blogImageWrapper'>
                    <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                  </Box>
                  <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px 32px 25px", marginTop: "-6px" }}>
                    <Link to={`/posts/${post.id}`} style={{ color: '#ffffff', textDecoration: 'none' }}>
                      <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} onClick={topScroll} />
                    </Link>
                    <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "15px 0px" }} />
                    <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                      <span>By {post.yoast_head_json.twitter_misc['Written by']}</span>
                      <span style={MiddleSpan}>{moment(post.date).format('MMMM Do , YYYY')}</span>
                      <span>categories : {categories[post.categories[0]]} {post.categories[1] ? ", " + categories[post.categories[1]] : ""}</span>
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: { xs: '100%', md: '33%' }, padding: { xs: '30px 0px 0px 0px', md: '0px 0px 0px 50px' } }}>
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
        : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
