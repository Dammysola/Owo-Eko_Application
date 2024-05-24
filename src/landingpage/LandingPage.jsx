import React from 'react'
import Style from '../landingpage/LandingPage.module.css'
import NavBar from '../navBar/Navbar'

const LandingPage = () => {
  return (

    <div id={Style.nav}>
      <NavBar/>
      <div id={Style.LandingPage_mainDiv}>
        <div id={Style.LandingPage_boldText}>Lorem ipsum dolor sit amet consectetur. Turpis hac nunc</div>
        <div id={Style.LandingPage_smallText}>Lorem ipsum dolor sit amet consectetur. Turpis hac nunc enim arcu. Ac ultrices natoque tellus at semper. Faucibus egestas elit blandit scelerisque duis erat nisl volutpat eget.</div>
        <div>
            <button>Play Now</button>
        </div>
    </div>
    </div>
  )
}

export default LandingPage