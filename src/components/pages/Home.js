import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Books from '../Books'
import Footer from '../Footer'

function Home() {
    return(
        <>
          <HeroSection/>
          <Books/>
          <Footer/>
        </>
    )
}

export default Home