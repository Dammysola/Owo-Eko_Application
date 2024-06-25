import React, { useEffect, useRef, useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import Style from '../login/Login.module.css'
import { userContextHook } from '../../UserContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { popupContextHook } from '../../PopupContext'
import SignUp from '../signUp/SignUp'
import { useUser } from '../../api_services/User'
import eye from '../../assets/svg/eye.svg'
import eye_slash from '../../assets/svg/eye-slash.svg'


const Login = () => {

    const navigate = useNavigate()

    const { getUserDetails } = useUser();

    const [ip, setIP] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleEyeImg = () => {
        setToggleImg(!toggleImg);
    };

    const [logIn, setLogIn] = useState({
        email: '',
        password: ''
    })

    const [validation, setValidation] = useState({
        email: false,
        password: false,
    })

    const getIp = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

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
                "password": logIn.password,
                "ipaddress": ip
            })

            console.log("Login Details", response.data["loggedin_id"]);

            // updateLoadingPopup(false);
            //     if (response.status == 200) {

                    // localStorage.setItem("loggedin_id", response.data["loggedin_id"])
            //         navigate(`/mainpage`)
            if (response.status == 200) {
                localStorage.setItem("loggedin_id", response.data["loggedin_id"])
                localStorage.setItem("user_details", JSON.stringify({
            
                    balance: "",
                    email: "",
                    id: "",
                    phone: "",
                    status: "",
                    username: ""
                }))
                
                localStorage.setItem("account_details", JSON.stringify({
                    acc_name: "",
                    acc_num: "",
                    bank_code: "",
                    bank_name: ""
                }))
                const response2 = await getUserDetails(logIn.email);

                console.log(response2);

                if (response2 == 200) {

                    navigate(`/mainpage`);
                } else {
                    updateLoadingPopup(false);
                    updateErrorText("Could not Login")
                    console.log("Response Status Error")
                    updateErrorPopup(true)
                    setTimeout(() => {
                        updateErrorPopup(false)
                    }, 2000)
                }

            } else {

                updateLoadingPopup(false);
                updateErrorText(response.data)
                console.log("Login failed", response.data)
                updateErrorPopup(true)
                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)
            }

        } catch (err) {
            updateLoadingPopup(false);
            let userError = err.response.data.message

            updateErrorText(userError)


            console.log("Login failed", err)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
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
    }

    useEffect(() => {
        getIp();
    }, []);

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
                        <div id={Style.PasswordDiv}>
                            <InputField
                                label={"Password"}
                                placeholder={"Enter Password"}
                                type={passwordVisible ? 'text' : 'password'}
                                name={"password"}
                                value={logIn.password}
                                error={validation.password}
                                OnChange={loginDetails}
                            />
                            <div id={Style.eye_ImgDiv}>
                            
                                {
                                    passwordVisible ?(<img onClick={togglePasswordVisibility}  src={eye} alt="" />): (<img onClick={togglePasswordVisibility} src={eye_slash} alt="" />)
                                }
                                
                            </div>
                        </div>
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