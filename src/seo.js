import React from 'react';
import { Box, Typography } from "@mui/material";

export default function Seo(props) {
    const {pageData,pageContent} = props;

    return (
        <Box>
            <div style={{ backgroundColor: 'black', height: '84px', width: '100%', position: 'sticky', top: '0px' }}></div>
            {pageData.id ? (
                <Box className='seoPageContentRoot'>
                    <Typography>{pageData.title.rendered}</Typography>
                    {/* <Typography dangerouslySetInnerHTML={{ __html: pageContent }}></Typography> */}
            </Box>
            ) : 'loading'}
        </Box>
    )
}
