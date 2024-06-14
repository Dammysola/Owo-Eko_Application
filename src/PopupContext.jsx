import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const popupContextHook = () => useContext(myContext)

const PopupContext = ({ children }) => {
    
    const [confirmationPopup, setConfirmationPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [tapExceededPopup, setTapExceededPopup] = useState(false);
    const [withdrawalSuccessPopup, setWithdrawalSuccessPopup] = useState(false);
    const [withdrawalPopup, setWithdrawalPopup] = useState(false);
    const [loadingPopup, setLoadingPopup] = useState(false);
    const [claimPopup, setClaimPopup] = useState(false)
    const [profile, setProfile] = useState(false)
    const [bankReg, setBankReg] = useState(false)
    const [withdrawal, setWithdrawal] = useState(false)

    const updateConfirmationPopup = (data) => {
        setConfirmationPopup(data)
    }
    const updateErrorPopup = (data) => {
        setErrorPopup(data)
    }
    const updateErrorText = (data) => {
        setErrorText(data)
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
    const updateLoadingPopup = (data) => {
        setLoadingPopup(data)
    }
    const updateClaimPopup = (data)=>{
        setClaimPopup(data)
    }
    const updateProfile = (data)=>{
        setProfile(data)
    }
    const updateBankReg = (data)=>{
        setBankReg(data)
    }
    const updateWithdrawal = (data)=>{
        setWithdrawal(data)
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
            updateWithdrawalPopup,
            loadingPopup,
            updateLoadingPopup,
            errorText,
            updateErrorText,
            claimPopup,
            updateClaimPopup,
            profile,
            updateProfile,
            bankReg,
            updateBankReg,
            withdrawal,
            updateWithdrawal}}
            >
            {children}
        </myContext.Provider>
    )
}

export default PopupContext