import React from 'react'
import mac from "../Styles/mac.css"

const Window = () => {

  
    return (
        <div className='mac'>
            <div>
                <div>
                    <h1>
                    Free Windows time tracker
                    </h1>
                </div>
                <div>
                    <p>
                    Clockify is the only 100% free time tracking app for Windows that lets you and your 
                    <br/>team log hours straight from your desktop while working.
                    </p>
                </div>
                <div className='imgg1'>
                    <a href="https://www.filehorse.com/download-clockify/" target="_blank">
                <img src='https://clockify.me/assets/images/download-windows.svg' />
                </a>
                </div>
                <div className='img12345'>
                    <img src='https://clockify.me/assets/images/windows-time-tracker-2-light.png' />
                </div>
            </div>
    
        </div>
      )

}

export default Window