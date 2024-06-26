import React from 'react'
import style from "./WithdrawalHistory.module.css"
import dummyCoin from "../../../assets/svg/dummyCoin.svg"
import { userContextHook } from '../../../UserContext'
import { popupContextHook } from '../../../PopupContext'

const WithdrawalHistory = () => {
    const { transactions, updateReceiptDetails } = userContextHook()

    const { receiptPopup, updateReceipt } = popupContextHook();

    const updateTransDetails = (value) => {


        updateReceiptDetails((prev) => ({
            amount: value.amount,
            date: value.date,
            refid: value.refid,
            sender: value.sender,
        }))
        updateReceipt(!receiptPopup)
    }



    return (
        <div id={style.wrapper}>
            <p id={style.text}>Keep track of your withdrawals</p>
            <div id={style.main_content}>
                <div id={style.table_header}>
                    <div className={style.header}>Date</div>
                    <div className={style.header}>Amount</div>
                </div>
                <div id={style.table_content}>
                    {
                        transactions.map((value, index, array) => {
                            return (
                                <button onClick={() => updateTransDetails(value)}>
                                    <div id={style.table_context}>
                                        <div className={style.table_text}>{value.date}</div>
                                        <div className={style.table_text}><img src={dummyCoin} alt="" /> {value.amount}</div>
                                    </div>
                                </button>

                            )
                        })}

                </div>

            </div>

        </div>
    )
}

export default WithdrawalHistory