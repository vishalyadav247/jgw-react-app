import { Box, Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Blogs() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:7000/blog/getAllBlogDetails').then((res)=>{
        setData(JSON.parse(res.data.data));
    })
    },[])   

  return (
    <>
      <div style={{backgroundColor:'black',height:'84px',width:'100%',position:'sticky',top:'0px'}}></div>
        <Box sx={{height:'100vh'}}>
         {data.map((item)=>{
            console.log(item.description);
         })}
        </Box>
    </>
  )
}
