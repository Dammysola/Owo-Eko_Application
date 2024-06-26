import React, { useEffect, useState } from 'react'
import Style from '../profile/Profile.module.css'
import avatar from '../../assets/svg/avatar.svg'
import TotalCoins from './tabs/TotalCoins';
import WithdrawalHistory from './tabs/WithdrawalHistory';
import dummyCoin from "../../assets/svg/dummyCoin.svg"
import { popupContextHook } from '../../PopupContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import axios from 'axios';

const Profile = () => {

    const navigate = useNavigate()
    let [tabIndex, setTabIndex] = useState(0);
    let [userDetails, setUserDetails] = useState({});

    const { updateProfile, profile, updateWithdrawalPopup, updateLoadingPopup, updateErrorPopup, updateErrorText } = popupContextHook();


    const add = () => {
        updateProfile(false)
        updateWithdrawalPopup(true)
    }

    const tabClick = (index) => {

        setTabIndex(index)

    }

    useEffect(() => {
        setUserDetails(details)

    }, []);

    let loggedin_id = localStorage.getItem("loggedin_id");
    let details = JSON.parse(localStorage.getItem("user_details"));
    let transaction = JSON.parse(localStorage.getItem("transactions"));

    const Logout = async () => {

        updateLoadingPopup(true)
        try {

            let token = localStorage.getItem("token")
            
        console.log(token);


            const response = await axios.post('https://owo-eko-api.onrender.com/user/logout',
                {
                    "email": details.email,
                    "loggedin_id": loggedin_id
                },
                {
                    headers: { Authorization: ` Bearer ${token}` },
                }
            )




            updateLoadingPopup(false)
            console.log(response);
            if (response.status == 200) {
                console.log("successful Logout");
                updateProfile(false)

                navigate('/login')

            }
            else {
                updateErrorText(response.data)
                updateErrorPopup(true)

                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)
            }
        } catch (error) {
            updateLoadingPopup(false);
            let userError = error

            console.log("Error", userError);

            updateErrorText(userError.message)

            updateErrorPopup(true)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }
    }

    return (
        <div id={Style.wrapper}>
            <buttton id={Style.Profile_mainDiv} onClick={() => updateProfile(!profile)}>

            </buttton>
            <div id={Style.Profile_wrapper}>
                <div id={Style.Profile_details}>
                    <div id={Style.Profile_nameDiv}>
                        <img src={avatar} alt="" />
                        <div>{userDetails.username}</div>
                    </div>
                    <div id={Style.balance}>
                        <div id={Style.available}>
                            <img src={dummyCoin} alt="" />Available Coin</div>

                        <p>{userDetails.balance}</p>
                    </div>

                    <div id={Style.Profile_btnDiv}>
                        <button id={Style.withdraw_btn} onClick={add}>Withdrawal</button>
                        <Button
                            onClick={() => Logout()}
                            text={"Logout"} />
                    </div>

                </div>
                <div id={Style.tab_cont}>

                    <button onClick={() => tabClick(0)} style={{ backgroundColor: tabIndex == 0 ? "#2A2A2A" : "transparent" }} class={Style.tab_btn}>Total Coins</button>
                    <button onClick={() => tabClick(1)} style={{ backgroundColor: tabIndex == 1 ? "#2A2A2A" : "transparent" }} class={Style.tab_btn}>Withdrawal History</button>
                </div>
                <div id={Style.tab_content}>
                    {tabIndex == 0 ? <TotalCoins /> : <WithdrawalHistory />}
                </div>

            </div>
        </div >

    )
}

export default Profile