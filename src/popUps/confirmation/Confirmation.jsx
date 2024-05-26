import React from 'react'
import Style from '../confirmation/Confirmation.module.css'
import Button from '../components/button/Button'


const Confirmation = () => {
  return (
    <div id={Style.Confirmation_mainDiv}>
        <div id={Style.Confirmation_Wrapper}>
            <b id={Style.Confirmation_text}>Confirmation</b>
            <table>
                <thead>
                    <td>Withdraw</td>
                    <td><span>All Coins</span></td>
                </thead>
                <tr>
                    <td>To</td>
                    <td>John Doe</td>
                </tr>
                <tr>
                    <td>Bank</td>
                    <td>KudaBank</td>
                </tr>
                <td>Account</td>
                <td>123456789</td>
            </table>
            <div>
                <button id={Style.button}>Cancel</button>
            <Button
              type={"submit"}
              text={"withdraw"}/>
            </div>
        </div>
    </div>
  )
}

export default Confirmation