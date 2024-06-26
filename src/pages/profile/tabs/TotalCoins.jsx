import React, { useEffect, useState } from 'react'
import style from "./TotalCoins.module.css"

import dummyCoin from "../../../assets/svg/dummyCoin.svg"

const TotalCoins = () => {
    
    let [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        let details = JSON.parse(localStorage.getItem("user_details"));

        setUserDetails(details)

    }, []);

    return (
        <div id={style.wrapper}>
            <p id={style.text}>Total Number of coins earned</p>
            <div id={style.main_content}>

                <img src={dummyCoin} alt="" />

                <p id={style.total}>{userDetails.balance}</p>
            </div>

        </div>
    )
}

export default TotalCoins