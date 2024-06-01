import React, { useState } from 'react'
import Style from '../recoveryOTP/PasswordOTP.module.css'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input_Form/InputField'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const passwordOTP = () => { 
    let navigate = useNavigate()
    let {email} = useParams()
    const [userCode, setUserCode] = useState('')


    const [enterOTP, setEnterOTP] = useState('')


    const OTPsubmit = async ()=>{

        try {
            console.log(email)
            const response = await axios.post('https://owo-eko-api.onrender.com/user/verify-otp-pass', 
            {
            "email": email,
            "otp": userCode
             } 
            )
            console.log(response.status);

            if (response.status == 200) {
                console.log('Verification successful', response.data);
        
                navigate('/resetpassword')
              }
        

        } catch (error) {
            let userError = error.response.data.message

            console.log("failed", userError);

        }
    } 

    const OTPdetails = (e)=>{
        const value = e.target.value
        setEnterOTP(
            value
        )
    }

    const handleOTPsubmission = (e)=>{
        OTPsubmit()
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