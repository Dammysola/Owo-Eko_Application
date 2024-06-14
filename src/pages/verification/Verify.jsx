import React, { useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Style from './Verify.module.css'
import Button from '../../components/button/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'
import { useUser } from '../../api_services/User'

const Verify = () => {

  const { getUserDetails } = useUser();

  let navigate = useNavigate()
  let { userData } = useParams()
  const [userCode, setUserCode] = useState('')
  const [verifyError, setVerifyError] = useState('')
  const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

  let data = JSON.parse(userData)

  const { email, phoneNumber, password } = data

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
      updateLoadingPopup(true);
      const response = await axios.post("https://owo-eko-api.onrender.com/user/verify-otp",
        {
          "email": email,
          "otp": userCode
        }
      )

      console.log("Loggedin Id", response.data["loggedin_id"]);

      if (response.status == 200) {
        
      updateLoadingPopup(false);

        console.log("Verification Successful", response.data)
          navigate(`/login`);

      } else {

        updateLoadingPopup(false);
        updateErrorText(response.data)
        console.log("Verification Failed", response.data)
        updateErrorPopup(true)
        setTimeout(() => {
          updateErrorPopup(false)
        }, 2000)
      }

    } catch (err) {
      updateLoadingPopup(false);
      let userError = err

      updateErrorText("Error")

      updateErrorPopup(true)
      setTimeout(() => {
        updateErrorPopup(false)
      }, 2000);

      console.log("Verification dd: ", userError)
    }
  }
  return (
    <div id={Style.VerificationDiv}>
      <div id={Style.Verification_textDiv}>
        <div id={Style.Verification_header}>Complete sign up be verifying your <br />email address</div>
        <div id={Style.Verification_subtext}>We sent a code to {email}, enter code to continue</div>
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