import React, { useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Style from './Verify.module.css'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Verify = () => {
  
  let { userData } = useParams()
  const [userCode, setUserCode] = useState('')
  const [verifyError, setVerifyError] = useState('')

  let data = JSON.parse(userData)

  const {email, phoneNumber, password} = data

  const handleOnChange = (e) => {
    const value = e.target.value

    setUserCode(
      value
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    console.log(email, userCode, "Show")

    try {
      const response = await axios.post("https://owo-eko-api.onrender.com/user/verify-otp",
        {
          "email": email,
          "otp": userCode
        }
      )

      if (response.status == 201) {
        console.log('Verification successful', response.data);

        navigate('/mainpage')
      }else {
        console.log('Verification Failed', response.data);
      }

    } catch (err) {
      let userError = err.response.data.message
      console.log("Verification dd: ", userError)
    }
  }
  return (
    <div id={Style.VerificationDiv}>
      <div id={Style.Verification_textDiv}>
        {email}
        {phoneNumber}
        {password}
        <div id={Style.Verification_header}>Complete sign up be verifying your <br />email address</div>
        <div id={Style.Verification_subtext}>We sent a code to johndoe@gmail.com, enter code to continue</div>
      </div>

      <div id={Style.Verification_formDiv}>
        <form onSubmit={handleSubmit}>
          <InputField
            label={"Enter Code"}
            placeholder={"Type Code"}
            type={"tel"}
            name={"code"}
            value={userCode}
            OnChange={handleOnChange}
          />

          <div id={Style.Input_btnDiv}>
            <Button
              type={"submit"}
              text={"Verify"}
              onChange={handleSubmit}
            />
          </div>
        </form>
        <p>Didn’t receive a code? <button>Resend Code</button></p>
      </div>

    </div>
  )
}

export default Verify