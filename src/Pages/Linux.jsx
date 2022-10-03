import React from 'react'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import mac from "../Styles/mac.css"

const Linux = () => {

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
                    Free Linux time tracker
                    </h1>
                </div>
                <div>
                    <p>
                    Clockify is the only 100% free time tracking app for Linux that lets you and your team 
                    <br/>log hours straight from your desktop while working.
                    </p>
                </div>
                <div className='imgg1'>
                    <a href="https://www.filehorse.com/download-clockify/" target="_blank">
                <img src='https://clockify.me/assets/images/download-app-linux-deb.svg' />
                </a>
                </div>
                <div className='img12345'>
                    <img src='https://clockify.me/assets/images/linux-time-tracker-light.png' />
                </div>
            </div>
    
        </div>
      )



}

export default Linux