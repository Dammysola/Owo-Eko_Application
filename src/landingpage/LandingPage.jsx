import React from 'react'
import Style from '../landingpage/LandingPage.module.css'
import NavBar from '../navBar/Navbar'
import Button from '../button/Button'

const LandingPage = () => {
  return (

    <div id={Style.nav}>
      <NavBar/>
      <div id={Style.LandingPage_mainDiv}>
        <div id={Style.LandingPage_boldText}>Tap Your Way to Cash with OwoEko!</div>
        <div id={Style.LandingPage_smallText}>Turn your taps into real money! Earn up to 1000 Naira daily by simply tapping your screen. Join the OwoEko community and start earning today!</div>
        <div>
        <div>
           <Button
           children={"Play Now"}/>
           </div>
        </div>
    </div>
    </div>
  )
}

export default LandingPage