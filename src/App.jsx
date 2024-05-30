import { RouterProvider } from "react-router-dom"
import router from "./router"
import No_Mobile from "./popUps/noMobile/No_Mobile"
import Claim from "./popUps/claim/Claim"



function App() {
  
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      {/* <Error/> */}
      {/* <No_Mobile/> */}
      <Claim/>
    </>
  )
}

export default App
