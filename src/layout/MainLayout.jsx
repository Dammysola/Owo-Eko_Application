import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from '../layout/MainLayout.module.css'
import NavBar from '../components/navBar/Navbar'
import backgroundImage from '../assets/svg/backgroundImage.svg'


const MainLayout = () => {

  return (
    <div id={Style.wrapper}>
     <NavBar/>
     {/* <img src={backgroundImage} alt="" /> */}
     <div><Outlet/></div>
    </div>
  )
}

export default MainLayout