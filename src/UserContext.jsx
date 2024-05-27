import { createContext, useContext, useState} from "react"

export const myContext = createContext()

export const userContextHook =()=> useContext(myContext)

const UserContext = ({children}) => {
  const [userDetails, setUserDetails] = useState({
    Username: '',
    phoneNumber: '',
  })
  const updateDetails = (data)=>{
    setUserDetails(data)
  }

  return (
    <myContext.Provider value={{userDetails, updateDetails}}>
      {children}
    </myContext.Provider>
  )
}

export default UserContext