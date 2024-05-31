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
    username: ""
  })

  const [logged, setLogged] = useState(false);

  const updateDetails = (data) => {
    setUserDetails(data)
  }

  const updateSetLogged = (data) => {
    setLogged(data)
  }

  const updateValidation = (data)=>{
    setValidation (data)
  }

  return (
    <myContext.Provider value={{ userDetails, updateDetails, logged, updateSetLogged, validation, updateValidation}}>
      {children}
    </myContext.Provider>
  )
}

export default UserContext