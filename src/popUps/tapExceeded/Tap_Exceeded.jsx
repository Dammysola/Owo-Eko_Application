import React from 'react'
import Style from '../tapExceeded/Tap_Exceeded.module.css'
import avatar from '../../assets/svg/avatar.svg'
import { popupContextHook } from '../../PopupContext'

const Tap_Exceeded = () => {
    
    const { updateTapExceededPopup, updateWithdrawalPopup } = popupContextHook()


    const withdraw= ()=> {
        updateTapExceededPopup(false);
        updateWithdrawalPopup(true);
    }
    return (
        <div id={Style.Tap_Exceeded_mainDiv}>
            <div id={Style.TapExceeded_wrapper}>
                <div id={Style.Tap_Exceeded_name_textWrapper}>
                    <div id={Style.Tap_Exceeded_nameDiv}>
                        <img src={avatar} alt="" />
                        <div>John Doe</div>
                    </div>
                    <div id={Style.Tap_Exceeded_text}>You have exceeded the number of taps today <br /> Let’s go again tomorrow!!</div>
                </div>
                <div id={Style.button_div}>
                    <button id={Style.Tap_Exceeded_btnTwo} onClick={()=>withdraw()}>Withdrawal</button>
                    <button id={Style.Tap_Exceeded_btn} onClick={()=>updateTapExceededPopup(false)}>Continue Tomorrow</button>
                </div>
            </div>
        </div>
    )
}

export default Tap_Exceeded