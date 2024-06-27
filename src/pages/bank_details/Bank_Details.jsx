import React, { useEffect, useState } from 'react'
import Style from '../bank_details/Bank_Details.module.css'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import { useBank } from '../../api_services/Bank'
import { popupContextHook } from '../../PopupContext'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../api_services/User'



const Bank_Details = () => {

    const navigate = useNavigate();

    const [bankDetails, setBankDetails] = useState({
        bank: '',
        accNumber: ''
    })

    const [AllBanks, setAllBanks] = useState([]);
    const [accountName, setAccountName] = useState();
    const [validated, setValidated] = useState(false);

    const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateBankReg } = popupContextHook()

    const { getUserDetails } = useUser();
    const { getAllBank, getValidateBank, addBankDetails } = useBank();
    

    const accountChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setBankDetails(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )

        console.log(bankDetails)

        setAccountName("");

        setValidated(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(bankDetails.bank, bankDetails.accNumber);

        if (validated) {
            AddBankDetails()
        } else {
            ValidateBank()
        }
    }

    const AllBankDetails = async () => {

        updateLoadingPopup(true);
        try {

            let banks = await getAllBank();

            let newBanks = []

            for (let x = 0; x < banks.length; x++) {
                newBanks.push(
                    {
                        "bankName": banks[x]["name"],
                        "bankCode": banks[x]["code"],
                    }
                )
            }

            setAllBanks(newBanks);

        } catch (error) {

            updateLoadingPopup(false);
            let userError = err.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }
    }


    const ValidateBank = async () => {

        updateLoadingPopup(true);
        try {

            let holder = await getValidateBank(bankDetails.accNumber, AllBanks[bankDetails.bank]["bankCode"]);

            console.log("Holder Details", holder);

            if (holder["account_name"] != "") {
                setValidated(true)
                setAccountName(holder["account_name"]);
            }


        } catch (err) {

            updateLoadingPopup(false);
            let userError = err.response.data.message

            updateErrorText(userError)

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }
    }


    const AddBankDetails = async () => {


        let details = JSON.parse(localStorage.getItem("user_details"));

        let loggedin_id = localStorage.getItem("loggedin_id");


        console.log(details["email"], accountName, ",", bankDetails.accNumber, ",", AllBanks[bankDetails.bank]["bankCode"], ",", loggedin_id 
        );

        updateLoadingPopup(true);
        try {

            let response = await addBankDetails(details["email"], accountName, bankDetails.accNumber, AllBanks[bankDetails.bank]["bankCode"]);

            if (response == 200) {

                 await getUserDetails(details.email);
                
                navigate("/mainpage")
            }

        } catch (err) {

            updateLoadingPopup(false);

            let userError = err.response

            console.log(err)
            console.log("Add Details", userError)

            updateErrorText("Could not add Account")

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }
    }

    const optionSelect = (e, index) => {
        e.preventDefault(e)

        console.log("index", index)
    }

    useEffect(() => {
        AllBankDetails()
    }, []);

    return (
        <div id={Style.Bank_Details_MainDiv}>
            <div id={Style.Bank_Details_Div}>
                <p>Bank Details</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div id={Style.inputDiv}>
                            <label>Select Bank</label>
                            <select name="bank" id="" onChange={accountChange}>

                                <option value=''>---= Select you Desired Bank -----</option>
                                {
                                    AllBanks.map((value, index, array) => {
                                        return (<option key={index} onClick={() => console.log(index)} value={index}>{value.bankName}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <InputField
                            label={"Account Number"}
                            placeholder={"Enter Account Number"}
                            type={"text"}
                            name={"accNumber"}
                            value={bankDetails.accNumber}
                            maxlength={10}
                            OnChange={accountChange}
                        />
                        {accountName}

                        <div id={Style.btnDiv}>
                            <Button
                                type={"submit"}
                                text={validated ? "Next" : "Validate"}
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Bank_Details