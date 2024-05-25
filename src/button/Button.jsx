import React from 'react'
import Style from '../button/Button.module.css'

const Button = (props) => {
    const {type, children, onSubmit}= props
  return (
    <div>
        <button 
        className={Style.button}
        type={type}
        onSubmit={onSubmit}>{children}</button>
    </div>
  )
}

export default Button