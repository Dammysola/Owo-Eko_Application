import React from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'


const MainPage = () => {
  return (
    <div id={Style.MainPage_firstDiv}>
      <div id={Style.MainPageDiv}>
      <div id={Style.MainPage_coinDiv}>
        <img src={dummyCoin} alt=""/>
        <p>400</p>
      </div>
      <div id={Style.btnDiv}>
      <button id={Style.Mainpage_button}><img src={bus} alt="" /></button>
      </div>
    </div>
    </div>
  )
}

export default MainPage