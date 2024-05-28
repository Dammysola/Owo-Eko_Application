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


const router = createBrowserRouter([
    {
        path:"/",
        element: <PopupContext><MainLayout/></PopupContext>,
        children:[
            {
                index: true,
                element: <LandingPage/>
            },
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
                path: "*",
                element:"Page not found"
            },
            {
                path: "/mainpage",
                element: <MainPage/>
            }
        ]
    },
    {
        path: "/mainpage",
        element: <MainPage/>
    }
])

export default router