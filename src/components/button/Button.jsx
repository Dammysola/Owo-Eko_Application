import React from 'react'
import Style from '../button/Button.module.css'

const Button = (props) => {
  const { type, text, onSubmit } = props
  return (
    <button
      className={Style.button}
      type={type}
      onSubmit={onSubmit}>
      {text}
    </button>
  )
}

export default Button