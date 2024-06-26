import axios from 'axios';
import { popupContextHook } from '../PopupContext'
import { userContextHook } from '../UserContext'

export function useUser() {
    const { userDetails, updateDetails, accountDetails, updateAccountDetails , transactionDetails, updateTransactions} = userContextHook()
    const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateBankReg } = popupContextHook()

    const getUserDetails = async (email) => {

        let storedDetails = JSON.parse(localStorage.getItem("user_details"));
        let storedAccountDetails = JSON.parse(localStorage.getItem("account_details"));
        let storedTransactionDetails = JSON.parse(localStorage.getItem("transactions"));

        let token = localStorage.getItem("token");

        const response = await axios.get(`https://owo-eko-api.onrender.com/user/details/${email}`, { headers: { Authorization: `Bearer ${token}` } })

        console.log("CC");

        updateLoadingPopup(false)

        console.log("Details Initiated", response)

        if (response.status == 200) {

            let details = response.data["details"]
            let account = response.data["account"]
            let transactions = response.data["transaction"]

            console.log("Datails", details)
            console.log("Account", account)
            console.log("Transactions", transactions)

            updateDetails((prev) => ({
                ...storedDetails,
                balance: details["balance"],
                email: details["email"],
                id: details["id"],
                phone: details["phone"],
                status: details["status"],
                time: details["time"],
                username: details["username"]
            }))

            updateAccountDetails((prev) => ({
                ...storedAccountDetails,
                acc_name: account != null ? account["acc_name"] : "",
                acc_num: account != null ? account["acc_num"] : "",
                bank_code: account != null ? account["bank_code"] : "",
                bank_name: account != null ? account["bank_name"] : "",
            }))

        

            updateTransactions((prev) => ([...transactions]))

            console.log("Details Success ", response.data)

            localStorage.setItem("user_details", JSON.stringify({
                ...userDetails,
                balance: details["balance"],
                email: details["email"],
                id: details["id"],
                phone: details["phone"],
                status: details["status"],
                time: details["time"],
                username: details["username"]
            }))

            localStorage.setItem("account_details", JSON.stringify({
                ...accountDetails,
                acc_name: account != null ? account["acc_name"] : "",
                acc_num: account != null ? account["acc_num"] : "",
                bank_code: account != null ? account["bank_code"] : "",
                bank_name: account != null ? account["bank_name"] : "",
            }))

            

            console.log("message")


            if ( account != null && account["acc_name"] != "") {
                updateBankReg(false)
            } else {
                updateBankReg(true)
            }

        } else {
            updateErrorText(response.data)

            console.log("Details Error ", response.data)
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }

        return response.status;

    }

    return { getUserDetails }
};


