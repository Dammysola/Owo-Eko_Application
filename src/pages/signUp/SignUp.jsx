import React, { useState } from 'react'
import Style from './SignUp.module.css'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'

const SignUp = () => {
  const [UserDetails, setUserDetails] = useState({
    phoneNumber: '',
    createPassword: '',
    confirmPassword: ''
  })

  const Details = (e) => {
    const value = e.target.value
    const name = e.target.name

    setUserDetails(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(UserDetails.confirmPassword, UserDetails.createPassword, UserDetails.phoneNumber);
  }
  return (
    <div id={Style.SignUpDiv}>
      <div id={Style.SignUp_mainDiv}>
        <p id={Style.SignUp_text}>Sign Up</p>
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"tel"}
              name={"phoneNumber"}
              value={UserDetails.phoneNumber}
              OnChange={Details}
            />

            <div id={Style.SignUp_passwordInput_Div}>
              <InputField
                label={"Create Password"}
                placeholder={"Create Password"}
                type={"text"}
                name={"createPassword"}
                value={UserDetails.createPassword}
                OnChange={Details}
              />

              <InputField
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
                type={"text"}
                name={"confirmPassword"}
                value={UserDetails.confirmPassword}
                OnChange={Details}
              />
            </div>
          </div>
          <div id={Style.SignUp_btnDiv}>
            <Button
              type={"submit"}
              children={"Sign Up"}
              onChange={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp