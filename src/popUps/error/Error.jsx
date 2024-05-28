import React from 'react'
import style from "./Error.module.css"
import errorImg from "../../assets/svg/error.svg"

const Error = ({text}) => {
  return (
    <div id={style.mainDiv}>
      <div id={style.wrapper}>
        <img src={errorImg} />
        <div>{text}</div>
        <iframe src="https://www.highcpmgate.com/cdaz5uchgt?key=aca08e2352060a0a52e8edd8e8a6f4e9" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default Error