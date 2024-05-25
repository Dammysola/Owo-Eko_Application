import React, { useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Style from './Verify.module.css'
import Button from '../../components/button/Button'

const Verify = () => {
  const [userCode, setUserCode] = useState('')

  const Detail = (e) => {
    const value = e.target.value

    setUserCode(
      value
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(userCode);
  }
  return (
    <div id={Style.VerificationDiv}>
        <div id={Style.Verification_textDiv}>
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
              OnChange={Detail}
            />

            <div id={Style.Input_btnDiv}>
              <Button
                type={"submit"}
                text={"Verify"}
                onChange={handleSubmit} />
            </div>
          </form>
          <p>Didn’t receive a code? <button>Resend Code</button></p>
        </div>
  
    </div>
  )
}

export default Verify