import axios from 'axios';
import { popupContextHook } from '../PopupContext'

export function useBank() {
    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = popupContextHook()

    const token = "sk_live_93fc45b35a89cc6f7e860ba5ba19289210ad8188"

    const getAllBank = async () => {

        const headers = { 'Authorization': `Bearer ${token}` };
        const response = await axios.get(`https://api.paystack.co/bank`, { headers })

        updateLoadingPopup(false)

        if (response.status == 200) {

            let bankDetails = response.data["data"]

            return bankDetails;

        } else {
            updateErrorText("Check Internct Connection")

            console.log("Details Error ", response.data)
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            return [];

        }

    }

    const getValidateBank = async (bankNumber, bankCode) => {

        const headers = { 'Authorization': `Bearer ${token}` };

        const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${bankNumber}&bank_code=${bankCode}`, { headers })

        updateLoadingPopup(false)

        if (response.status == 200) {

            let bankHolderDetails = response.data["data"]

            return bankHolderDetails;

        } else {
            updateErrorText("Check Internct Connection")

            console.log("Holder Error ", response.data)
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

            return "";

        }

    }


    const addBankDetails = async (email, accountName, bankNumber, bankCode) => {

        
        let loggedin_id = localStorage.getItem("loggedin_id");

        // const headers = { 'Authorization': `Bearer ${userToken}` };
        console.log({
            "email": email,
            "name": accountName,
            "account_number": bankNumber,
            "bank_code": bankCode,
            "loggedin_id": loggedin_id,
        })

        const response = await axios.post(`https://owo-eko-api.onrender.com/user/add-account`, {
            "email": email,
            "name": accountName,
            "account_number": bankNumber,
            "bank_code": bankCode,
            "loggedin_id": loggedin_id,
        });


        updateLoadingPopup(false)

        if (response.status == 200) {

            console.log("Ading details", response.data)

        } else {
            updateErrorText("Could not Add Details")

            console.log("Adding Error ", response.data)
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

        return response.status;

    }

    return { getAllBank, getValidateBank, addBankDetails }
};


