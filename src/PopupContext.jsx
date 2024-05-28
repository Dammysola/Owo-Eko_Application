import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const popupContextHook = () => useContext(myContext)

const PopupContext = ({ children }) => {
    const [confirmationPopup, setConfirmationPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);
    const [tapExceededPopup, setTapExceededPopup] = useState(false);
    const [withdrawalSuccessPopup, setWithdrawalSuccessPopup] = useState(false);
    const [withdrawalPopup, setWithdrawalPopup] = useState(false);

    const updateConfirmationPopup = (data) => {
        setConfirmationPopup(data)
    }

    const updateErrorPopup = (data) => {
        setErrorPopup(data)
    }

    const updateTapExceededPopup = (data) => {
        setTapExceededPopup(data)
    }

    const updateWithdrawalSuccessPopup = (data) => {
        setWithdrawalSuccessPopup(data)
    }
    const updateWithdrawalPopup = (data) => {
        setWithdrawalPopup(data)
    }



    return (
        <myContext.Provider value={{ 
            confirmationPopup,
            updateConfirmationPopup, 
            errorPopup,
            updateErrorPopup,
            tapExceededPopup,
            updateTapExceededPopup,
            withdrawalSuccessPopup,
            updateWithdrawalSuccessPopup,
            withdrawalPopup,
            updateWithdrawalPopup}}>
            {children}
        </myContext.Provider>
    )
}

export default PopupContext