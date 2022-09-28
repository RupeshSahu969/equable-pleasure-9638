import React from 'react'
import  { Route, Routes } from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'

const MainRoute = () => {
  return (
    <Routes>
        <Route path={'/'} Element={<LandingPage/> } />
        <Route path={'/login'} Element={'Login Page'} />
        <Route  path={'/signUp'} Element={'SIgnUp Page'} />
    </Routes>
  )
}

export default MainRoute