import { RouterProvider } from "react-router-dom"
import router from "./router"
import Bank_Registration from "./popUps/bank_registration/Bank_Registration"
import Bank_Details from "./pages/bank_details/Bank_Details"



function App() {
  
  return (
    <>
       {/* <RouterProvider router={router}/> */}
       <Bank_Details/>
    </>
  )
}

export default App
