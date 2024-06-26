import React from 'react'
import Style from '../receipt/Receipt.module.css'
import { popupContextHook } from '../../PopupContext';
import { userContextHook } from '../../UserContext';


const Receipt = () => {

    const { receiptPopup, updateReceipt } = popupContextHook();
    const { receiptDetails } = userContextHook()


    return (
        <div id={Style.wrapper}>
            <buttton id={Style.Profile_mainDiv} onClick={() => updateReceipt(!receiptPopup)}>

            </buttton>
            <div id={Style.Receipt_wrapperDiv}>

                <div id={Style.PaymentTextDiv}>
                    <p id={Style.PaymentText}>Payment Success!</p>
                    <p id={Style.PaymentTextSuccessful}>Your Payment has been successfully done</p>
                </div>

                <div id={Style.TotalAmountDiv}>
                    <p id={Style.TotalAmountText}>Total Payment</p>
                    <p id={Style.TotalAmount}>{receiptDetails.amount}</p>
                </div>

                <div id={Style.Details}>
                    <div className={Style.row}>
                        <div className={Style.contentDiv}>
                            <p className={Style.contentTitle}>Ref Number</p>
                            <p className={Style.contentContext}>{receiptDetails.refid}</p>
                        </div>
                        <div className={Style.contentDiv}>
                            <p className={Style.contentTitle}>Payment Time</p>
                            <p className={Style.contentContext}>{receiptDetails.date}</p>
                        </div>
                    </div>

                    <div className={Style.row}>
                        <div className={Style.contentDiv}>
                            <p className={Style.contentTitle}>Payment Method</p>
                            <p className={Style.contentContext}>Bank Transfer</p>
                        </div>
                        <div className={Style.contentDiv}>
                            <p className={Style.contentTitle}>Sender Name</p>
                            <p className={Style.contentContext}>{receiptDetails.sender}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Receipt