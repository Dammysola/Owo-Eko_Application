import React from 'react'
import Style from '../receipt/Receipt.module.css'
import ReceiptImg from '../../assets/svg/Receipt.svg'


const Receipt = () => {
    return (
        <div>
            <div id={Style.Receipt_wrapperDiv}>
                <img src={ReceiptImg} alt="" />
                <div >
                    <p className={Style.Payment}>Payment Success!</p>
                    <div id={Style.Payment_successText}>Your Payment has been successfully done</div>
                </div>

                <div>
                    <p>Total Payment</p>
                    <div className={Style.Payment}>2000</div>
                </div>

                <div id={Style.Payment_details}>
                    <div>
                        <p>Ref Number</p>
                        <div>000085752257</div>
                    </div>
                    <div>
                        <p>Payment Time</p>
                        <div>25 Jun 2024, 13:22</div>
                    </div>
                    <div>
                        <p>Payment Method</p>
                        <div>Bank Transfer</div>
                    </div>
                    <div>
                        <p>Sender Name</p>
                        <div>OWOEKO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receipt