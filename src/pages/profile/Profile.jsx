import React, { useState } from 'react'
import Style from '../profile/Profile.module.css'
import avatar from '../../assets/svg/avatar.svg'
import TotalCoins from './tabs/TotalCoins';
import WithdrawalHistory from './tabs/WithdrawalHistory';
import dummyCoin from "../../assets/svg/dummyCoin.svg"
import { popupContextHook } from '../../PopupContext';

const Profile = () => {
    let [tabIndex, setTabIndex] = useState(0);

    
//   const { updateDetails } = popupContextHook();
    

    const tabClick = (index) => {
        
        console.log("previous",tabIndex);
        setTabIndex(index)
        console.log(tabIndex);

    }

    const testingLink =() => {
        // let win = open('https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9', '_blank', 'noopener, noreferrer');
        
let url = 'https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9'
        let win = window.open('https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9', null, "popup" , 'noopener, noreferrer');

        // win.document.write(`<iframe src="https://www.google.com" sandbox="allow-top-navigation" width="100%" height="100%"></iframe>`)

        win.onload = (ev) => {
            setTimeout(() => {
                win.close();
            }, 2500)
        };
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
                    <button onClick={testingLink} id={Style.withdraw_btn}>Withdrawal</button>
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