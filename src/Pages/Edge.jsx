import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import "../Styles/chrome.css"


const Edge = () => {
  

    return (
        <div className='chrome'>
            <div style={{
                width:"80%",
                margin:"auto",
                marginTop:"-50px"
                }} >
                <NavbarLanding/>
            </div>
            <div>
                <div>
                    <h1>
                    Free Edge time tracking extension
                    </h1>
                </div>
                <div>
                    <p>
                    Track time from the Edge browser. Clockify's Edge extension allows you to track how 
                    <br/>much time you spend working on projects with just one click.
                    </p>
                </div>
                <div className='imgg'>
                    <a href=" https://chrome.google.com/webstore/detail/clockify-time-tracker/pmjeegjhjdlccodhacdgbgfagbpmccpe" target="_blank">
                <img src='https://clockify.me/assets/images/edge-store-clockify.svg' />
                </a>
                </div>
                <div className='img123'>
                    <img src='https://clockify.me/assets/images/extension-time-tracker-light.png' />
                </div>
            </div>
    
        </div>
      )

}

export default Edge