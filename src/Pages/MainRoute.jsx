import React from 'react'
import { Route, Routes } from "react-router-dom"
import Android from "./Android"
import Chrome from "./Chrome"
import Downloding from "./Downloding"
import Edge from "./Edge"
import Features from "./Features"
import Firefox from "./Firefox"
import Ios from './Ios'
import LandingPage from './LandingPage/LandingPage'
import Linux from "./Linux"
import LoginPage from './LoginPage/LoginPage'
import Mac from "./Mac"
import SignUpPage from './SignUpPage/SignUpPage'
import Window from "./Window"

const MainRoute = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/signup'} element={<SignUpPage />} />
      <Route path='/chrome' element={<Chrome />} />
      <Route path='/android' element={<Android />} />
      <Route path='/edge' element={<Edge />} />
      <Route path='/firefox' element={<Firefox />} />
      <Route path='/ios' element={<Ios />} />
      <Route path='/linux' element={<Linux />} />
      <Route path='/window' element={<Window />} />
      <Route path='/mac' element={<Mac />} />
      <Route path='features' element={<Features />} />
      <Route path='downloding' element={<Downloding />} />
      <Route path='*' element={<h1>404 page not found</h1>} />
    </Routes>
  )
}
export default MainRoute