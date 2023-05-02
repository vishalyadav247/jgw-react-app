import React from 'react';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Seo() {


    const [pageData, setPageData] = useState({});
    const [pageContent, setPageContent] = useState({})

    useEffect(() => {

        function my() {
            const p1 = new Promise((resolve, reject) => {
                axios.get('https://ind.justgoweb.com//wp-json/wp/v2/pages/144?acf_format=standard').then((response) => {
                    const posts = response.data;
                    console.log(posts);
                    resolve(posts)

                })
            }).then((value) => {
                // let check = value.content.rendered;
                // check = check.replace(/src/g, " ");
                // check = check.replace(/data-orig-/g, "src");
                // setPageContent(check)
                setPageData(value);
            })
        }
        my()
    }, [])

    return (
        <Box>
            <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
            {pageData.id ? (
                <Box className='seoPageContentRoot'>
                    <Typography>{pageData.title.rendered}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></Typography>
                    <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                        <img src={pageData.acf['image_upload']} style={{width:'auto',height:'auto'}}/>
                        <p dangerouslySetInnerHTML={{ __html: pageData.acf['content'] }}></p>
                    </Box>
                    <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr',marginTop:'50px'}}>
                        <p dangerouslySetInnerHTML={{ __html: pageData.acf['content_left'] }}></p>
                        <img src={pageData.acf['image_upload_right']} style={{width:'auto',height:'auto'}}/>
                    </Box>
            </Box>



            ) : 'loading'}

        </Box>
    )
}
