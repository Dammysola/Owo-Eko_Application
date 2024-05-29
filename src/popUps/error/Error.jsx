import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"
import { popupContextHook } from '../../PopupContext'

const Error = () => {

  const {errorText} = popupContextHook();
  return (
    <div id={style.mainDiv}>
      <div id={style.wrapper}>
        <img src={errorImg} />
        <div>{errorText}</div>
      </div>
    </div>
  )
}

export default Error