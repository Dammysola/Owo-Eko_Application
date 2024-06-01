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

    const { userDetails, updateDetails, updateSetLogged } = userContextHook()
    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()


    const [logIn, setLogIn] = useState({
        email: '',
        password: ''
    })

    const [validation, setValidation] = useState({
		email: false,
		password: false,
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
        console.log("cc")
        try {

            updateLoadingPopup(true);
            const response = await axios.post("https://owo-eko-api.onrender.com/user/login", {
                "email": logIn.email,
                "password": logIn.password
            })

            console.log(logIn.email)
            console.log("Login Status", response.status)
            console.log("Login Data", response.data)

            // updateLoadingPopup(false);
            //     if (response.status == 200) {

            //         console.log('login successful', response.data);

            //         // sessionStorage.setItem("phone_number", phoneNumber)
            //         navigate(`/mainpage`)
            if (response.status == 200) {
                const response2 = await axios.get(`https://owo-eko-api.onrender.com/user/details/${logIn.email}`)


                console.log("getUserDeatils", response2.status)

                updateLoadingPopup(false);
                if (response2.status == 200) {

                    let details = response2.data["details"]
                    console.log('login successful', details["username"]);

                    updateDetails((prev) => ({
                        ...prev,
                        balance: details["balance"],
                        email: details["email"],
                        id: details["id"],
                        phone: details["phone"],
                        status: details["status"],
                        username: details["username"]
                    }))
                    console.log("userDeteials", userDetails)
                    localStorage.setItem("user_details", JSON.stringify({
                        ...userDetails,
                        balance: details["balance"],
                        email: details["email"],
                        id: details["id"],
                        phone: details["phone"],
                        status: details["status"],
                        username: details["username"]
                    }))


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
        e.preventDefault(e)

        let emailVal = logIn.email.includes("@") && logIn.email.includes(".") ? false : true;
        let passwordVal = logIn.password.length > 4 ? false : true;

        setValidation({
            email: emailVal,
            password: passwordVal,
        })

        let valid = emailVal == false && passwordVal == false

        if (valid) {
            LoginSubmit()
        }
        console.log(logIn.email, logIn.password);
    }

    return (
        <div id={Style.Login_MainDiv}>
            <div id={Style.Login_Div}>
                <p>Log In</p>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <div id={Style.inputDiv}>
                            <InputField
                                label={"Email Address"}
                                placeholder={"Enter Email Address"}
                                type={"email"}
                                name={"email"}
                                value={logIn.email}
                                error={validation.email}
                                OnChange={loginDetails}
                            />
                        </div>
                        <InputField
                            label={"Password"}
                            placeholder={"Enter Password"}
                            type={"text"}
                            name={"password"}
                            value={logIn.password}
                            error={validation.password}
                            OnChange={loginDetails}
                        />
                        <div id={Style.forgot}><Link to={'/forgotpassword'}>Forgot Password ?</Link></div>

                        <div id={Style.btnDiv}>
                            <Button
                                type={"submit"}
                                text={"Log In"}
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