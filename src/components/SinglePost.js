import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography,Box } from '@mui/material';
import renderHTML from 'react-render-html';

export default function SinglePost() {
    let postId = window.location.pathname
    const [data, setData] = useState([]);
    useEffect(() => {
        async function my() {
            await axios.get(`https://www.justgoweb.com/wp-json/wp/v2${postId}`).then((response) => {
                const posts = response.data;
                setData(posts);
            })
        }
        my()
    }, [])
    console.log(data);
    const structure=`<Box>
                        <Typography className='blogTitle' sx={BlogTitle}>{post.yoast_head_json.og_title}</Typography>
                        <img src={post.yoast_head_json.og_image[0].url} alt="blogImage" />
                        <Typography>{post.content}</Typography>
                        <Typography>{post.date}</Typography>
                    </Box>;`

    return (
        <>
            <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
            {data.id ? renderHTML(structure) :'loading'}



        </>
    )
}
