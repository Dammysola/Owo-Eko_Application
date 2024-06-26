import React from 'react'
import Style from '../receipt/Receipt.module.css'


const Receipt = () => {
    return (
        <div>
            <div id={Style.Receipt_wrapperDiv}>
                <div>
                    <p className={Style.Payment}>Payment Success!</p>
                    <div>Your Payment has been successfully done</div>
                </div>

                <div>
                    <p>Total Payment</p>
                    <div>2000</div>
                </div>

                <div>
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