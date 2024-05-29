import React, { useEffect, useState } from 'react'
import logo from '../../assets/svg/logo.svg'
import Style from '../noMobile/No_mobile.module.css'
import LandingPage from '../../pages/landingpage/LandingPage';



const No_Mobile = () => {


    return (
        <>

            <div id={Style.Tap_Exceeded_mainDiv}>
                <div id={Style.TapExceeded_wrapper}>
                    <div id={Style.Tap_Exceeded_name_textWrapper}>
                        <div>Sorry, Owo Eko is only available on desktop for now</div>
                        <div>Fingers crossed for our mobile launch!</div>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default No_Mobile