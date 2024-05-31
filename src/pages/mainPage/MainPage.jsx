import React, { useEffect, useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import singleCoin from '../../assets/svg/singleCoin.svg'
import busConductor from '../../assets/image/bus_conductor.png'
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
    //Adsterra
    // {
    //   text: "1",
    //   link: "https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9",
    // },
    // {
    //   text: "2",
    //   link: "https://www.highcpmgate.com/hjfjqcmv?key=1659ab3504d2485944d533bfab3f2c61",
    // },
    // {
    //   text: "3",
    //   link: "https://www.highcpmgate.com/etxxi570?key=8bb110da87fb5f517d7a24da1deeadb1",
    // },
    // {
    //   text: "4",
    //   link: "https://www.highcpmgate.com/qfe6sus8vf?key=884ebfbb5a3dcfd7125855466700be82",
    // },
    // {
    //   text: "5",
    //   link: "https://www.highcpmgate.com/hgwu4185j?key=8c96bcf604014d965166e6a30061b1f1",
    // },
    // {
    //   text: "6",
    //   link: "https://www.highcpmgate.com/xui6gn5u?key=3a0a88d85d59792f2f5cd9c0f89d29eb",
    // },
    // {
    //   text: "7",
    //   link: "https://www.highcpmgate.com/hennuqph?key=f5b9167242ebea5a1e4f625436f15d5c",
    // },
    // {
    //   text: "8",
    //   link: "https://www.highcpmgate.com/m3ur3t8p91?key=5da194ed45d75828e8973932313cf81d",
    // },
    // {
    //   text: "9",
    //   link: "https://www.highcpmgate.com/zjx2ud0f?key=919a95fae9422495fabc819ab86cdc0a",
    // },
    // {
    //   text: "10",
    //   link: "https://www.highcpmgate.com/wqe92x66r?key=ff681336a37e43d68a2ea27b78dc83a5",
    // },
    // {
    //   text: "11",
    //   link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
    // },
    // {
    //   text: "12",
    //   link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
    // },
    //Moneytag
    // {
    //   text: "Money Tag - 1",
    //   link: "https://meenetiy.com/4/7549769",
    // },
    // {
    //   text: "Money Tag - 2",
    //   link: "https://eetognauy.net/4/5114081",
    // },
    // {
    //   text: "Money Tag - 3",
    //   link: "https://tauphaub.net/4/7549785",
    // },
    // {
    //   text: "Money Tag - 4",
    //   link: "https://voostaidoo.net/4/7549778",
    // },
    // {
    //   text: "Money Tag - 5",
    //   link: "https://psoansumt.net/4/7549780",
    // },
    // {
    //   text: "Money Tag - 6",
    //   link: "https://oulsools.com/4/7549783",
    // },
    // {
    //   text: "Money Tag - 7",
    //   link: "https://owhaptih.net/4/7549787",
    // },
    // {
    //   text: "Money Tag - 8",
    //   link: "https://psoansumt.net/4/7549788",
    // },
    // {
    //   text: "Money Tag - 9",
    //   link: "https://shasogna.com/4/7549779",
    // },
    // {
    //   text: "Money Tag - 10",
    //   link: "https://outnidorinoom.com/4/7549786",
    // },
    // {
    //   text: "Money Tag - 11",
    //   link: "https://chouthep.net/4/7549772",
    // },
    // {
    //   text: "Money Tag - 12",
    //   link: "https://upontogeticr.com/4/7549784",
    // },
    // {
    //   text: "Money Tag - 13",
    //   link: "https://ethaistoothi.com/4/7549825",
    // },
    // {
    //   text: "Money Tag - 14",
    //   link: "https://psuftoum.com/4/7549833",
    // },
    // {
    //   text: "Money Tag - 15",
    //   link: "https://taucaphoful.net/4/7549836",
    // },
    // {
    //   text: "Money Tag - 16",
    //   link: "https://roastoup.com/4/7549838",
    // },
    // {
    //   text: "Money Tag - 17",
    //   link: "https://wissoony.net/4/7549841",
    // },
    // {
    //   text: "Money Tag - 18",
    //   link: "https://thechoansa.com/4/7549850",
    // },
    // {
    //   text: "Money Tag - 19",
    //   link: "https://loaptaijuw.com/4/7549851",
    // },
    // {
    //   text: "Money Tag - 20",
    //   link: "https://whulsaux.com/4/7549852",
    // },

    //Adsterra Gamer
    {
      text: "Adsterra Gamer - 1",
      link: "https://www.highcpmgate.com/cfwz4zka?key=15e4796ca3c0cde02221ef4226684e34",
    },
    {
      text: "Adsterra Gamer - 2",
      link: "https://www.highcpmgate.com/c9rarvzh5?key=42b162bd11f747a51fa51a964d4d86a6",
    },
    {
      text: "Adsterra Gamer - 3",
      link: "https://www.highcpmgate.com/kqff7ke7?key=962c969075f2247812821961589e0400",
    },
    {
      text: "Adsterra Gamer - 4",
      link: "https://www.highcpmgate.com/jkqedxz0r?key=99587ee47cb6e97f1ea31bf0bbdd5c91",
    },
    {
      text: "Adsterra Gamer - 5",
      link: "https://www.highcpmgate.com/fj5878ge?key=90c95f41a246a762d22e8e1c217b440a",
    },
    {
      text: "Adsterra Gamer - 6",
      link: "https://www.highcpmgate.com/me02hvrig?key=f1157b70797165df316f20c8fec84f51",
    },
    {
      text: "Adsterra Gamer - 7",
      link: "https://www.highcpmgate.com/p8k4zkptn?key=3fecb3051ebe9c36247c45c029f705e3",
    },
    {
      text: "Adsterra Gamer - 8",
      link: "https://www.highcpmgate.com/f3mb4amav?key=decd3e887e3f800960e7d6b62785a398",
    },
    {
      text: "Adsterra Gamer - 9",
      link : "https://www.highcpmgate.com/ptppavw2pe?key=81034d6b489066e17d22418c2d705e23"
    },
    {
      text: "Adsterra Gamer - 10",
      link : "https://www.highcpmgate.com/t7k2f3m194?key=98c92bd9b4ae932e16bd6f6dfa25d3a7"
    },
    {
      text: "Adsterra Gamer - 11",
      link : "https://curvedheldideal.com/x5mu4ubb53?key=909b40894b733aab10f5904b0547c6e5"
    },

    // //Adsterra Unique
    // {
    //   text: "Adsterra Unique - 1",
    //   link : "https://www.highcpmgate.com/eh07g9563i?key=b730c667ed11095d5e1beb9a8d9d5db3"
    // },
    // {
    //   text: "Adsterra Unique - 2",
    //   link : "https://barelydonkeysteed.com/dgta4wqgz?key=e917ef02f1a460d6d242ec2475b13aee"
    // },
    // {
    //   text: "Adsterra Unique - 3",
    //   link : "https://barelydonkeysteed.com/fvij3tnh7d?key=98b2d1b5f52e437fbfb347e841ab8889"
    // },
    // {
    //   text: "Adsterra Unique - 4",
    //   link : "https://barelydonkeysteed.com/r2g5mi9c?key=cb220c6a3ed2414269768cb278c0655f"
    // },
    // {
    //   text: "Adsterra Unique - 5",
    //   link : "https://barelydonkeysteed.com/up344ha6?key=57c3546b3ad2e285d18cde968f3ba85e"
    // }
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
      if (index < (links.length - 1)) {
        setIndex(index + 1)
      }
      else {
        setIndex(0)
      }


      // if (count === 10) {
      //   updateClaimPopup(true)
      // }
      setToggleImg(!toggleImg)
      setCount(count + 1)

      // if (count === 10) {
      //   updateClaimPopup(true)
      //   // setProgressImg(!progressImg)
      // }
     
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
        <div> <img src={busConductor} alt="" />Eko la wa</div>
      </div>
    </div>
  )
}

export default MainPage