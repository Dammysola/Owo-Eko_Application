import React, { useState } from 'react'
import Style from '../waitlist/Waitlist.module.css'
import Button from '../../components/button/Button'
import InputField from '../../components/input_Form/InputField'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Waitlist = () => {

    const navigate = useNavigate()

    const [waitlistError, setWaitlistError] = useState()

    const [waitlist, setWaitlist] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
    })

    const waitlistDetails = (e) => {
        const name = e.target.name
        const value = e.target.value

        setWaitlist(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const waitlistSubmit = async () => {
        try {
            const response = await axios.post(api,
                {
                    "firstName": waitlist.firstName,
                    "lastName": waitlist.lastName,
                    "email": waitlist.email,
                    "phone": waitlist.phoneNumber,
                    "password": waitlist.password
                }
            )

            if (response.data == 200) {
                console.log('Signup successful:', response.data);
                navigate('/landingpage');

                // let sendData = JSON.stringify(waitlist);
                // navigate(`/verify/${sendData}`)
            } else {

                console.log('signup failed', response.data);
            }

        }
        catch (error) {
            let userError = error.response.data.message
            setWaitlistError(userError)
            console.log("Waitlist Failed: ", waitlistError)
        }
    }

    const handleWaitlistSubmit = (e) => {
        waitlistSubmit()
        e.preventDefault(e)
    }

    return (
        <div id={Style.waitlist_mainDiv}>
            <div id={Style.waitlist_Div}>
                <p>Waitlist</p>
                <form onSubmit={handleWaitlistSubmit}>
                    <div>
                        <div className={Style.inputDiv}>
                            <InputField
                                label={"First Name"}
                                placeholder={"Enter First Name"}
                                type={"text"}
                                name={"firstName"}
                                value={waitlist.firstName}
                                OnChange={waitlistDetails}
                            />

                            <InputField
                                label={"Last Name"}
                                placeholder={"Enter Last Name"}
                                type={"text"}
                                name={"lastName"}
                                value={waitlist.lastName}
                                OnChange={waitlistDetails}
                            />
                        </div>

                        <InputField
                            label={"Email Address"}
                            placeholder={"Enter Email Address"}
                            type={"email"}
                            name={"email"}
                            value={waitlist.email}
                            OnChange={waitlistDetails}
                        />

                        <div id={Style.phoneDiv}>
                            <InputField
                                label={"Phone Number"}
                                placeholder={"Enter Phone Number"}
                                type={"tel"}
                                name={"phoneNumber"}
                                value={waitlist.phoneNumber}
                                OnChange={waitlistDetails}
                            />

                        </div>
                        <div className={Style.inputDiv}>
                            <InputField
                                label={"Create Password"}
                                placeholder={"Create Password"}
                                type={"text"}
                                name={"password"}
                                value={waitlist.creatPassword}
                                OnChange={waitlistDetails}
                            />

                            {/* <InputField
                                label={"Confirm Password"}
                                placeholder={"Confirm Password"}
                                type={"text"}
                                name={"confirmPassword"}
                                value={waitlist.confirmPassword}
                                OnChange={waitlistDetails}
                            /> */}
                        </div>

                        <div id={Style.btnDiv}>
                            <Button
                                text='Join Waitlist'
                                type='submit'
                                onSubmit={handleWaitlistSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Waitlist