import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Image11 from '../images/weare.jpg'
import { Button, Typography } from '@mui/material';

export default function WeAre() {
   
    const leftContentWrapper = {
        width: { xs: '100%', md: '75%' },
        backgroundColor: "rgb(0, 67, 139)",
        padding: { xs: "0px 15px 30px 20px", md: "0px 40px 30px 50px" },
        marginTop: { xs: "-25px", md: "-7px" },
        marginBottom: { xs: "30px" }
    }
    const leftContent = {
        fontSize: { xs: "18px", sm: "16px", md: "22px" },
        lineHeight: "1.4em",
        fontFamily: "poppins",
        fontWeight: "700",
        color: "#ffffff",
        marginTop: "-20px",
    }
    const ReadBtn = {
        position:"relative",
        top:{xs:"-5px",sm:"-15px"},
        left:{xs:"12px",sm:"117px"},
        display:{xs:"block",md:"none"},
        textTransform:'capitalize',
        color:"#f5881f",
        fontSize:"17px",
        fontWeight:"300",
        fontFamily:"open sans"
    }

    const [btnText,setBtnText]= useState('Read More')
    const[addCss,setAddCss] = useState({
        height:{xs:'275px',sm:'260px',md:"fit-content"},
        overflow:"hidden"
    })

    const ReadMoreLess=()=>{
        if(btnText === "Read More") {
            ReadMore()
            setBtnText('Read Less')
        }
        else{
            ReadLess()
        setBtnText('Read More')
        }
    }
    const ReadMore=()=>{
        setAddCss((obj)=>{
            return ({...obj,height:"fit-content",overflow:"visible"})
        })  
    }
    const ReadLess=()=>{
        setAddCss((obj)=>{
            return ({...obj,height:{xs:'275px',sm:'260px'},overflow:"hidden"})
        })
    }

    const weAreWrapper = {
        display: 'grid',
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        backgroundColor: "#f8f8f8"
    }
    const weAreContent = {
        padding: { xs: "20px", sm: "70px 80px 20px 125px", md: "60px 40px 70px 75px", lg: "70px 80px 70px 125px" },
        lineHeight: "1.8em",
        fontFamily: "open sans",
        fontSize: "17px",
        color: "#7a7a7a",
        fontWeight: "300",
        height:addCss.height,
        overflow:addCss.overflow
    }
    return (
        <Box className="weAreWrapper" sx={weAreWrapper}>
            <Box className="weAreLeft" >
                <img src={Image11} alt="images" />
                <Box sx={leftContentWrapper} className="leftContent">
                    <Typography sx={leftContent}>
                        We help you drive revenue by leveraging digital marketing channels.
                        Every business is different and hence getting a positive ROI from a
                        digital marketing channel may differ from business to business.
                    </Typography>
                </Box>
            </Box>
            <Box className="weAreRight">
                <Typography sx={weAreContent} id="weAreContent">
                    Digital marketing is in our blood. We live and breath digital
                    marketing day and night. We understand the complete digital
                    marketing ecosystem and offer full service digital marketing
                    services including SEO, SEM, Ecommerce Development and Website
                    Designing to clients based in US, UK and India ( Delhi, Noida
                    and Gurgaon).
                    <br />
                    <br />
                    Success of any digital marketing campaign depends on how an
                    agency or a company understands the clients business and their
                    marketing objective. This is where we get an edge over any
                    other <strong>digital marketing agency in Delhi</strong>, Noida, Gurgaon or India.
                    Our core competency lies in understanding the business and
                    creating the right digital strategy which resonates with the
                    company’s marketing objective. We help you reach the right
                    audience by selecting the right digital marketing channel and
                    optimizing it for maximum ROI.
                    <br />
                    <br />
                    Unlike traditional marketing, digital marketing services are
                    highly measurable and can result in high return on investments.
                    We work with fortune 500 companies in the UK and small businesses
                    across the globe. We are undoubtedly, #1 <strong>digital marketing
                        company in Delhi</strong>. If you are thinking about investing or improving
                    your digital marketing efforts, then feel free to get in touch
                    with our digital marketing consultants.
                </Typography>
                <Button sx={ReadBtn} onClick={ReadMoreLess}>{btnText}</Button>
            </Box>
        </Box>
    )
}


