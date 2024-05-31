import React, { useState } from 'react'
import Style from '../forgotPassword/Forgot_Password.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Forgot_Password = () => {
    //  const [email, setEmail] = useState('')
    //  const [message, setMessage] = useState()
    //  const [passwordError, setPasswordError] = useState()

    const navigate = useNavigate()


    const [forgotPassword, setForgotPassword] = useState('')


    const passwordSubmit = async()=>{
        
        try {
           const response = await axios.post ('https://owo-eko-api.onrender.com/user/forget-pass', {"email":forgotPassword})

           console.log(response.data);
           console.log("login status", response.status);

           if (response.status == 200) {
                console.log('login successful', response.data);

                navigate('/sendOTP')

           }
        } catch (error) {
            let userError = error.response.data.message
            
            console.log("failed", userError);
        }
    }

    const details = (e)=>{
        const value = e.target.value

        setForgotPassword (
            value
        )
    }

    const handleSubmit = (e)=>{
        passwordSubmit()
        e.preventDefault(e)
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