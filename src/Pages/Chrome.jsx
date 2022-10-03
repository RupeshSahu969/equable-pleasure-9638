import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import "../Styles/chrome.css"


const Chrome = () => {

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
                Free Chrome time tracking extension
                </h1>
            </div>
            <div>
                <p>
                Track time from anywhere in your browser. Clockify's Chrome time tracker allows you 
                <br/>to track how much time you spend working on projects with just one click.
                </p>
            </div>
            <div className='imgg'>
                <a href="https://chrome.google.com/webstore/category/extensions" target="_blank">
            <img src='https://clockify.me/assets/images/chrome-store-clockify.svg' />
            </a>
            </div>
            <div className='img123'>
                <img src='https://clockify.me/assets/images/extension-time-tracker-light.png' />
            </div>
        </div>

    </div>
  )
}

export default Chrome