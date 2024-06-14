import React, { useEffect, useState } from 'react'
import Style from '../confirmation/Confirmation.module.css'
import Button from '../../components/button/Button'
import { popupContextHook } from '../../PopupContext'
import axios from 'axios'


const Confirmation = () => {

    const [confirmationDetails, setConfirmationDetails] = useState({})

    const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateWithdrawalSuccessPopup } = popupContextHook()

    let loggedin_id = localStorage.getItem("loggedin_id");
    let details = JSON.parse(localStorage.getItem("user_details"));

    useEffect(() => {
        confirmDetails()
    }, [])
    const confirmDetails = () => {
        let account = JSON.parse(localStorage.getItem("account_details"));
        setConfirmationDetails(account)
    }

    const cancel = ()=>{
        updateConfirmationPopup(false)
    }
    const PaymentConfirmation = async () => {

        updateLoadingPopup(true)
        try {

            console.log("Email", details.email);
            const response = await axios.post('https://owo-eko-api.onrender.com/user/transfer', {
                 "email": details.email,
                 "loggedin_id": loggedin_id})

            updateLoadingPopup(false)
            console.log(response);
            if (response.status == 200) {

                updateConfirmationPopup(false)
                updateWithdrawalSuccessPopup(true)

            }
            else {
                updateErrorText(response.data)
                updateErrorPopup(true)

                setTimeout(() => {
                    updateErrorPopup(false)
                }, 2000)
            }
        } catch (error) {
            updateLoadingPopup(false);
            let userError = error

            console.log("Error", userError);

            updateErrorText("Could not complete transaction")

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)

        }
    }


    return (
        <div id={Style.Confirmation_mainDiv}>
            <div id={Style.Confirmation_Wrapper}>
                <b id={Style.Confirmation_text}>Confirmation</b>

                <div id={Style.ConfirmationDetails}>
                    <div id={Style.header}>
                        <div> Withdraw</div>
                        <div><span>All Coins</span></div>
                    </div>
                    <div className={Style.text}>To
                        <div className={Style.accDetails}>{confirmationDetails.acc_name}</div>
                    </div>
                    <div className={Style.text}>Bank  <div className={Style.accDetails}>{confirmationDetails.bank_name}</div></div>
                    <div className={Style.text}>Account <div id={Style.accDetails}>{confirmationDetails.acc_num}</div></div>
                </div>

                <div>
                    <button id={Style.button} onClick={cancel}>Cancel</button>
                    <Button
                        type={"submit"}
                        text={"Withdraw"}
                        onClick={()=>PaymentConfirmation()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Confirmation