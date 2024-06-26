import { RouterProvider } from "react-router-dom"
import router from "./router"
import Receipt from "./popUps/receipt/Receipt"



function App() {
  
  return (
    <>
        <RouterProvider router={router}/> 
        
    </>
  )
}

export default App
