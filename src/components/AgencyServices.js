import { Box, Typography } from '@mui/material';
import React from 'react';
import Webdev from '../images/webdev.jpg';
import Seo from '../images/seo.jpg';
import Ecom from '../images/ecom.jpg';
import Social from '../images/social.jpg';
import Webdev1 from '../images/webdev1.jpg';
import Seo1 from '../images/seo1.jpg';
import Ecom1 from '../images/ecom1.jpg';
import Social1 from '../images/social1.jpg';




export default function AgencyServices() {
    const ImageWrapperDesk = {
        display: { xs: "none", md: "block" },
        width: { xl: "100%" }
    }
    const ImageWrapperMob = {
        display: { xs: "block", md: "none" }
    }
    const TextOnImage = {
        color: "#ffffff",
        textAlign: "center",
        fontSize: { xs: "28px !important", lg: "35px !important" },
        fontFamily: "poppins",
        fontWeight: "700"
    }
    return (
        <Box className="pageWidth" sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }} className="center">
                <Box sx={ImageWrapperDesk}>
                    <img src={Webdev} alt="Website & Design" loading='lazy' />
                </Box>
                <Box sx={ImageWrapperMob}>
                    <img src={Webdev1} alt="Website & Design" loading='lazy' />
                </Box>
                <Box sx={{ position: "absolute"}}>
                    <Typography sx={TextOnImage}>WEBSITE <br />
                        <span style={{ fontWeight: "300", fontSize: "28px" }}>& DESIGNING</span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, marginTop: { xs: "-6px", sm: "0px" } }} className="center">
                <Box sx={ImageWrapperDesk}>
                    <img src={Seo} alt="Seo" loading='lazy' />
                </Box>
                <Box sx={ImageWrapperMob}>
                    <img src={Seo1} alt="Seo" loading='lazy' />
                </Box>
                <Box sx={{ position: "absolute" }}>
                    <Typography sx={TextOnImage}>SEARCH ENGINE  <br />
                        <span style={{ fontWeight: "300", fontSize: "28px" }}>OPITIMIZATION</span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, marginTop: { xs: "-6px", md: "0px" } }} className="center">
                <Box sx={ImageWrapperDesk}>
                    <img src={Ecom} alt="E-commerce Development" loading='lazy' />
                </Box>
                <Box sx={ImageWrapperMob}>
                    <img src={Ecom1} alt="E-commerce Development" loading='lazy' />
                </Box>
                <Box sx={{ position: "absolute" }}>
                    <Typography sx={TextOnImage}>E-COMMERCE <br />
                        <span style={{ fontWeight: "300", fontSize: "28px" }}>DEVELOPMENT</span>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, marginTop: { xs: "-6px", md: "0px" } }} className="center">
                <Box sx={ImageWrapperDesk}>
                    <img src={Social} alt="Social Media" loading='lazy' />
                </Box>
                <Box sx={ImageWrapperMob}>
                    <img src={Social1} alt="Social Media" loading='lazy' />
                </Box>
                <Box sx={{ position: "absolute" }}>
                    <Typography sx={TextOnImage}>SOCIAL <br />
                        <span style={{ fontWeight: "300", fontSize: "28px" }}>& MEDIA</span>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}


