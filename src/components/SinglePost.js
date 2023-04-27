import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography,Box} from '@mui/material';


export default function SinglePost() {
    const postId = window.location.pathname
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
            {data.id ? (
            <Box sx={{maxWidth:'800px',margin:'auto',padding:'50px 0px',overflow:'hidden'}}>
            <Typography>{data.yoast_head_json.og_title}</Typography>
            <img src={data.yoast_head_json.og_image[0].url} alt="blogImage" />
            <Typography>{data.content.rendered}</Typography>
            </Box>
            ) 
            : <Box sx={loaderCss}>Loading...</Box>}



        </>
    )
}
