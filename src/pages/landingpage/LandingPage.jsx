import React, { useState } from 'react'
import Style from './LandingPage.module.css'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import How_It_worksCard from '../../components/card/How_It_worksCard'
import videoFrame from '../../assets/svg/videoFrame.svg'
import tabScreen from '../../assets/svg/iPad_Pro_Mockup.svg'
import arrow from '../../assets/svg/arrow-circle-down.svg'
import logo from '../../assets/svg/logo.svg'
import mail from '../../assets/svg/mail.svg'
import call from '../../assets/svg/call.svg'
import signUp from '../../assets/svg/signUp.svg'
import tapping from '../../assets/svg/tapping.svg'
import money from '../../assets/svg/money.svg'

const LandingPage = () => {
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)

  const faqs = document.getElementsByClassName(Style.FAQ_questions)

  const faqActive = (index) => {

    if (index == 1) {

      setActive1(!active1)

    } else if (index == 2) {

      setActive2(!active2)
    } else if (index == 3) {

      setActive3(!active3)
    }

    // console.log("Index", index);

    //   faqs[index].classList.add("active")

  }

  // faqs.forEach(FAQ_questions =>{
  //   FAQ_questions.addEventListener("click", ()=>{
  //     FAQ_questions.classList.toggle("active")
  //   })
  // })

  const CardOne = [
    {
      image: signUp,
      header: 'Sign Up',
      text: 'Create an account in seconds'
    },
    {
      image: tapping,
      header: 'Start Tapping',
      text: 'Tap 1000 times each day to earn 1000 coins'
    },
    {
      image: money,
      header: 'Redeem Your Coins',
      text: 'Redeem your coins for Naira. 1000 coins = 1000 Naira'
    }
  ]
  // const CardTwo = [
  //   {
  //     header: 'Simple and Fun',
  //     text: 'Easy-to-use interface with an engaging tapping experience'
  //   },
  //   {
  //     header: 'Daily Rewards',
  //     text: 'Earn 1000 coins every day without any hassle'
  //   },
  //   {
  //     header: 'Secure Payments',
  //     text: 'Guaranteed and timely payouts directly to your account'
  //   }
  // ]
  return (

    <div id={Style.nav}>
      <div id={Style.LandingPage_mainDiv}>
        <div id={Style.LandingPage_boldText}>Tap Your Way to Cash with OwoEko!</div>
        <div id={Style.LandingPage_smallText}>Turn your taps into real money! Earn up to 1000 Naira daily by simply tapping your screen. Join the OwoEko community and start earning today!</div>

        <Link to={'/signup'}>
          <Button
            text={"Play Now"} />
        </Link>
        {/* <div id={Style.carousel_text}>
          <p>Please be aware that ads may appear in your browser while using our site. Rest assured, these ads help us keep our services free for you. Don't forget to close all tabs when you're done browsing. Thank you for your understanding and enjoy your visit!</p>
        </div> */}
      </div>


      <div id={Style.CardOne_MainDiv}>
        <p id={Style.Card_MainDiv_heading}>How it Works</p>
        <div id={Style.style}>
          {
            CardOne.map((object) => {

              return (
                <How_It_worksCard
                  image={object.image}
                  header={object.header}
                  text={object.text} />

              )
            })
          }
        </div>
      </div>
      <div id={Style.VideoFrame_mainDiv}>
        <div id={Style.VideoFrame_Wrapper}>
          <div>
          <p>Sneak Peek - How to Play</p>
          <div id={Style.videoFrame_text}>Here's how to play OwoEko seamlessly. Follow these simple steps to start earning rewards effortlessly</div>
          </div>

          <div>
            <img src={videoFrame} alt="" />
          </div>
        </div>
      </div>
      <div id={Style.Reason_mainDiv}>
        <div id={Style.Reason_mainDiv_wrapper}>
          <div id={Style.Reason_mainDiv_textDiv}>
            <div id={Style.Reason_mainDiv_wrapper_text}>Why You'll Love OwoEko</div>
            <div id={Style.reason_Text}>OwoEko offers a seamless and enjoyable tapping experience with several benefits</div>
          </div>

          <div id={Style.Reason_List_mainDiv}>
            <div className={Style.Reason_ListDiv}>
              <p>Simple and Fun</p>
              <div>Easy-to-use interface with an engaging tapping experience</div>
            </div>
            <div className={Style.Reason_ListDiv}>
              <p>Daily Rewards</p>
              <div>Earn 1000 coins every day without any hassle</div>
            </div>
            <div className={Style.Reason_ListDiv}>
              <p>Secure Payments</p>
              <div>Guaranteed and timely payouts directly to your account</div>
            </div>
          </div>
        </div>
        <div id={Style.how_to_Play_mainDiv}>
          <p>See Our App in Action</p>
          <div id={Style.how_to_Play_earning}>Get a glimpse of the engaging and user-friendly interface of our tapping app. Designed for an immersive experience</div>
          <div id={Style.TabScreen_Div}>
            <img src={tabScreen} alt="" />
          </div>
        </div>
      </div>

      <div id={Style.FAQ_MainDiv}>
        <div id={Style.FAQ_Wrapper}>
          <p>Frequently Asked Questions</p>
          <div>Find answers to common questions about how to play, earn rewards and manage your account with OwoEko</div>
        </div>

        <div id={Style.FAQ_questionDiv}>

          <div className={Style.FAQ_questions} onClick={() => faqActive(1)}>
            <div className={Style.question}>
              How do i earn coins?
              <img src={arrow} alt="" className={`${Style.arrow} ${active1 ? Style.arrow_active : ""}`} />
            </div>
            <div className={`${Style.answer} ${active1 ? Style.answer_active : ""}`}>
              <p>You can earn coins in OkoEko by completing various in-app activities such as tapping challenges, daily login bonuses, and special events.</p>
            </div>
          </div>
          <div className={Style.FAQ_questions} onClick={() => faqActive(2)}>
            <div className={Style.question} >
              How do I redeem my coins?
              <img src={arrow} alt="" className={`${Style.arrow} ${active2 ? Style.arrow_active : ""}`} />
            </div>
            <div className={`${Style.answer} ${active2 ? Style.answer_active : ""}`}>
              <p>Redeeming coins in OwoEko is easy! Simply go to the 'Profile' section of the app, where you'll find a variety of options to choose from. Select withdraw, and follow the prompts to complete the redemption process.</p>
            </div>
          </div>
          <div className={Style.FAQ_questions} onClick={() => faqActive(3)}>
            <div className={Style.question}>
              When will I receive my payment?
              <img src={arrow} alt="" className={`${Style.arrow} ${active3 ? Style.arrow_active : ""}`} />
            </div>
            <div className={`${Style.answer} ${active3 ? Style.answer_active : ""}`}>
              <p>Payment is processed immediately! Once you redeem your coins for a reward, you will receive your payment right away</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div id={Style.contactUs_Div}>
          <img id={Style.contactUs_Div_logo} src={logo} alt="" />

          <div>
            Contact Us
            <p id={Style.contactUs_LogoDiv}>
              <img src={mail} alt="" />support@owoeko.ng
              <img src={call} alt="" />+234 9012222221
            </p>

          </div>
        </div>

        <div id={Style.lastLine_Div}>
          <hr />
          All rights reserved. © 2024 OWOEKO
        </div>
      </footer>

    </div>
  )
}

export default LandingPage