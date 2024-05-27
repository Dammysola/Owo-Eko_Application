import React, { useState } from 'react'
import Style from '../profile/Profile.module.css'
import avatar from '../../assets/svg/avatar.svg'
import TotalCoins from './tabs/TotalCoins';
import WithdrawalHistory from './tabs/WithdrawalHistory';
import dummyCoin from "../../assets/svg/dummyCoin.svg"

const Profile = () => {
    let [tabIndex, setTabIndex] = useState(0);

    const tabClick = (index) => {
        
        console.log("previous",tabIndex);
        setTabIndex(index)
        console.log(tabIndex);

    }

    return (
        <div id={Style.Profile_mainDiv}>
            <div id={Style.Profile_wrapper}>
                <div id={Style.Profile_details}>
                    <div id={Style.Profile_nameDiv}>
                        <img src={avatar} alt="" />
                        <div>John Doe</div>
                    </div>
                    <div id={Style.balance}>
                        <div id={Style.available}>
                        <img src={dummyCoin} alt="" />Available Coin</div>
                        <p>15000</p>
                    </div>
                    <button id={Style.withdraw_btn}>Withdrawal</button>
                </div>
                <div id={Style.tab_cont}>

                    <button onClick={()=>tabClick(0)} style={{backgroundColor: tabIndex == 0 ? "#2A2A2A" : "transparent"}} class={Style.tab_btn}>Total Coins</button>
                    <button onClick={()=>tabClick(1)} style={{backgroundColor: tabIndex == 1 ? "#2A2A2A" : "transparent"}}  class={Style.tab_btn}>Withdrawal History</button>
                </div>
                <div id={Style.tab_content}>
                    {tabIndex == 0  ? <TotalCoins/> : <WithdrawalHistory/>}
                </div>

            </div>
        </div>
    )
}

export default Profile