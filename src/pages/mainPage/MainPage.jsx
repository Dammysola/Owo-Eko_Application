import React, { useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import singleCoin from '../../assets/svg/singleCoin.png'
import avatar from '../../assets/svg/avatar.svg'
import busLight from '../../assets/svg/busLight.svg'
import axios from 'axios'


const MainPage = () => {
  const [toggleImg, setToggleImg] = useState(false)

  let [count, setCount] = useState(0)
  let [index, setIndex] = useState(0)

  const links = [{
    text: "1",
    link: "https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9",
  }, {
    text: "2",
    link: "https://www.highcpmgate.com/hjfjqcmv?key=1659ab3504d2485944d533bfab3f2c61",
  }, {
    text: "3",
    link: "https://www.highcpmgate.com/etxxi570?key=8bb110da87fb5f517d7a24da1deeadb1",
  }, {
    text: "4",
    link: "https://www.highcpmgate.com/qfe6sus8vf?key=884ebfbb5a3dcfd7125855466700be82",
  }, {
    text: "5",
    link: "https://www.highcpmgate.com/hgwu4185j?key=8c96bcf604014d965166e6a30061b1f1",
  }, {
    text: "6",
    link: "https://www.highcpmgate.com/xui6gn5u?key=3a0a88d85d59792f2f5cd9c0f89d29eb",
  },
  {
    text: "7",
    link: "https://www.highcpmgate.com/hennuqph?key=f5b9167242ebea5a1e4f625436f15d5c",
  }, {
    text: "8",
    link: "https://www.highcpmgate.com/m3ur3t8p91?key=5da194ed45d75828e8973932313cf81d",
  },
  {
    text: "9",
    link: "https://www.highcpmgate.com/zjx2ud0f?key=919a95fae9422495fabc819ab86cdc0a",
  }, {
    text: "10",
    link: "https://www.highcpmgate.com/wqe92x66r?key=ff681336a37e43d68a2ea27b78dc83a5",
  }, {
    text: "11",
    link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
  }, {
    text: "12",
    link: "https://www.highcpmgate.com/jihvm3ui?key=f808f400599295c77be7e8ffc7c042a9",
  },

  ]

  const increaseCount = async () => {
    // const newCount = count + 1;
    // setCount(newCount)
    try{
      const response = await axios.post()

      console.log('Request successful:', response.data);

    } catch (error) {
      // let userError = error.response.data.message
      // console.error('Failed to trigger backend endpoint:', error);
    }

  }
  const testingLink = (indexs) => {
    if (indexs < 11) {
      setIndex(indexs + 1)
    }
    else{
      setIndex(0)
    }
    setToggleImg(!toggleImg)
    // let win = open('https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9', '_blank', 'noopener, noreferrer');
    console.log("Link No",links[indexs].text)
    let url = links[indexs].link
    let win = window.open(`${url}`, "_blank", "popup, width=10,height=10")
    // let win = window.location.href = `${url}`;
    
    // window.close();

    win.addEventListener('loadstart', ()=>{
      console.log("message")
      setCount(count + 1)
    });

    // win.document.write(`<iframe src=${url} sandbox="allow-top-navigation" width="100%" height="100%"></iframe>`)

    // win.onload = (ev) => {
    //   console.log(setCount(count + 1))
    //   console.log("message")
    //   // 
    //   // setTimeout(() => {
    //   //     win.close();
    //   // }, 2500)
    // };
  }


  function openAndCloseLink() {
    // const googleWindow = window.open("https://www.google.com", '_blank');

    // googleWindow.onload = () => {
    //   console.log("message")
    // }
    // setTimeout(function () {
    //   googleWindow.close();
    // }, 3000); // 3 seconds in milliseconds
    window.open("https://www.google.com", '_blank');
    // newTab.opener = null;

    // window.location = "profile"
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
            <button id={Style.Mainpage_button} onClick={()=>testingLink(index)}>
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