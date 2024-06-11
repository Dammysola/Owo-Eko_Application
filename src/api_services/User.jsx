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

            const response = await axios.get(`https://owo-eko-api.onrender.com/user/details/${email}`)


            updateLoadingPopup(false)
            

            if (response.status == 200) {

                let details = response.data["details"]


                updateDetails((prev) => ({
                    ...storedDetails,
                    balance: details["balance"],
                    email: details["email"],
                    id: details["id"],
                    phone: details["phone"],
                    status: details["status"],
                    username: details["username"]
                }))


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

            }

            return (response.status);

        }
    }

    return { getUserDetails }
};


