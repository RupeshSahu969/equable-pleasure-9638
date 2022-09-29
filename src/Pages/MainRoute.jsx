import React from 'react'
import  { Route, Routes } from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage.jsx/SignUpPage'

const MainRoute = () => {
  return (
    <Routes>
        <Route path={'/'} Element={<LandingPage/> } />
        <Route path={'/login'} Element={<LoginPage/>} />
        <Route  path={'/signup'} Element={<SignUpPage/>} />
    </Routes>
  )
}

export default MainRoute