import React, { useState } from 'react'
import Style from './SignUp.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import { userContextHook } from '../../UserContext'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'
import eye from '../../assets/svg/eye.svg'
import eye_slash from '../../assets/svg/eye-slash.svg'

const SignUp = () => {
  const navigate = useNavigate()

  const { updateDetails } = userContextHook()
  const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

  const [signUp, setSignUp] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  })

  const [validation, setValidation] = useState({
    email: false,
    phoneNumber: false,
    password: false,
  })

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
      }, 2000)

      console.log("SignUp Failed: ", userError)
    }
  }

  const handleSubmit = (e) => {

    e.preventDefault(e)

    let emailVal = signUp.email.includes("@") && signUp.email.includes(".") ? false : true;
    let phoneVal = signUp.phoneNumber.length > 10 ? false : true;
    let passwordVal = signUp.password.length > 4 ? false : true;

    setValidation({
      email: emailVal,
      phoneNumber: phoneVal,
      password: passwordVal,
    })

    let valid = emailVal == false && phoneVal == false && passwordVal == false

    if (valid) {
      FormSubmit()
    }
  }

  return (
    <div id={Style.SignDiv}>
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
                error={validation.email}
                value={signUp.email}
                OnChange={Details}
              />
            </div>
            <div id={Style.phoneDiv}>
              <InputField
                label={"Phone Number"}
                placeholder={"Enter Phone Number"}
                type={"tel"}
                error={validation.phoneNumber}
                name={"phoneNumber"}
                value={signUp.phoneNumber}
                OnChange={Details}
              />
            </div>

            <div id={Style.SignUp_passwordInput_Div}>
              <InputField
                label={"Create Password"}
                placeholder={"Create Password"}
                type={passwordVisible ? 'text' : 'password'}
                name={"password"}
                error={validation.password}
                value={signUp.password}
                OnChange={Details}
              />
              {
                passwordVisible ? (<img onClick={togglePasswordVisibility} src={eye} alt="" />) : (<img onClick={togglePasswordVisibility} src={eye_slash} alt="" />)
              }
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
      <p id={Style.SignUp_login}>Already have an account <Link to={'/login'}>Log In</Link></p>
    </div>
  )
}

export default SignUp