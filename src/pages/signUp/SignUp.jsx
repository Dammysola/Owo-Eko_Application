import React, { useState } from 'react'
import Style from './SignUp.module.css'
import { Link } from 'react-router-dom'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import { userContextHook } from '../../UserContext'
import axios from 'axios'

const SignUp = async () => {
  const [signUp, setSignUp] = useState({
    phoneNumber: '',
    createPassword: '',
    confirmPassword: ''
  })

   const [signUpError, setSignUpError]= useState()
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

  const response = await axios.post(api, signUp)
  console.log('signup successful', response.data);

  if (response.status == 200) {
    
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(signUp.Username, signUp.phoneNumber, signUp.confirmPassword, signUp.createPassword);
  }
  return (
    <div id={Style.SignUpDiv}>
      <div id={Style.SignUp_mainDiv}>
        <div id={Style.SignUp_text}>Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div>
          <div id={Style.usernameDiv}>
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
                type={"text"}
                name={"createPassword"}
                value={signUp.createPassword}
                OnChange={Details}
              /> 

              <InputField
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
                type={"text"}
                name={"confirmPassword"}
                value={signUp.confirmPassword}
                OnChange={Details}
              />
            </div>
          </div>
          <div id={Style.SignUp_btnDiv}>
           <Link to={"/verify"}>
           <Button
              type={"submit"}
              text={"Sign Up"}
              onChange={handleSubmit}/>
           </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp