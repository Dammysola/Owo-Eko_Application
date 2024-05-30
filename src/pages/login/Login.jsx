import React, { useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import Style from '../login/Login.module.css'
import { userContextHook } from '../../UserContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'
import SignUp from '../signUp/SignUp'


const Login = () => {

    const navigate = useNavigate()

    const { updateDetails, updateSetLogged } = userContextHook()

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()


    const [logIn, setLogIn] = useState({
        email: '',
        password: ''
    })

    const loginDetails = (e) => {
        const name = e.target.name
        const value = e.target.value

        setLogIn(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const LoginSubmit = async () => {
        
        try {

            updateLoadingPopup(true);
            const response = await axios.post("https://owo-eko-api.onrender.com/user/login", {
                "email": logIn.email,
                "password": logIn.password
              })


            console.log(response.status)

            if (response.status == 200) {
                const response2 = await axios.get(`https://owo-eko-api.onrender.com/user/details/${phoneNumber}`)


                console.log("getUserDeatils", response2.status)

                updateLoadingPopup(false);
                if (response2.status == 200) {

                    console.log('login successful', response2.data);

                    sessionStorage.setItem("phone_number", phoneNumber)
                    navigate(`/mainpage`)
                } else {
                    updateErrorText(response2.data)

                    updateErrorPopup(true)
                    setTimeout(() => {
                        updateErrorPopup(false)
                    }, 2000)

                    console.log('login failed', response2.data);
                }
            } else {

                updateLoadingPopup(false);
                updateErrorText(response.data)

                updateErrorPopup(true)
                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)

                console.log('login failed', response.data);
            }

        } catch (err) {
            updateLoadingPopup(false);
            let userError = err.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            console.log("SignUp Failed: ", userError)
        }
    }

    const handleLoginSubmit = (e) => {
        LoginSubmit()
        e.preventDefault(e)
    }

    return (
        <div id={Style.Login_MainDiv}>
            <div id={Style.Login_Div}>
                <p>Log In</p>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <div id={Style.inputDiv}>
                            <InputField
                                label={"Phone Number"}
                                placeholder={"Enter Email Address"}
                                type={"email"}
                                name={"email"}
                                value={logIn.email}
                                OnChange={loginDetails}
                            />
                        </div>
                        <InputField
                            label={"Password"}
                            placeholder={"Enter Password"}
                            type={"text"}
                            name={"password"}
                            value={logIn.password}
                            OnChange={loginDetails}
                        />
                        <div id={Style.btnDiv}>
                            <Button
                                type={"submit"}
                                text={"log In"}
                                onChange={handleLoginSubmit}
                            />
                        </div>

                    </div>
                </form>
            </div>
            <p id={Style.Login_signUp}>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
    )
}

export default Login