import React from 'react'
import Style from '../bank_registration/Bank_Registration.module.css'
import warning from '../../assets/svg/warning.svg'



const Bank_Registration = () => {
  return (
    <div id={Style.Bank_Registration_mainDiv}>
            <div id={Style.Bank_Registration_wrapper}>
                <div id={Style.Bank_Registration_name_textWrapper}>
                
                        <div id={Style.Bank_Registration_nameText}>Register your bank details to continue</div>
                
                    <div id={Style.Bank_Registration_text}>To enable us process your payments swiftly, register your bank details</div>
                </div>
                <div id={Style.button_div}>
                    <button id={Style.Bank_Registration_btn}>Continue</button>
                </div>
                <div id={Style.warningDiv}><img src={warning} alt="" /> This is the account you will use to receive payments on OwoEko</div>
            </div>
        </div>
  )
}

export default Bank_Registration