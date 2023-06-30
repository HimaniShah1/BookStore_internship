import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Books from '../Books'
import Footer from '../Footer'
import BookTitle from '../BookTitle'

function Home() {
    return(
        <>
          <HeroSection/>
          <Books/>
          <BookTitle/>
          <Footer/>
        </>
    )
}

export default Home