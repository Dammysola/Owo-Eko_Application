import React from 'react'
import Style from '../confirmation/Confirmation.module.css'
import Button from '../../components/button/Button'


const Confirmation = () => {
    return (
        <div id={Style.Confirmation_mainDiv}>
            <div id={Style.Confirmation_Wrapper}>
                <b id={Style.Confirmation_text}>Confirmation</b>
                <table>
                    <thead>
                        <td>Withdraw</td>
                        <td ><span>All Coins</span></td>
                    </thead>
                    <tr>
                        <td>To</td>
                        <td className={Style.fadded}>John Doe</td>
                    </tr>
                    <tr>
                        <td>Bank</td>
                        <td className={Style.fadded}>KudaBank</td>
                    </tr>
                    <tr>

                        <td>Account</td>
                        <td className={Style.fadded}>123456789</td>
                    </tr>
                </table>
                <div>
                    <button id={Style.button}>Cancel</button>
                    <Button
                        type={"submit"}
                        text={"Withdraw"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Confirmation