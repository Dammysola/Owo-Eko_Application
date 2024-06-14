import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Style from '../layout/MainLayout.module.css'
import NavBar from '../components/navBar/Navbar'
import backgroundImage from '../assets/svg/backgroundImage.svg'
import UserContext from '../UserContext'
import Withdrawal from '../popUps/withdrawal/Withdrawal'
import Withdrawal_Success from '../popUps/withdraw_Success/Withdrawal_Success'
import Tap_Exceeded from '../popUps/tapExceeded/Tap_Exceeded'
import Error from '../popUps/error/Error'
import Confirmation from '../popUps/confirmation/Confirmation'
import Loading from '../popUps/loading/Loading'
import PopupContext, { popupContextHook } from '../PopupContext'
import No_Mobile from '../popUps/noMobile/No_Mobile'
import Claim from '../popUps/claim/Claim'
import Profile from '../pages/profile/Profile'
import Bank_Registration from '../popUps/bank_registration/Bank_Registration'




const MainLayout = () => {

  const { loadingPopup, errorPopup, claimPopup, profile, tapExceededPopup, withdrawalPopup, bankReg, confirmationPopup, withdrawalSuccessPopup} = popupContextHook();
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState('');

  let account = JSON.parse(localStorage.getItem("account_details"));


  useEffect(() => {
    const checkUserAgent = () => {
      if (navigator.userAgent.match (/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)) {
        setIsMobile(true)
      }else{
        setIsMobile(false)
      }
    }
    checkUserAgent()
    // handleResize()
    // window.addEventListener('resize', handleResize)
    // return () => window.removeEventListener('resize', handleResize)
})


  return (
    <>
        <UserContext>
          <div id={Style.wrapper}>
            <NavBar />
            {withdrawalPopup && <Withdrawal />}
            {tapExceededPopup && <Tap_Exceeded />}
            {loadingPopup && <Loading />}
            {errorPopup && <Error />}
            {claimPopup && <Claim/>}
            {isMobile? <No_Mobile/> : <div><Outlet /></div>}
            {profile && <Profile/>}
            {bankReg && <Bank_Registration/>}
            {confirmationPopup && <Confirmation/>}
            {withdrawalSuccessPopup && <Withdrawal_Success/>}
          </div>
        </UserContext>
    </>
  )
}

export default MainLayout