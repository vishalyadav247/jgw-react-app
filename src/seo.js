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
                axios.get('https://www.justgoweb.com//wp-json/wp/v2/pages/10562').then((response) => {
                    const posts = response.data;
                    resolve(posts)

                })
            }).then((value) => {
                let check = value.content.rendered;
                    check = check.replace(/src/g, " ");
                    check = check.replace(/data-orig-/g, "src");
                setPageData(value);
                setPageContent(check)
            })
        }
        my()
    }, [])

    return (
        <Box>
            <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
            {pageData.id ? (
                <Box>
                    <Typography>{pageData.title.rendered}</Typography>
                    <Box className='seoPageContentRoot' dangerouslySetInnerHTML={{ __html: pageContent }}></Box>
                </Box>



            ) : 'loading'}

        </Box>
    )
}
