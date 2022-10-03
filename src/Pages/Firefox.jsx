import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import "../Styles/chrome.css"


const Firefox = () => {

    return (
        <div className='chrome'>
            <div style={{
                width:"90%",
                margin:"auto",
                marginTop:"-50px"
                }} >
                <NavbarLanding/>
            </div>
            <div>
                <div>
                    <h1>
                    Free Firefox time tracking extension
                    </h1>
                </div>
                <div>
                    <p>
                    Track time from the Firefox browser. Clockify's Firefox extension allows you to track 
                    <br/>how much time you spend working on projects with just one click.
                    </p>
                </div>
                <div className='imgg'>
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/clockify-time-tracker/" target="_blank">
                <img src='https://clockify.me/assets/images/firefox-store-clockify.svg' />
                </a>
                </div>
                <div className='img123'>
                    <img src='https://clockify.me/assets/images/extension-time-tracker-light.png' />
                </div>
            </div>
    
        </div>
      )
}

export default Firefox