import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LandingPage from './pages/landingpage/LandingPage'
import SignUp from './pages/signUp/SignUp'
import Verify from './pages/verification/Verify'
import MainPage from './pages/mainPage/MainPage'


const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <LandingPage/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "*",
                element:"Page not found"
            }
        ]
    },
    {
        path: "/mainpage",
        element: <MainPage/>
    }
])

export default router