import React, { useState } from 'react'
import Style from '../resetPassword/ResetPassword.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'



const ResetPassword = () => {
    const [resetPassword, setResetPassword] =useState({
        email: '',
        password: ''
    })

    const newDetails = (e)=>{
        const value = e.target.value
        const name = e.target.name

        setResetPassword((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit =(e)=>{
        e.preventDefault(e)
        console.log(resetPassword.email, resetPassword.password);
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
                            label={"Password"}
                            placeholder={"Enter Password"}
                            type={"text"}
                            name={"password"}
                            value={resetPassword.password}
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