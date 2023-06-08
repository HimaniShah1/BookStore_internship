// import { Button } from '@mui/material'
import '../App.css'
import React from 'react'
import './HeroSection.css'
import Book from '../assets/images/book_bg.jpg';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='image-overlay'/>
      <img src = {Book} alt='book' className='book'></img>
      <h1 >WELCOME TO</h1><span className="highlight">BookAttic</span>     
      <p>Indulge into the world of books!</p>
    </div>
  );
};

export default HeroSection
