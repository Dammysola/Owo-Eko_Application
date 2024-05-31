import React, { useState } from 'react'
import Style from '../forgotPassword/Forgot_Password.module.css'
import InputField from '../../../components/input_Form/InputField'
import Button from '../../../components/button/Button'



const Forgot_Password = () => {
    const [forgotPassword, setForgotPassword] = useState('')

    const details = (e)=>{
        const value = e.target.value

        setForgotPassword (
            value
        )
    }

    const handleSubmit = (e)=>{
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