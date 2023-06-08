import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import { Switch } from '@mui/material';
import Home from './components/pages/Home'
import Register from './components/Register';
import Login from './components/Login';
// import {HomePage} from "./HomePage";
// import { Apple } from './Apple';
// import { NotFound } from './NotFound';
// import { globalStyles } from './constants';
// import appStyle from "./AppStyle.module.css";
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './styles';


const linksArray = ["Users","Category","Books"];

const App = () => {
  
  return (
    <>
    <Router>
      <Navbar links= {linksArray}/>
       <Routes>
               <Route path = "/" element = {<Home/>}></Route>
               <Route path = "/home" element = {<Home/>}></Route>
               <Route  path = "/register" element = {<Register/>}></Route>
               <Route  path = "/login" element = {<Login/>}></Route>
      </Routes>
    </Router>
  
  
</>
  );
};

export default App;
