import React,{useState} from 'react';
import Box from '@mui/material/Box'
import HomeBanner from './components/HomeBanner';
import contactBanner from './images/banner2.jpg'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  const contactWrapperCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding:{xs:'0px 25px',sm:'0px 0px'}
  }
  const contactFormCss = {
    maxWidth: '695px',
    width: '100%'
  }
  const formHeadingCss = {
    fontSize: '35px',
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#4a4a4a',
    margin: '110px 0px 55px 0px'
  }
  const formInnerHeadingCss = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#474747',
    fontFamily: 'poppins'
  }
  const [formState,setFormState] = useState({});
  const changeHandler = (event)=>{
    setFormState({...formState,[event.target.name]:event.target.value})
  }
 
  const submitHandler = (event)=>{
    event.preventDefault();
    const config = {
      SecureToken : "b89b0af5-80f9-4388-9f9f-77c197474d2e",
      To : "vishal.kvs@outlook.com",
      From : "vishal.kvs@outlook.com",
      Subject : "JGW Contact form",
      Body:`From ${formState.name} <br>
            Email ID : ${formState.email} <br> 
            Phone    : ${formState.phone} <br><br><br>
            <div style='border:1px dotted black;padding:25px;'>
              Message : ${formState.message}
            </div>`
    };
    if(window.Email){
      window.Email.send(config).then((message)=> alert(message)).then(()=>{
        setFormState({})
      })
    }

  }
  return (
    <>
      <Box>
        <HomeBanner banner={contactBanner}
          title='CONTACT US'
          content='Wheather you’re looking for a stunning website – or a digital 
          marketing campaign to improve your top and bottom line, We’ll be happy 
          to help and love to hear from you. '/>
      </Box>
      <Box sx={contactWrapperCss}>
        <Typography sx={formHeadingCss}>CONTACT US</Typography>
        <form style={contactFormCss} onSubmit={submitHandler} >
          <Typography sx={formInnerHeadingCss}>Tell us a bit about yourself</Typography>
          <Box sx={{ margin: '20px 0px', display: 'grid' }} className='contactUpperInputWrapper'>
            <TextField id="filled-basic" label="Full Name" variant="filled" name='name' onChange={changeHandler} value={formState.name || ''}/>
            <TextField id="filled-basic" label="Email Address" variant="filled" name='email' onChange={changeHandler} value={formState.email || ''}/>
            <TextField id="filled-basic" label="Phone Number" variant="filled" name='phone' onChange={changeHandler} value={formState.phone || ''}/>
            <TextField id="filled-basic" label="My Website" variant="filled" name='website' onChange={changeHandler} value={formState.website || ''}/>
          </Box>
          <Typography sx={formInnerHeadingCss}>What can we help you with</Typography>
          <Box sx={{ margin: '20px 0px 50px 0px', display: 'grid' }} className='contactLowerInputWrapper'>
            <TextField id="filled-basic" label="I am enquiring about.." variant="filled" sx={{height:'100px'}} name='message' onChange={changeHandler} value={formState.message || ''}/>
            <Button type='submit' variant="contained" sx={{marginTop:'50px',borderRadius:'23px',height:'45px',fontSize:'16px'}}>Submit</Button>
          </Box>
        </form>
      </Box> 
    </>
  )
}
