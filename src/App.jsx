// import LandingPage from "./pages/landingpage/LandingPage"
// import MainPage from "./pages/mainPage/MainPage"
// import NavBar from "./components/navBar/Navbar"
// import SignUp from "./pages/signUp/SignUp"
// import Verify from "./pages/verification/Verify"
import { RouterProvider } from "react-router-dom"
import router from "./router"


function App() {
  
  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
