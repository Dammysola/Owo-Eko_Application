import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"

const Error = ({text}) => {
  return (
    <div id={style.mainDiv}>
      <div id={style.wrapper}>
        <img src={errorImg} />
        <div>{text}</div>
        <iframe src="http://www.google.com" frameborder="0" target="_parent"></iframe>
      </div>
    </div>
  )
}

export default Error