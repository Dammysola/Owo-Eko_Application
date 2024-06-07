import React, { useState } from 'react'
import Style from '../resetPassword/ResetPassword.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { popupContextHook } from '../../../PopupContext'



const ResetPassword = () => {
    // const [confirmPassword, setConfirmPasword] = useState('')
    const navigate = useNavigate()

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()
    const [resetPassword, setResetPassword] =useState({
        email: '',
        createPassword: '',
        confirmPassword: ''
    })

    const [validation, setValidation] = useState({
		email: false,
		createPassword: false,
		confirmPassword: false
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
            updateLoadingPopup(true)
            const response = await axios.post('https://owoeko.com/owo-eko-api/user/changepassword', 
                {
                    "email":resetPassword.email,
                    "createpass": resetPassword.createPassword,
                    "confirmpass": resetPassword.confirmPassword
                }
             )
             console.log(response.data);
             updateLoadingPopup(false)

             if (response.status == 200) {
                console.log("success", response.data);
                navigate('/login')
             }
        } catch (error) {
            updateLoadingPopup(false);
            let userError = error.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        
            console.log("failed", userError);
        }
    } 

    const handleSubmit =(e)=>{
       
        e.preventDefault(e)

        let emailVal = resetPassword.email.includes("@") && resetPassword.email.includes(".") ? false : true;
		let confirmpassVal = resetPassword.confirmPassword.length > 4 ? false : true;
        let createpassVal = resetPassword.createPassword.length > 4 ? false : true;

        setValidation({
           email: emailVal,
           confirmPassword: confirmpassVal,
           createPassword: createpassVal
        })

        let valid = emailVal == false && confirmpassVal == false && createpassVal == false
        if (valid) {
            resetpasswordSubmit()
        }
        
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
                                error={validation.email}
                                value={resetPassword.email}
                                OnChange={newDetails}
                            />
                        </div>
                        <InputField
                            label={" Create Password"}
                            placeholder={"New Password"}
                            type={"text"}
                            name={"createPassword"}
                            error={validation.createPassword}
                            value={resetPassword.createPassword}
                            OnChange={newDetails}
                        />
                         <InputField
                            label={"Confirm Password"}
                            placeholder={"Confirm Password"}
                            type={"text"}
                            name={"confirmPassword"}
                            error={validation.confirmPassword}
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