import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LandingPage from './pages/landingpage/LandingPage'
import SignUp from './pages/signUp/SignUp'
import Verify from './pages/verification/Verify'
import MainPage from './pages/mainPage/MainPage'
import Login from './pages/login/Login'
import Waitlist from './pages/waitlist/Waitlist'
import Profile from './pages/profile/Profile'
import PopupContext from './PopupContext'
import Forgot_Password from './pages/passwordRecovery/forgotPassword/Forgot_Password'
import ResetPassword from './pages/passwordRecovery/resetPassword/ResetPassword'
import PasswordOTP from './pages/passwordRecovery/recoveryOTP/PasswordOTP'
import Main_Layout from './landingPage_layout/Main_Layout'
import Bank_Details from './pages/bank_details/Bank_Details'




const router = createBrowserRouter([
    {
        path:"/",
        element: <Main_Layout/>,
        children:[
            {
                index: true,
                element: <LandingPage/>
            },
        ]
    
    },
    {
        path:"/",
        element: <PopupContext><MainLayout/></PopupContext>,
        children:[
            {
                path: "/waitlist",
                element: <Waitlist/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/verify/:userData",
                element: <Verify/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/forgotpassword",
                element: <Forgot_Password/>
            },
            {
                path: "/sendOTP/:email",
                element: <PasswordOTP/>
            },
            {
                path: "/resetpassword",
                element: <ResetPassword/>
            },
            {
                path:"/bankDetails",
                element: <Bank_Details/>
            },

            {
                path: "*",
                element:"Page not found"
            },
            {
                path: "/mainpage",
                element: <MainPage/>
            }
        ]
    }
   
])

export default router