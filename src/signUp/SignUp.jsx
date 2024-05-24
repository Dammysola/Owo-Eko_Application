import React from 'react'
import Style from '../signUp/SignUp.module.css'
import InputField from '../input_Form/InputField'
import NavBar from '../navBar/Navbar'

const SignUp = () => {
  return (
    <div id={Style.SignUpDiv}>
      <NavBar/>
      <div id={Style.SignUp_mainDiv}>
        <p id={Style.SignUp_text}>Sign Up</p>
        <form>
          <div>
            <InputField
              label='Phone Number'
              placeholder='Enter Phone Number'
              type='text'
              name='phoneNumber'
            // value={}
            // OnChange={}
            />

            <div id={Style.SignUp_passwordInput_Div}>
              <InputField
                label='Create Password'
                placeholder='Create Password'
                type='text'
                name='createPassword'
              // value={}
              // OnChange={}
              />

              <InputField
                label='Confirm Password'
                placeholder='Confirm Password'
                type='text'
                name='confirmPassword'
              // value={}
              // OnChange={}
              />
            </div>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp