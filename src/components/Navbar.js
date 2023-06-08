import { AppBar, Box, Button, Drawer, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
// import {FaShoppingCart} from 'react-icons/fa'
import { Link} from 'react-router-dom';
// import DrawerComp from './DrawerComp';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = ({links}) => {
  const[value,setValue] = useState();
  return(   
   <>
     <AppBar className='navbar' sx = {{backgroundImage: 'linear-gradient(90deg, rgba(56,15,28,1) 0%, rgba(156,54,79,1) 29%, rgba(238,141,153,1) 52%, rgba(215,100,114,1) 65%, rgba(77,27,33,1) 88%)'}}>
        <Toolbar>
       
            <Grid sx={{placeItems:'center'}} container>
               <Grid item xs={2}>
                  <Link to = "/home"><img src= {logo} alt="logo" className='logo'></img></Link>
               </Grid>
               <Grid item xs={6}>
                  <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                     {links.map((link,index)=>
                     <Tab key = {index} label={link}/>
                     )}
                  </Tabs>
               </Grid>
               <Grid item xs={4} container justifyContent="flex-end">
                  <Box>
                   <Link to = "/login"> <Button sx={{marginLeft:'auto', background: "rgba(156,54,79,1)"}} variant="contained">Login</Button></Link>
                   <Link to = "/register"> <Button sx={{marginLeft:1, background: "rgba(156,54,79,1)"}} variant="contained">Register</Button></Link>
                  </Box>
               </Grid>
            </Grid>
           
            {/* <DrawerComp/> */}
            
        </Toolbar>
     </AppBar>
     </>
  );  
};

export default Navbar

