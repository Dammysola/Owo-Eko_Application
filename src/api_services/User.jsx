import axios from 'axios';
import { popupContextHook } from '../PopupContext'
import { userContextHook } from '../UserContext'
import React, { forwardRef, useImperativeHandle } from "react";

export function useUser() {
    const { userDetails, updateDetails } = userContextHook()
    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

    const getUserDetails = async (email) => {

        let storedDetails = JSON.parse(localStorage.getItem("user_details"));

        if (storedDetails != null) {

            console.log("Init")
            const response = await axios.get(`https://owo-eko-api.onrender.com/user/details/${email}`)

            console.log("getUserDeatils", response.status)

            updateLoadingPopup(false)
            
            console.log("Detials", response.data)

            if (response.status == 200) {

                let details = response.data["details"]

                console.log('login successful', details["username"]);

                updateDetails((prev) => ({
                    ...storedDetails,
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

            } else {
                updateErrorText(response.data)

                updateErrorPopup(true)
                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)

                console.log('login failed', response.data);
            }

            return (response.status);

        }
    }

    return { getUserDetails }
};


