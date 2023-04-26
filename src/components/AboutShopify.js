import React from 'react';
import ShopifyImg from '../images/shopify.jpg';
import { Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";

export default function AboutShopify() {

    const AboutShopifyCss = { 
        display: 'grid', 
        gridTemplateColumns: {xs:'1fr',md:'1fr 1fr'}, 
        maxWidth: '1200px', 
        margin: 'auto', 
        padding:{xs:"40px 20px 70px 20px",md:"100px 20px"} 
    }
    const TitleCss = { 
        fontSize: {xs:'28px',md:'35px'}, 
        fontFamily: 'poppins', 
        fontWeight: '700', 
        color: '#4a4a4a', 
        margin: {xs:'30px 0px',md:'0px 0px 30px 0px'} 
    }
    const ContentCss = { 
        textAlign: 'justify', 
        fontSize: '17px', 
        fontFamily: 'open sans', 
        color: '#7a7a7a', 
        marginBottom: '30px', 
        fontWeight: '300', 
        lineHeight: '1.8' 
    }
    const BtnCss = { 
        textDecoration: 'none', 
        backgroundColor: '#000000', 
        padding: '10px 30px', 
        color: '#ffffff', 
        borderRadius: '23px', 
        fontSize: '15px', 
        fontFamily: 'poppins', 
        fontWeight: '600' 
    }

    return (
        <>
            <Box sx={{ backgroundColor: '#f8f8f8' }}>
                <Box sx={AboutShopifyCss}>
                    <Box sx={{}} className="aboutShopify">
                        <img src={ShopifyImg} alt='About Shopify' style={{ width: '96%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ padding: {xs:'0px 0px 0px 0px',md:'0px 60px 0px 83px'} }}>
                        <Typography sx={TitleCss}>Shopify Plus Agency in Delhi</Typography>
                        <Typography sx={ContentCss}>
                            Shopify is one of the best eCommerce website builders.
                            It helps businesses build their scalable online store
                            with several built-in features. It offers online retailers
                            a plethora of services including payment methods, marketing,
                            customer engagement tools for the smooth functioning of the
                            online store. It is a robust and scalable online store builder
                            with powerful management tools, well-designed themes, top-notch
                            apps, and features. It helps you to increase your sales and
                            easily manage administrative tasks. We as a <strong>Shopify Partner
                                company in India </strong>(We are #1 Shopify Partners in India) can
                            help you build and customise websites for easy eCommerce
                            business management using Shopify.
                        </Typography>
                        <Link to='/shopify' style={BtnCss}>Let's Talk Shopify</Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
