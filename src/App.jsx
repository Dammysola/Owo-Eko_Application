import { RouterProvider } from "react-router-dom"
import router from "./router"
import Confirmation from "./popUps/confirmation/Confirmation"


function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
