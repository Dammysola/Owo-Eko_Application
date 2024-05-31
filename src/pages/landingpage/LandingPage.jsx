import React from 'react'
import Style from './LandingPage.module.css'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (

    <div id={Style.nav}>
      <div id={Style.LandingPage_mainDiv}>
        <div id={Style.LandingPage_boldText}>Tap Your Way to Cash with OwoEko!</div>
        <div id={Style.LandingPage_smallText}>Turn your taps into real money! Earn up to 1000 Naira daily by simply tapping your screen. Join the OwoEko community and start earning today!</div>

        <Link to={'/signup'}>
          <Button
            text={"Join Waitlist"} />
        </Link>
        <div id={Style.carousel_text}>
          <p>Please be aware that ads may appear in your browser while using our site. Rest assured, these ads help us keep our services free for you. Don't forget to close all tabs when you're done browsing. Thank you for your understanding and enjoy your visit!</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage