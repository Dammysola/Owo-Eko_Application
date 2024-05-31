import React, { useState } from 'react'
import Style from '../recoveryOTP/PasswordOTP.module.css'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input_Form/InputField'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const passwordOTP = () => { 
    let navigate = useNavigate()
    let {userData} = useParams()

    


    const [enterOTP, setEnterOTP] = useState('')


    const OTPsubmit = async ()=>{

        try {
            const response = await axios.post('https://owo-eko-api.onrender.com/user/verify-otp-pass', {} )
        } catch (error) {
            
        }
    } 

    const OTPdetails = (e)=>{
        const value = e.target.value

        setEnterOTP(
            value
        )
    }

    const handleOTPsubmission = (e)=>{
        e.preventDefault(e)
        console.log(enterOTP);
    }

  return (
    <div id={Style.Forgot_Password_OTPDiv}>
        <div id={Style.Forgot_Password_OTPWrapper}>
                <div id={Style.Forgot_Password_OTPheader}>Enter OTP</div>
                <p>Enter the six digit code sent to johndoe@gmail.com to reset your password</p>
                <form onSubmit={handleOTPsubmission}>
                    <InputField
                        label={"Email Code"}
                        placeholder={"Enter Code"}
                        type={"tel"}
                        value={enterOTP}
                        OnChange={OTPdetails}
                    />

                    <div id={Style.Password_OTP_btnDiv}>
                        <Button
                            type={"submit"}
                            text={"Submit"}
                            onChange={handleOTPsubmission}
                        />
                    </div>
                </form>
            </div>
    </div>
  )
}

export default passwordOTP