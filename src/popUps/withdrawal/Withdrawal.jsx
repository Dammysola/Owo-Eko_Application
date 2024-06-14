import React, { useEffect, useState } from 'react'
import Style from '../withdrawal/Withdrawal.module.css'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'
import { popupContextHook } from '../../PopupContext'

const Withdrawal = () => {

  const [accDetails, setAccDetails] = useState({})
  const [UserDetails, setUserDetails] = useState({
    phoneNumber: '',
    bank: '',
    accNumber: ''
  })
  const { updateWithdrawalPopup, updateConfirmationPopup} = popupContextHook();

  useEffect(() => {
    getAccDetails()
  }, [])

  const getAccDetails = () => {
    let account = JSON.parse(localStorage.getItem("account_details"));
    setAccDetails(account)
  }

  

  const Details = (e) => {
    const value = e.target.value
    const name = e.target.name

    setUserDetails(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }
  // const confirm =()=>{

  //   updateConfirmationPopup(true)
  // }
  const handleSubmit = (e) => {
    updateWithdrawalPopup(false)
    updateConfirmationPopup(true) 
    e.preventDefault(e)
  }
  return (
    <div id={Style.wrapper}>
      <buttton id={Style.Profile_mainDiv} onClick={() => updateWithdrawalPopup(false)}>

      </buttton>
      <div id={Style.Withdrawal_mainDiv}>
        <div id={Style.Withdrawal_formWrapper}>
          <p id={Style.header}>Withdrawal</p>
          <form onSubmit={handleSubmit}>
  
          
            <InputField
              label={"Bank Name"}
              type={"text"}
              name={"confirmPassword"}
              disabled = {true}
              value={accDetails.bank_name}
              OnChange={Details}
            />
            <InputField
              label={"Account Number"}
              type={"text"}
              name={"confirmPassword"}
              disabled = {true}
              value={accDetails.acc_num}
              OnChange={Details}
            />
            <div id={Style.button}>
              <Button  type={"submit"} text={"Next"} onSubmit={confirm} />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Withdrawal