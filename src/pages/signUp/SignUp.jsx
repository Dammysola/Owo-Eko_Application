import React, { useState } from 'react'
import Style from './SignUp.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import { userContextHook } from '../../UserContext'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'

const SignUp = () => {
  const navigate = useNavigate()

  const { updateDetails } = userContextHook()
  const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

  const [signUp, setSignUp] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  })

  const [signUpError, setSignUpError] = useState()

  const Details = (e) => {
    const value = e.target.value
    const name = e.target.name

    setSignUp(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }
  const FormSubmit = async () => {
    
    try {
      updateLoadingPopup(true);
      const response = await axios.post("https://owo-eko-api.onrender.com/user/send-otp",
        {
          "email": signUp.email,
          "phone": signUp.phoneNumber,
          "password": signUp.password
        },
      )

      console.log(response.status)

      updateLoadingPopup(false);

      if (response.status == 200) {

        console.log('signup successful', response.data);
        // updateDetails(...signUp)

        let sendData = JSON.stringify(signUp);
        navigate(`/verify/${sendData}`)
      } else {
        updateErrorText(response.data)

        updateErrorPopup(true)
        setTimeout(() => {
          updateErrorPopup(false)
        }, 1000)

        console.log('signup failed', response.data);
      }
    } catch (err) {

      updateLoadingPopup(false);
      let userError = err.response.data.message

      updateErrorText(userError)

      updateErrorPopup(true)
      setTimeout(() => {
        updateErrorPopup(false)
      }, 1000)

      updateErrorPopup(true)
      setSignUpError(userError)
      console.log("SignUp Failed: ", signUpError)
    }
  }

  const handleSubmit = (e) => {
    FormSubmit()
    e.preventDefault(e)
    console.log(signUp.email, signUp.phoneNumber, signUp.password);
  }
  return (
    <div id={Style.SignUpDiv}>
      <div id={Style.SignUp_mainDiv}>
        <div id={Style.SignUp_text}>Sign Up</div>
        <form onSubmit={handleSubmit}>

          <div>
            <InputField
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              type={"email"}
              name={"email"}
              value={signUp.email}
              OnChange={Details}
            />
          </div>
          <div id={Style.phoneDiv}>
            <InputField
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"tel"}
              name={"phoneNumber"}
              value={signUp.phoneNumber}
              OnChange={Details}
            />
          </div>

          <div id={Style.SignUp_passwordInput_Div}>
            <InputField
              label={"Create Password"}
              placeholder={"Create Password"}
              type={"password"}
              name={"password"}
              value={signUp.password}
              OnChange={Details}
            />

            {/* <InputField
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              type={"text"}
              name={"confirmPassword"}
              value={signUp.confirmPassword}
              OnChange={Details}
            /> */}



          </div>
          <div id={Style.SignUp_btnDiv}>
            <Button
              type={"submit"}
              text={"Sign Up"}
              onChange={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp