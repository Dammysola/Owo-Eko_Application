import React, { useState } from 'react'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import Style from '../login/Login.module.css'
import { userContextHook } from '../../UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const navigate = useNavigate()

    const {updateDetails, updateSetLogged} = userContextHook()


    const [logIn, setLogIn] = useState({
        phoneNumber: '',
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

    const LoginSubmit = async()=>{
        try {
            const response = await axios.post("https://owo-eko-api.onrender.com/user/login", logIn)

            console.log();
            // if (response.status == 200) {
            //     const getUserResponse = await axios.get(``)


            //     if (getUserResponse == 200) {
            //         let userData = getUserRes.data
            //         console.log('Gotten successful:', userData);
    
            //         updateDetails((prev) => ({
            //             ...prev,
            //             fullName: userData.fullName,
            //             email: userData.email
            //         }))
                    
            //         updateSetLogged(true)
            //         navigate('/home');
            //     }
            // }

        } catch (error) {
            let userError = error.responce.data.message
            setSignInError(userError)
            console.log("Login failed:", userError);
            
        }
    }

    const handleLoginSubmit = (e) => {
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
                            placeholder={"Enter Phone Number"}
                            type={"tel"}
                            name={"phoneNumber"}
                            value={logIn.phoneNumber}
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
                                text={"Sign Up"}
                                onChange={handleLoginSubmit} />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login