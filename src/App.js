import './App.css';
import Navbar from './components/Navbar';
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
  <Navbar links= {linksArray}/>
  
</>
  );
};

export default App;
