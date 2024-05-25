import React, { useState } from 'react'
import InputField from '../input_Form/InputField'
import NavBar from '../navBar/Navbar'
import Style from '../verification/Verify.module.css'
import Button from '../button/Button'

const Verify = () => {
  const [userCode, setUserCode] = useState('')

  const Detail = (e) => {
    const value = e.target.value
    const name = e.target.name

    setUserCode(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(userCode);
  }
  return (
    <div id={Style.VerificationDiv} >
      {/* <NavBar/> */}
      <div id={Style.Verification_mainDiv}>
        <div id={Style.Verification_textDiv}>
          <div id={Style.Verification_boldText}>Complete sign up be verifying your email address</div>
          <div>We sent a code to johndoe@gmail.com, enter code to continue</div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div id={Style.InputDiv}>
              <label>Enter code</label>
              <input id={Style.Input} type="tel" placeholder='Type code' name='code' value={userCode} onChange={Detail} />
            </div>

            <div id={Style.Input_btnDiv}>
              <Button
                type={"submit"}
                children={"Verify"}
                onChange={handleSubmit} />
            </div>
          </form>
          <p>Didn’t receive a code? <span>Resend Code</span></p>
        </div>
      </div>
    </div>
  )
}

export default Verify