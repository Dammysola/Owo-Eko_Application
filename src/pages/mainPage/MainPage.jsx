import React, { useEffect, useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import singleCoin from '../../assets/svg/singleCoin.svg'
import avatar from '../../assets/svg/avatar.svg'
import busLight from '../../assets/svg/busLight.svg'
import danfo from '../../assets/svg/danfoDark.svg'
import trafficLightOff from '../../assets/svg/trafficLightOff.svg'
import flag from '../../assets/svg/flag.svg'
import trafficLightOn from '../../assets/svg/trafficLightOn.svg'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'


const MainPage = () => {
  const [toggleImg, setToggleImg] = useState(false)
  const [progressImg, setProgressImg] = useState (true)


  let [count, setCount] = useState(0)
  let [index, setIndex] = useState(0)
  const [progressWidth, setProgressWidth] = useState("");

  const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateClaimPopup } = popupContextHook()


  const links = [
    {
      text: "1",
      link: "https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9",
    },
    {
      text: "2",
      link: "https://www.highcpmgate.com/hjfjqcmv?key=1659ab3504d2485944d533bfab3f2c61",
    },
    {
      text: "3",
      link: "https://www.highcpmgate.com/etxxi570?key=8bb110da87fb5f517d7a24da1deeadb1",
    },
    {
      text: "4",
      link: "https://www.highcpmgate.com/qfe6sus8vf?key=884ebfbb5a3dcfd7125855466700be82",
    },
    {
      text: "5",
      link: "https://www.highcpmgate.com/hgwu4185j?key=8c96bcf604014d965166e6a30061b1f1",
    },
    {
      text: "6",
      link: "https://www.highcpmgate.com/xui6gn5u?key=3a0a88d85d59792f2f5cd9c0f89d29eb",
    },
    {
      text: "7",
      link: "https://www.highcpmgate.com/hennuqph?key=f5b9167242ebea5a1e4f625436f15d5c",
    },
    {
      text: "8",
      link: "https://www.highcpmgate.com/m3ur3t8p91?key=5da194ed45d75828e8973932313cf81d",
    },
    {
      text: "9",
      link: "https://www.highcpmgate.com/zjx2ud0f?key=919a95fae9422495fabc819ab86cdc0a",
    },
    {
      text: "10",
      link: "https://www.highcpmgate.com/wqe92x66r?key=ff681336a37e43d68a2ea27b78dc83a5",
    },
    {
      text: "11",
      link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
    },
    {
      text: "12",
      link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
    },
    {
      text: "13",
      link: "https://meenetiy.com/4/7549769",
    },
    {
      text: "14",
      link: "https://eetognauy.net/4/5114081",
    },
    {
      text: "15",
      link: "https://tauphaub.net/4/7549785",
    },
    {
      text: "16",
      link: "https://voostaidoo.net/4/7549778",
    },
    {
      text: "17",
      link: "https://psoansumt.net/4/7549780",
    },
    {
      text: "18",
      link: "https://oulsools.com/4/7549783",
    },
    {
      text: "19",
      link: "https://owhaptih.net/4/7549787",
    },
    {
      text: "20",
      link: "https://psoansumt.net/4/7549788",
    },
    {
      text: "21",
      link: "https://shasogna.com/4/7549779",
    },
  ]
  // useEffect(()=>{

  //   if (count == 10) {
  //     updateClaimPopup(true)
  //   }
  // },[count])

  const getUserDetails = async () => {


    let phone_number = sessionStorage.getItem("phone_number")

    try {
      const response = await axios.get(`https://owo-eko-api.onrender.com/user/details/${phone_number}`)

      console.log("getUserDeatils", response.status)

      updateLoadingPopup(false);
      if (response.status == 200) {

        updateLoadingPopup(false);

        console.log('Details successful', response.data);

        // sessionStorage.setItem("phone_number", phoneNumber)
        // navigate(`/mainpage`)
      } else {
        updateErrorText(response.data)

        updateErrorPopup(true)
        setTimeout(() => {
          updateErrorPopup(false)
        }, 2000)

        console.log('login failed');
      }
    } catch (error) {

      updateLoadingPopup(false);
      let userError = err.response.data.message

      updateErrorText(userError)

      updateErrorPopup(true)
      setTimeout(() => {
        updateErrorPopup(false)
      }, 2000)
    }

  }

  const increaseCount = async () => {
  
    try {
      const response = await axios.post()

      console.log('Request successful:', response.data);

    } catch (error) {
    }

  }


  const testingLink = (event) => {

    event.preventDefault();
    let connection = window.navigator.onLine;
    if (connection) {
      if (index < 11) {
        setIndex(index + 1)
      }
      else {
        setIndex(0)
      }

      setToggleImg(!toggleImg)
      setCount(count + 1)

      if (count === 10) {
        updateClaimPopup(true)
        // setProgressImg(!progressImg)
      }
     
      setProgressWidth(`${(count / 100) * 100}%`)

      console.log("Link No", links[index].text)
      let url = links[index].link
      // let win = window.open(`${url}`, "_blank");
      let win = window.open(`${url}`, "_blank", "popup, top=1000 left=2000 width=10,height=10")

      win.addEventListener('load', function () {
        console.log('All assets are loaded')
      })

    } else {

      updateErrorText("No Internet Connection")

      updateErrorPopup(true)
      setTimeout(() => {
        updateErrorPopup(false)
      }, 2000);
    }
  }


  return (
    <div id={Style.MainPage_Div}>
      <div id={Style.MainPage_firstDiv}>
        <div id={Style.MainPageDiv}>
          <div id={Style.MainPage_screenTextDiv}>

            <div id={Style.MainPage_coinDiv}>
              <div id={Style.MainPage_biniCoin}>Your Change</div>
              <div id={Style.MainPage_dummyCoinText_Div}>
                <img src={dummyCoin} alt="" />
                <div>{count}</div>
              </div>
            </div>

            <div id={Style.ProgressBar_mainDiv}>
              <div id={Style.ProgressBar_ImageDiv}>
                <div></div>
                {progressImg ? (<img src={trafficLightOff} alt="" />): (
                  <img src={trafficLightOn} alt="" />
                ) }
                <img src={trafficLightOff} alt="" />
                <img src={flag} alt="" />
              </div>
              
              <div id={Style.milestoneDiv}>
                <div id={Style.Progressfill} style={{ width: progressWidth }}><img src={danfo} alt="" /></div>
              </div>
            </div>

            <div id={Style.MainPage_text}>Tap tap tap, can't slow down, Rhythm flows, in this town. Energy high, fingers pop, Tap tap tap, feel the shine.</div>
            <div id={Style.MainPage_TapsLeft}>250 taps left</div></div>

          <div id={Style.progress}>
            <div id={Style.progress_done} style={{ width: progressWidth }}></div>
          </div>

          <div id={Style.btnDiv}>
            <button id={Style.Mainpage_button} onClick={testingLink}>
              {toggleImg ? (
                <img src={busLight} alt="" />
              ) : (
                <img src={bus} alt="" />
              )}
            </button>
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