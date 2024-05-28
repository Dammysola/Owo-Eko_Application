import React from 'react'
import style from "./WithdrawalHistory.module.css"
import dummyCoin from "../../../assets/svg/dummyCoin.svg"

const WithdrawalHistory = () => {
    return (
        <div id={style.wrapper}>
            <p id={style.text}>Keep track of your withdrawals</p>
            <div id={style.main_content}>
                <div id={style.table_header}>
                    <div className={style.header}>Date</div>
                    <div className={style.header}>Amount</div>
                </div>
                <div id={style.table_content}>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                    <div id={style.table_context}>
                        <div className={style.table_text}>July 7, 2023</div>
                        <div className={style.table_text}><img src={dummyCoin} alt="" /> 300</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WithdrawalHistory