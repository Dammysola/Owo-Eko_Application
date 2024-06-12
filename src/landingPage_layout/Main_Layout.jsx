import React from 'react'
import Style from '../landingPage_layout/Main_Layout.module.css'
import NavBar from '../components/navBar/Navbar'
import { Outlet } from 'react-router-dom'



const Main_Layout = () => {
  return (
    <div id={Style.wrapper}>
        <NavBar/>
        <div><Outlet/></div>
    </div>
  )
}

export default Main_Layout