import React, { useState } from 'react'
import Style from '../bank_details/Bank_Details.module.css'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'



const Bank_Details = () => {
    const [bankDetails, setBankDetails] = useState({
        bank: '',
        accNumber: ''
    })

    const details = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setBankDetails(
            (prev)=>({
                ...prev,
                [name]: value
            })
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault(e)
        console.log(bankDetails.bank, bankDetails.accNumber);
    }


    return (
        <div id={Style.Bank_Details_MainDiv}>
            <div id={Style.Bank_Details_Div}>
                <p>Bank Details</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div id={Style.inputDiv}>
                            <label>Select Bank</label>
                            <select name="bank" id="">
                                <option value=''>6</option>
                                <option value="">6</option>
                                <option value="">10</option>
                            </select>
                        </div>
                        <InputField
                            label={"Account Number"}
                            placeholder={"Enter Account Number"}
                            type={"text"}
                            name={"accNumber"}
                            value={bankDetails.accNumber}
                            OnChange={details}
                        />

                        <div id={Style.btnDiv}>
                            <Button
                                type={"submit"}
                                text={"Register"}
                                onChange={handleSubmit}
                            />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Bank_Details