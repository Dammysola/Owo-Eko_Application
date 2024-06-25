import React, { useEffect, useState } from 'react'
import Style from '../mainPage/MainPage.module.css'
import bus from '../../assets/svg/bus.svg'
import dummyCoin from '../../assets/svg/dummyCoin.svg'
import busConductor from '../../assets/image/bus_conductor.png'
import avatar from '../../assets/svg/avatar.svg'
import busLight from '../../assets/svg/busLight.svg'
import danfo from '../../assets/svg/danfoDark.svg'
import trafficLightOff from '../../assets/svg/trafficLightOff.svg'
import flag from '../../assets/svg/flag.svg'
import trafficLightOn from '../../assets/svg/trafficLightOn.svg'
import { popupContextHook } from '../../PopupContext'
import { userContextHook } from '../../UserContext'
import { useUser } from '../../api_services/User'
import { Links } from '../../api_services/Links'
import Maruwa from '../../assets/svg/maruwa_side.svg'
import owa_img from '../../assets/svg/owa_img.svg'


const MainPage = () => {
    let [count, setCount] = useState(50)
    let [index, setIndex] = useState(0)
    const [toggleImg, setToggleImg] = useState(0)
    const [progressWidth, setProgressWidth] = useState("");

    const { getUserDetails } = useUser();

    const { userDetails, updateDetails, accountDetails, updateAccountDetails } = userContextHook()
    const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateClaimPopup, updateProfile, profile, updateTapExceededPopup, updateBankReg } = popupContextHook()

    const links = Links

    const images = [
        bus,
        busLight,
        Maruwa,
        owa_img
    ]

    const Details = async () => {

        let details = JSON.parse(localStorage.getItem("user_details"));
        let account = JSON.parse(localStorage.getItem("account_details"));

        updateDetails(details)
        updateAccountDetails(account)

        if (account.acc_name != "") {
            updateBankReg(false)
        } else {
            updateBankReg(true)
        }

        setProgressWidth(`${(details.balance / 2000) * 100}%`)

        try {
            await getUserDetails(details.email);
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


    const testingLink = (event) => {

        event.preventDefault();

        let dates = new Date();
        let dateNow = dates.getTime();

        console.log("Date :", dateNow);
        console.log("Next Click :", userDetails.time);

        let connection = window.navigator.onLine;
        if (connection) {
            if (userDetails.time == "" || dateNow > userDetails.time) {

                if (userDetails.balance <= 1999) {

                    if (index < (links.length - 1)) {
                        setIndex(index + 1)
                    }
                    else {
                        setIndex(0)
                    }

                    setToggleImg((prevIndex) => (prevIndex + 1) % images.length)
                    setCount(count - 1)

                    if (count === 1) {
                        setCount(50)
                        updateClaimPopup(true)
                        // setProgressImg(!progressImg)
                    }

                    setProgressWidth(`${(userDetails.balance / 2000) * 100}%`);

                    let url = links[index].link;
                    // let win = window.open(`${url}`, "_blank");
                    window.open(`${url}`, "_blank", "popup, top=1000 left=2000 width=10,height=10");

                    // win.addEventListener('load', function () {
                    //   console.log('All assets are loaded')
                    // })
                } else {
                    updateTapExceededPopup(true);
                }
            }

        } else {

            updateErrorText("No Internet Connection")

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000);
        }
    }


    useEffect(() => {
        Details();
    }, []);

    return (
        <div id={Style.MainPage_Div}>
            <div id={Style.MainPage_firstDiv}>
                <div id={Style.MainPageDiv}>
                    <div id={Style.MainPage_screenTextDiv}>

                        <div id={Style.MainPage_coinDiv}>
                            <div id={Style.MainPage_biniCoin}>Account Balance</div>
                            <div id={Style.MainPage_dummyCoinText_Div}>
                                <img src={dummyCoin} alt="" />
                                <div>{userDetails.balance}</div>
                            </div>
                        </div>

                        <div id={Style.ProgressBar_mainDiv}>
                            <div id={Style.ProgressBar_ImageDiv}>
                                <div></div>
                                {userDetails.balance >= 500 ? (<img src={trafficLightOn} alt="" />) : (
                                    <img src={trafficLightOff} alt="" />
                                )}
                                {userDetails.balance >= 1000 ? (<img src={trafficLightOn} alt="" />) : (
                                    <img src={trafficLightOff} alt="" />
                                )}
                                {userDetails.balance >= 1500 ? (<img src={trafficLightOn} alt="" />) : (
                                    <img src={trafficLightOff} alt="" />
                                )}
                                <img src={flag} alt="" />
                            </div>

                            <div id={Style.milestoneDiv}>
                                <div id={Style.Progressfill} style={{ width: progressWidth }}><img src={danfo} alt="" /></div>
                            </div>
                            <div id={Style.MainPage_milestoneText}>
                                <p>0</p>
                                <p>500</p>
                                <p>1000</p>
                                <p>1500</p>
                                <p>2000</p>
                            </div>
                        </div>

                        <div id={Style.MainPage_text}>Tap tap tap, can't slow down, Rhythm flows, in this town. Energy high, fingers pop, Tap tap tap, feel the shine.</div>
                        <div id={Style.MainPage_TapsLeft}>{count} taps left</div></div>

                    <div id={Style.progress}>
                        <div id={Style.progress_done} style={{ width: progressWidth }}></div>
                    </div>

                    <div id={Style.btnDiv}>
                        <button id={Style.Mainpage_button} onClick={testingLink}>
                            {/* {images[toggleImg] ? (
                                <img src={busLight} alt="" />
                            ) : (
                                
                            )} */}


                            <img src={images[toggleImg]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div id={Style.MainPageText}>
                <button onClick={() => { updateProfile(!profile) }}><img src={avatar} alt="" />{userDetails.username}</button>
                <div> <img src={busConductor} alt="" />Eko la wa</div>
            </div>
        </div>
    )
}

export default MainPage