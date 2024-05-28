import React, { useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import singleCoin from '../../assets/svg/singleCoin.png'


const MainPage = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)

  }
  return (
    <div id={Style.MainPage_Div}>
      <div id={Style.MainPage_firstDiv}>
        <div id={Style.MainPageDiv}>
          <div id={Style.MainPage_coinDiv}>
            <img src={dummyCoin} alt="" />
            <p>{count}</p>
          </div>
          <div id={Style.btnDiv}>
            <button id={Style.Mainpage_button} onClick={increaseCount}><img src={bus} alt="" /></button>
          </div>
        </div>
      </div>
      <div id={Style.MainPageText}>
          <button><img src={singleCoin} alt="" />John Doe</button>
          <div> <img src='' alt="" />Eko la wa</div>
        </div>
    </div>
  )
}

export default MainPage