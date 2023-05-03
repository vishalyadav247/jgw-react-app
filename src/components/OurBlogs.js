import React from 'react';
import Box from '@mui/material/Box';
import { Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link , useParams} from "react-router-dom";




export default function OurBlogs(props) {
    const { data, categories } = props;
    const [recentPost, setRecentPost] = useState([]);
    const { category } = useParams();
    console.log(category);

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
            for(let i in data){
                console.log(categories);
                console.log(data[i].categories);
                for(let j in data[i].categories){
                        if(j === categories){
                            console.log(i);
                        }
                    }
            }
        }
        my()

    }, [data])

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
        height: { xs: "auto", md: "153px", lg: "auto" },
        overflow: { xs: "visible", md: "hidden", lg: "visible" }
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
        textTransform: "capitalize" ,
        padding:'0px'
       }
       const categoriesLinkCss = {
        color: '#ffffffa5', 
        fontSize: '12px', 
        fontFamily: 'open sans',
        textDecoration:'none'
    }

    const topScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <Box sx={{ backgroundColor: '#f8f8f8', padding: { xs: '60px 20px 60px 20px', md: '60px 30px 60px 30px', lg: '60px 0px 60px 0px' } }}>

            {recentPost[0] ? (
                <Box className="blogsWrapper" sx={wrapperCss}>
                    {recentPost.map(post => (
                        <Box className="blogItem" sx={itemCss} key={post.id}>
                            <Box className='blogImageWrapper'>
                                <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                            </Box>
                            <Box className='blogContent' sx={{ backgroundColor: "rgba(0,67,139,1)", padding: "32px 25px", marginTop: "-6px" }}>
                                <Typography className='blogTitle' sx={BlogTitle} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <Divider sx={{ width: "100%", height: "1px", backgroundColor: "white", margin: "25px 0px" }} />
                                <Typography sx={{ color: '#ffffff', fontSize: '12px', fontFamily: 'open sans' }}>
                                    <span>By {post.yoast_head_json.schema['@graph'][4].name}</span>
                                    <span style={MiddleSpan}>{moment(post.date).format('MMMM Do , YYYY')}</span>
                                    <span style={{display:'block'}}> categories :&nbsp;
                                        <Link to={`/category/${categories[post.categories[0]]}`} style={categoriesLinkCss}>{categories[post.categories[0]]}</Link>
                                        <Link to='#' style={categoriesLinkCss}>{post.categories[1] ? ", " + categories[post.categories[1]] : ""}</Link>
                                        <Link to='#' style={categoriesLinkCss}>{post.categories[2] ? ", " + categories[post.categories[2]] : ""}</Link>
                                    </span>
                                </Typography>
                                <Button variant="contained" sx={BlogCardReadMoreBtn} onClick={topScroll} >
                                    <Link to={`/posts/${post.slug}`} style={{ color: '#ffffff', textDecoration: 'none',padding:'10px 20px' }}>Read More
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            ) : 'loading'}

        </Box>
    )
}
