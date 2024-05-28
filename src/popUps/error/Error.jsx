import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"

const Error = () => {
  return (
    <div id={style.mainDiv}>
      <div id={style.wrapper}>
        <img src={errorImg} />
        <div>It looks like some details were entered incorrectly. Please check the information and try again</div>
      </div>
    </div>
  )
}

export default Error