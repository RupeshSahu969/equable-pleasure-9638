import { Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import Footer from '../Components/Footer/Footer'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
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
// import { Tracker } from "./Tracker/Tracker";


const MainRoute = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      {/* <div style={{
        width:"80%",
        margin:"auto",
        paddingTop:"10px"
      }} >
      <NavbarLanding/>

      </div> */}
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        <Route path="/chrome" element={<Chrome />} />
        <Route path="/android" element={<Android />} />
        <Route path="/edge" element={<Edge />} />
        <Route path="/firefox" element={<Firefox />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/window" element={<Window />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/features" element={<Features />} />
        <Route path="/downloding" element={<Downloding />} />
        {/* <Route path={"/tracker"} element={auth?<Tracker />:"*"} /> */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

      {/* <Stack mb={'40px'} >
        <Footer />
      </Stack> */}
    </div>
  );
}
export default MainRoute