import React, { useState } from 'react'
import Style from '../resetPassword/ResetPassword.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const ResetPassword = () => {
    // const [confirmPassword, setConfirmPasword] = useState('')
    const navigate = useNavigate()

    const [resetPassword, setResetPassword] =useState({
        email: '',
        createPassword: '',
        confirmPassword: ''
    })

    const newDetails = (e)=>{
        const value = e.target.value
        const name = e.target.name

        setResetPassword((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    const resetpasswordSubmit = async ()=>{
        try {
            const response = await axios.post('https://owo-eko-api.onrender.com/user/changepassword', 
                {
                    "email":resetPassword.email ,
                    "createPasswprd": resetPassword.createPassword,
                    "confrimPassword": resetPassword.confirmPassword
                }
             )
             console.log(response.data);

             if (response.status == 200) {
                console.log("success", response.data);
             }
        } catch (error) {
            let userError = error.response.data.message
            navigate('/mainpage')
            console.log("failed", userError);
        }
    } 

    const handleSubmit =(e)=>{
        resetpasswordSubmit()
        e.preventDefault(e)
        console.log(resetPassword.email, resetPassword.confirmPassword, resetPassword.createPassword);
    }
  return (
    <div id={Style.ResetPassword_MainDiv}>
        <div id={Style.ResetPassword_FormWrapper}>
                <p>Reset Password</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div id={Style.inputDiv}>
                            <InputField
                                label={"Email Address"}
                                placeholder={"Enter Email Address"}
                                type={"email"}
                                name={"email"}
                                value={resetPassword.email}
                                OnChange={newDetails}
                            />
                        </div>
                        <InputField
                            label={" Create Password"}
                            placeholder={"New Password"}
                            type={"text"}
                            name={"createPassword"}
                            value={resetPassword.createPassword}
                            OnChange={newDetails}
                        />
                         <InputField
                            label={"Confirm Password"}
                            placeholder={"Confirm Password"}
                            type={"text"}
                            name={"confirmPassword"}
                            value={resetPassword.confirmPassword}
                            OnChange={newDetails}
                        />
                        <div id={Style.btnDiv}>
                            <Button
                                type={"submit"}
                                text={"log In"}
                                onChange={handleSubmit}
                            />
                        </div>

                    </div>
                </form>
            </div>
    </div>
  )
}

export default ResetPassword