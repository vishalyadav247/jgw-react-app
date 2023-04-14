import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import HeaderAnimation from './HeaderAnimation';

const drawerWidth = "80%";

setTimeout(() => {
  let address=window.location.pathname
  if(address == '/'){
    let lnks=document.querySelectorAll('.menuBtn');
    let lnkArr=Array.from(lnks);
    lnkArr[0].style.color='#fcb040'
  }
  else if(address == '/about'){
    let lnks=document.querySelectorAll('.menuBtn');
    let lnkArr=Array.from(lnks);
    lnkArr[1].style.color='#fcb040'
  }
  else if(address == '/contact'){
    let lnks=document.querySelectorAll('.menuBtn');
    let lnkArr=Array.from(lnks);
    lnkArr[6].style.color='#fcb040'
  }
  else if(address == '/shopify'){
    let lnks=document.querySelectorAll('.menuBtn');
    let lnkArr=Array.from(lnks);
    lnkArr[4].style.color='#fcb040'
  }
  else{
    let lnks=document.querySelectorAll('.menuBtn');
    let lnkArr=Array.from(lnks);
    lnkArr[0].style.color='#fcb040'
  }
}, 100);

export default function AppHeader(props) {

  const Active=(event)=>{
    let arr=document.querySelectorAll('.menuBtn');
    let arrM=document.querySelectorAll('.menuBtn.M');

    let linkArr=Array.from(arr);
    let linkArrM=Array.from(arrM);

    for (let link of linkArr){
      link.style.color='#ffffff'
    }
    for (let link of linkArrM){
      link.style.color='#000000'
    }
      event.target.style.color='#fcb040'
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const linkCss = {
    marginLeft: "34px",
    paddingRight: "0px",
    fontFamily: "poppins",
    fontWeight: {xs:"700",md:'500'},
    fontSize: {xs:"20px",md:'14px'},
    minWidth: "0px",
    textDecoration: 'none'
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}} mt={4}>
      <Box style={{ marginTop: "10px",marginBottom:'40px' }}>
            <img src={logo} style={{ width: "192px", height: "43px" }} alt="logo" className='siteLogo' id="logoImg" />
          </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Link to='/' className="menuBtn M" style={linkCss} onClick={Active}>
          HOME
        </Link>
        <Link to='/about' className="menuBtn M" style={linkCss} onClick={Active}>
          WHO WE ARE
        </Link>
        <Link to='/' className="menuBtn M" style={linkCss} onClick={Active}>
          SEO
        </Link>
        <Link to='/' className="menuBtn M" style={linkCss} onClick={Active}>
          UX DESIGN
        </Link>
        <Link to='/shopify' className="menuBtn M" style={linkCss} onClick={Active}>
          SHOPIFY
        </Link>
        <Link to='/' className="menuBtn M" style={linkCss} onClick={Active}>
          THINKING
        </Link>
        <Link to='/contact' className="menuBtn M" style={linkCss} onClick={Active}>
          HIRE US!
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const AppHeaderWrapperCss = {
    display: 'flex',
    justifyContent: "center",
    height: "84px",
    width: "100%",
    position: "fixed",
    zIndex: "99",
    top: '-84px',
    backgroundColor: "#000000"
  }


  return (
    <Box sx={AppHeaderWrapperCss} className="appBar" id="appHeader">
      <CssBaseline />
      <AppBar component="nav" sx={{ maxWidth: "1200px", right: "auto", boxShadow: "none", backgroundColor: { xs: "black", md: "transparent" }, position: "fixed", top: "0px", zIndex: "10" }} >
        <Toolbar style={{ display: "flex", justifyContent: "space-between", height: "84px", padding: "0px" }}>
          <Box style={{ marginTop: "10px" }}>
            <img src={logo} style={{ width: "192px", height: "43px" }} alt="logo" className='siteLogo' id="logoImg" />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }} className="menuList">
            <Link to='/' className="menuBtn" style={linkCss} onClick={Active}>
              HOME
            </Link>
            <Link to='/about' className="menuBtn" style={linkCss} onClick={Active}>
              WHO WE ARE
            </Link>
            <Link to='/' className="menuBtn" style={linkCss} onClick={Active}>
              SEO
            </Link>
            <Link to='/' className="menuBtn" style={linkCss} onClick={Active}>
              UX DESIGN
            </Link>
            <Link to='/shopify' className="menuBtn" style={linkCss} onClick={Active}>
              SHOPIFY
            </Link>
            <Link to='/' className="menuBtn" style={linkCss} onClick={Active}>
              THINKING
            </Link>
            <Link to='/contact' className="menuBtn" style={linkCss} onClick={Active}>
              HIRE US!
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      <HeaderAnimation />
    </Box>
  );
}
