import React from 'react'
import Style from './InputField.module.css'

const InputField = (props) => {
    const { label, placeholder, type, value, name, OnChange, error, maxlength, disabled} = props
    return (
        <div className={Style.InputDiv}>
            <label className={Style.label}>{label}</label>
            <input
                className={Style.input}
                placeholder={placeholder}
                type={type}
                value={value}
                disabled={disabled}
                name={name}
                maxLength={maxlength}
                onChange={OnChange}
                style={{border: `${error ? "1px solid red" : "none"}`}}
            />
        </div>
    )
}

export default InputField