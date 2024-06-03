import React from 'react'
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

const LandingPage = () => {
  const CardOne = [
    {
      image: './src/assets/svg/signUp.svg',
      header: 'Sign Up',
      text: 'Create an account in seconds'
    },
    {
      image: './src/assets/svg/tapping.svg',
      header: 'Start Tapping',
      text: 'Tap 1000 times each day to earn 1000 coins'
    },
    {
      image: './src/assets/svg/money.svg',
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
          <p>Sneak Peek - How to Play</p>
          <div id={Style.how_to_Play_earning}>ere's how to play OwoEko seamlessly. Follow these simple steps to start earning rewards effortlessly</div>
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
          
            <div className={Style.FAQ_questions}>
              How do i earn coins?
              <img src={arrow} alt="" />
            </div>
            <div className={Style.FAQ_questions}>How do I redeem my coins?
            <img src={arrow} alt="" />
            </div>
            <div className={Style.FAQ_questions}>When will I receive my payment?
            <img src={arrow} alt="" />
            </div>
          <div>
          </div>
        </div>
      </div>
      <footer>
        <div id={Style.contactUs_Div}>
          <img src={logo} alt="" />
          <div>
            Contact Us
            <img src={mail} alt="" />support@owoeko.ng
            <img src={call} alt="" />+234 9012222221
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