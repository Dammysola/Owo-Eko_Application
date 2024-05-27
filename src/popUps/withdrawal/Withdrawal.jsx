import React, { useState } from 'react'
import Style from '../withdrawal/Withdrawal.module.css'
import InputField from '../../components/input_Form/InputField'
import Button from '../../components/button/Button'

const Withdrawal = () => {
  const [UserDetails, setUserDetails] = useState({
    phoneNumber: '',
    bank: '',
    accNumber: ''
  })

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

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(UserDetails.confirmPassword, UserDetails.createPassword, UserDetails.phoneNumber);
  }
  return (
    <div id={Style.Withdrawal_mainDiv}>
      <div id={Style.Withdrawal_formWrapper}>
        <p id={Style.header}>Withdrawal</p>
        <form onSubmit={handleSubmit}>
          
          <div id={Style.banks}>
            <label>Bank</label>
            <select name="" id={Style.DOB}>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
            </select>
          </div>
            <InputField
              label={"Account Number"}
              placeholder={"Enter Destination Account Number"}
              type={"text"}
              name={"confirmPassword"}
              value={UserDetails.confirmPassword}
              OnChange={Details}
            />
            <div id={Style.button}>
<Button  type={"submit"} text={"Next"} onSubmit={handleSubmit} />
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default Withdrawal