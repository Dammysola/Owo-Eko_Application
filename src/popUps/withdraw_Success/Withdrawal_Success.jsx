import React from 'react'
import Style from '../withdraw_Success/Withdrawal_Success.module.css'
import successImage from '../assets/svg/withdrawal_Success.svg' 
import Button from '../components/button/Button'


const Withdrawal_Success = () => {
  return (
    <div id={Style.Withdrawal_Success_mainDiv}>
        <div id={Style.Withdrawal_Success_Wrapper}>
            <img src={successImage} alt="" />
            <div>Withdrawal Success</div>
            <div>
            <Button
              type={"submit"}
              text={"Go Home"}/>
            </div>
        </div>
    </div>
  )
}

export default Withdrawal_Success