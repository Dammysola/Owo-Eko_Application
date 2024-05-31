import React from 'react'
import Style from './InputField.module.css'

const InputField = (props) => {
    const { label, placeholder, type, value, name, OnChange } = props
    return (
        <div className={Style.InputDiv}>
            <label className={Style.label}>{label}</label>
            <input
                className={Style.input}
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={OnChange}
            />
        </div>
    )
}

export default InputField