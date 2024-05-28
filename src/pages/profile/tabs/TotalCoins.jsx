import React from 'react'
import style from "./TotalCoins.module.css"

import dummyCoin from "../../../assets/svg/dummyCoin.svg"

const TotalCoins = () => {
    return (
        <div id={style.wrapper}>
            <p id={style.text}>Total Number of coins earned</p>
            <div id={style.main_content}>

                <img src={dummyCoin} alt="" />

                <p id={style.total}>12000</p>
            </div>

        </div>
    )
}

export default TotalCoins