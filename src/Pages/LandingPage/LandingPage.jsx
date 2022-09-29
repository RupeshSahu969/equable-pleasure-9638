import { Heading } from '@chakra-ui/react'
import React from 'react'
import NavbarLanding from '../../Components/NavbarLanding'

const LandingPage = () => {
  return (
    <div style={{
      border:"1px solid red"
    }} >
      <div>
        <NavbarLanding/>
      </div>
      <div>
       <Heading>
        The most popular free 
        <span style={{color:"#03A9F4" }}> time tracker </span>
        for teams
       </Heading>
      </div>
      <div> heading Contents </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LandingPage