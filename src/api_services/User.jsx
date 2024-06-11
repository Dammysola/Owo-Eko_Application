import axios from 'axios';
import { popupContextHook } from '../PopupContext'
import { userContextHook } from '../UserContext'

export function useUser() {
    const { userDetails, updateDetails } = userContextHook()
    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

    const getUserDetails = async (email) => {

        let storedDetails = JSON.parse(localStorage.getItem("user_details"));

        if (storedDetails != null) {

            const response = await axios.get(`https://owo-eko-api.onrender.com/user/details/${email}`)


            updateLoadingPopup(false)
            
            console.log("Details Initiated", response)

            if (response.status == 200) {

                let details = response.data["details"]

                console.log("Datails", details)


                updateDetails((prev) => ({
                    ...storedDetails,
                    balance: details["balance"],
                    email: details["email"],
                    id: details["id"],
                    phone: details["phone"],
                    status: details["status"],
                    username: details["username"]
                }))

                
                console.log("Details Success ",response.data)

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

                console.log("Details Error ",response.data)
                updateErrorPopup(true)
                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)

            }

            return response.status;

        }
    }

    return { getUserDetails }
};


