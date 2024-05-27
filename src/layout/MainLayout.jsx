import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from '../layout/MainLayout.module.css'
import NavBar from '../components/navBar/Navbar'
import backgroundImage from '../assets/svg/backgroundImage.svg'
import UserContext from '../UserContext'


const MainLayout = () => {

  return (
    <>
      <UserContext>
        <div id={Style.wrapper}>
          <NavBar />
          
          <div><Outlet /></div>
        </div>
      </UserContext>
    </>
  )
}

export default MainLayout