import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'

import mac from "../Styles/mac.css"

const Mac = () => {

    return (
        <div className='mac'>
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
                    Free Mac time tracker

                    </h1>
                </div>
                <div>
                    <p>
                    Clockify is the only 100% free time tracking app for Mac that lets you log hours 
                    <br/>straight from your desktop. Supports Mac OS 10.12 and higher.
                    </p>
                </div>
                <div className='imgg1'>
                    <a href=" https://support.apple.com/en-in/HT211683" target="_blank">
                <img src='https://clockify.me/assets/images/download-mac.svg' />
                </a>
                </div>
                <div className='img12345'>
                    <img src='https://clockify.me/assets/images/automatic-time-tracker-mac-light.png' />
                </div>
            </div>
    
        </div>
      )


}

export default Mac