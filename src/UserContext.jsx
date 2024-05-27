import { createContext, useContext, useState} from "react"

export const myContext = createContext()

export const userContextHook =()=> useContext(myContext)

const UserContext = ({children}) => {
  const [userDetails, setUserDetails] = useState({
    Username: '',
    phoneNumber: '',
  })

  const [logged, setLogged] = useState(false);

  const updateDetails = (data)=>{
    setUserDetails(data)
  }

  const updateSetLogged = (data)=>{
    setLogged(data)
  }

  
  return (
    <myContext.Provider value={{userDetails, updateDetails, logged, updateSetLogged}}>
      {children}
    </myContext.Provider>
  )
}

export default UserContext