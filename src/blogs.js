import { Box, Typography, Divider } from '@mui/material'
import { Link } from "react-router-dom";
import moment from 'moment';
import { useEffect, useState } from 'react';

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
    width: '67%'
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
        <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '60px 20px', md: '60px 30px', lg: '80px 0px' } }}>

          <Box sx={{ maxWidth: "1200px", margin: "auto", display: 'flex' }}>
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
            <Box sx={{ width: '33%', padding: '0px 0px 0px 50px' }}>
              <Box sx={{ marginBottom: '30px' }}>
                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Popular Posts</Typography>
                {popularPost[0] ? (
                  <Box>
                    {
                      popularPost.map(post => (
                        <Box key={post.id} sx={{ backgroundColor: '#ebeaea', margin: '10px 0px', padding: '10px' }}>
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
              <Box>
                <Typography sx={{ backgroundColor: '#f5881f', padding: '8px 11px 10px 11px', color: '#fff', fontSize: '17px', fontWeight: '800', fontFamily: 'poppins' }}>Recent Posts</Typography>
                {recentPost[0] ? (
                  <Box>
                    {
                      recentPost.map(post => (
                        <Box key={post.id} sx={{ backgroundColor: '#ebeaea', margin: '10px 0px', padding: '10px' }}>
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
            </Box>
          </Box>

        </Box>
      )
        : <Box sx={loaderCss}><Box style={{ width: '149px' }}> <span>Loading</span><span className='ani'>...</span></Box></Box>}

    </>
  )
}
