import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const userContextHook = () => useContext(myContext)

const UserContext = ({ children }) => {

  const [validation, setValidation] = useState({
    email: false,
    phoneNumber: false,
    password: false,
  })

  const [userDetails, setUserDetails] = useState({
    balance: 0,
    email: "",
    id: 0,
    phone: "",
    status: 0,
    time: "",
    username: ""
  })
  
  const [accountDetails, setAccountDetails] = useState({
    acc_name: "",
    acc_num: "",
    bank_code: "",
    bank_name: ""
  })
  const [receiptDetails, setReceiptDetails] = useState({
    amount: 0,
    date: "",
    refid: "",
    sender: ""
  })

  const [transactions, setTransactions] = useState([])

  const [logged, setLogged] = useState(false);

  const updateDetails = (data) => {
    setUserDetails(data)
  }
  const updateAccountDetails = (data) => {
    setAccountDetails(data)
  }
  const updateSetLogged = (data) => {
    setLogged(data)
  }

  const updateValidation = (data) => {
    setValidation(data)
  }

  const updateTransactions = (data) => {
    setTransactions(data)
  }

  const updateReceiptDetails = (data) => {
    setReceiptDetails(data)
  }

  return (
    <myContext.Provider value={{ userDetails, updateDetails, logged, updateSetLogged, validation, updateValidation, accountDetails, updateAccountDetails, transactions, updateTransactions, receiptDetails, updateReceiptDetails, }}>
      {children}
    </myContext.Provider>
  )
}

export default UserContext