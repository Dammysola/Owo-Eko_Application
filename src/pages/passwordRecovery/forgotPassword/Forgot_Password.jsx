import React, { useState } from 'react'
import Style from '../forgotPassword/Forgot_Password.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { popupContextHook } from '../../../PopupContext'



const Forgot_Password = () => {
    //  const [email, setEmail] = useState('')
    //  const [message, setMessage] = useState()
    //  const [passwordError, setPasswordError] = useState()

    const navigate = useNavigate()

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()
    const [forgotPassword, setForgotPassword] = useState('')

    const [validation, setValidation] = useState({
        email: false
    })

    const passwordSubmit = async () => {


        try {
            updateLoadingPopup(true)
            const response = await axios.post('https://owo-eko-api.onrender.com/user/forget-pass', { "email": forgotPassword })

            console.log(response.data);
            console.log("login status", response.status);

            updateLoadingPopup(false)

            if (response.status == 200) {
                console.log('login successful', response.data);

                navigate(`/sendOTP/${forgotPassword}`)

            }
            else {
                updateErrorText(response.data)
                updateErrorPopup(true)

                setTimeout(() => {
                    updateErrorPopup(false)
                }, 1000)

                console.log('signup failed', response.data);

                console.log('login failed', response.data);
            }
        } catch (error) {
            updateLoadingPopup(false);
            let userError = error.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            // setSignUpError(userError)
            console.log("failed", userError);
        }
    }

    const details = (e) => {
        const value = e.target.value

        setForgotPassword(
            value
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        let emailVal = forgotPassword.includes("@") && forgotPassword.includes(".") ? false : true;

        setValidation({
            email: emailVal
        })
        let valid = emailVal == false
        if (valid) {
            passwordSubmit()
        }


        console.log(forgotPassword);
    }
    return (
        <div id={Style.Forgot_PasswordDiv}>
            <div id={Style.Forgot_Password_FormWrapper}>
                <div id={Style.Forgot_Password_header}>Forgot Password</div>
                <p>Enter your email address to receive password reset code</p>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label={"Email Address"}
                        placeholder={"Enter Email Address"}
                        type={"email"}
                        error={validation.email}
                        value={forgotPassword}
                        OnChange={details}
                    />

                    <div id={Style.Forgot_Password_btnDiv}>
                        <Button
                            type={"submit"}
                            text={"Submit"}
                            onChange={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot_Password