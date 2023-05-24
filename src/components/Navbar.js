import { AppBar, Box, Button, Drawer, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { BrowserRouter, Link,Routes,Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
// import DrawerComp from './DrawerComp';

const Navbar = ({links}) => {
  const[value,setValue] = useState();
  return(   
   <>
    <BrowserRouter>
     <AppBar sx = {{backgroundImage: 'linear-gradient(90deg, rgba(56,15,28,1) 0%, rgba(156,54,79,1) 29%, rgba(238,141,153,1) 52%, rgba(215,100,114,1) 65%, rgba(77,27,33,1) 88%)'}}>
        <Toolbar>
       
            <Grid sx={{placeItems:'center'}} container>
               <Grid item xs={2}>
                  <Typography>TatvaSoft</Typography>
               </Grid>
               <Grid item xs={6}>
                  <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                     {links.map((link,index)=>
                     <Tab key = {index} label={link}/>
                     )}
                  </Tabs>
               </Grid>
               <Grid item xs={1}/>
               <Grid item xs={3}>
                  <Box display = "flex">
                   <Link to = "/login"> <Button sx={{marginLeft:'auto', background: "rgba(156,54,79,1)"}} variant="contained">Login</Button></Link>
                   <Link to = "/register"> <Button sx={{marginLeft:1, background: "rgba(156,54,79,1)"}} variant="contained">Register</Button></Link>
                  </Box>
               </Grid>
            </Grid>
           
            {/* <DrawerComp/> */}
            
        </Toolbar>
     </AppBar>
      <Routes>
               <Route  path = "/register" element = {<Register/>}></Route>
               <Route  path = "/login" element = {<Login/>}></Route>
      </Routes>
     </BrowserRouter>
     </>
  );  
};

export default Navbar

