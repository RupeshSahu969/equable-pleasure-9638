import React from 'react'
import  { Route, Routes } from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage/SignUpPage'
import Chrome from "./Chrome"
import Android from "./Android"
import Edge from "./Edge"
import Firefox from "./Firefox"
import Ios from './Ios'
import Linux from "./Linux"
import Mac from "./Mac"
import Window from "./Window"
import Downloding from "./Downloding"
import Features from "./Features"
import Calendr from './Calendar'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import Footer from '../Components/Footer/Footer'
import { Stack } from '@chakra-ui/react'

const MainRoute = () => {
  return (
    <div>
      <div style={{
        // border:"1px solid red",
        width:"80%",
        margin:"auto",
        paddingTop:"10px"
      }} >
      <NavbarLanding/>

      </div>
    <Routes>
        <Route path={'/'} element={<LandingPage/> } />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route  path={'/signup'} element={<SignUpPage/>} />
        <Route path='/chrome' element={<Chrome />} />
        <Route  path='/android' element={<Android/>} />
        <Route path='/edge' element={<Edge/>} />
        <Route path='/firefox' element={<Firefox/>} />
        <Route path='/ios' element={<Ios/>} />
        <Route path='/linux' element={<Linux/>} />
        <Route path='/window' element={<Window/>} />
        <Route path='/mac' element={<Mac/>} />
        <Route path='/calendar' element={<Calendr/>}  />
        <Route path='/features' element={<Features/>} />
        <Route path='/downloading' element={<Downloding/>} />
    </Routes>
    
    <Stack mb={'40px'} >
        <Footer />
      </Stack>
    
    </div>

  )
}

export default MainRoute