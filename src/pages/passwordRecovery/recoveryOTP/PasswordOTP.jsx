import React, { useState } from 'react'
import Style from '../recoveryOTP/PasswordOTP.module.css'
import Button from '../../../components/button/Button'
import InputField from '../../../components/input_Form/InputField'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { popupContextHook } from '../../../PopupContext'



const passwordOTP = () => {
    let navigate = useNavigate()
    let { email } = useParams()

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()
    const [enterOTP, setEnterOTP] = useState('')


    const OTPsubmit = async () => {

        try {
            updateLoadingPopup(true)
            console.log(email)
            const response = await axios.post('https://owo-eko-api.onrender.com/user/verify-otp-pass',
                {
                    "email": email,
                    "otp": enterOTP
                }
            )
            console.log(response.status);
            updateLoadingPopup(false)

            if (response.status == 200) {
                console.log('Verification successful', response.data);

                navigate('/resetpassword')
            }


        } catch (error) {
            updateLoadingPopup(false);
            let userError = error.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            // setOTPError(userError)
            // console.log("failed", setOTPError)

            console.log("failed", userError);

        }
    }

    const resendOtp = async (e) => {
        e.preventDefault(e);

        try {

            console.log("Otp")
            console.log(email)
            const response = await axios.post('https://owo-eko-api.onrender.com/user/resendotp',
                {
                    "email": email,
                }
            )
            console.log(response.status);

            if (response.status == 200) {
                console.log('Otp Resent', response.data);

            }else{
                
                console.log('Otp Resent', response.data);
            }
        } catch (error) {
            let userError = error.response.data.message

            updateErrorText(userError)

            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            // setOTPError(userError)
            // console.log("failed", setOTPError)

            console.log("failed", error);

        }
    }

    const OTPdetails = (e) => {
        const value = e.target.value
        setEnterOTP(
            value
        )
    }

    const handleOTPsubmission = (e) => {
        OTPsubmit()
        e.preventDefault(e)
        console.log(enterOTP);
    }

    return (
        <div id={Style.Forgot_Password_OTPDiv}>
            <div id={Style.Forgot_Password_OTPWrapper}>
                <div id={Style.Forgot_Password_OTPheader}>Enter OTP</div>
                <p>Enter the six digit code sent to {email} to reset your password</p>
                <form onSubmit={handleOTPsubmission}>
                    <InputField
                        label={"Email Code"}
                        placeholder={"Enter Code"}
                        type={"tel"}
                        value={enterOTP}
                        OnChange={OTPdetails}
                    />

                    <button id={Style.resend} onClick={resendOtp}>Resend OTP</button>
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