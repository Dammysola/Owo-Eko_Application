import React, { useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import singleCoin from '../../assets/svg/singleCoin.png'
import avatar from '../../assets/svg/avatar.svg'
import axios from 'axios'


const MainPage = () => {
  const [count, setCount] = useState(0)

  const increaseCount =async () => {
    // const newCount = count + 1;
    // setCount(newCount)

    try {
      setCount(prevCount => prevCount + 1);

      const response = await axios.post()

      console.log('Request successful:', response.data);

    } catch (error) {
      // let userError = error.response.data.message
      // console.error('Failed to trigger backend endpoint:', error);
    }

  }
  const testingLink = () => {
    // let win = open('https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9', '_blank', 'noopener, noreferrer');

    let url = 'https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9'
    let win = window.open(`${url}`, "_blank", "popup, width=10,height=10").then((ev) => {
        onload= (ev)=>{
            console.log("message")
        }
    });

    // win.document.write(`<iframe src=${url} sandbox="allow-top-navigation" width="100%" height="100%"></iframe>`)

    // win.onload = (ev) => {
    //     console.log("message")
    //     setCount(count++)
    //     setTimeout(() => {
    //         win.close();
    //     }, 2500)
    // };
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
            <button id={Style.Mainpage_button} onClick={testingLink}><img src={bus} alt="" /></button>
          </div>
        </div>
      </div>
      <div id={Style.MainPageText}>
          <button><img src={avatar} alt="" />John Doe</button>
          <div> <img src={singleCoin} alt="" />Eko la wa</div>
        </div>
    </div>
  )
}

export default MainPage