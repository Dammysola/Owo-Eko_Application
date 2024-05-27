import React from 'react'
import { Outlet } from 'react-router-dom'
import Style from '../layout/MainLayout.module.css'
import NavBar from '../components/navBar/Navbar'
import backgroundImage from '../assets/svg/backgroundImage.svg'
import UserContext from '../UserContext'
import Withdrawal from '../popUps/withdrawal/Withdrawal'
import Withdrawal_Success from '../popUps/withdraw_Success/Withdrawal_Success'
import Tap_Exceeded from '../popUps/tapExceeded/Tap_Exceeded'
import Profile from '../popUps/profile/Profile'


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