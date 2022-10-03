import React from 'react'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import mac from "../Styles/mac.css"

const Ios = () => {

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
                    Free iOS time tracker
                    </h1>
                </div>
                <div>
                    <p>
                    Clockify is a simple and free timer app for
                    <br/> iPhone that lets you and your team log hours while on the go.
                    </p>
                </div>
                <div className='imgg1'>
                    <a href="https://apps.apple.com/us/app/clockify-me/id1304431926" target="_blank">
                <img src='https://clockify.me/assets/images/app-store.svg' />
                </a>
                </div>
                <div className='img12345'>
                    <img src='https://clockify.me/assets/images/ios-time-tracker-light.png' />
                </div>
            </div>
    
        </div>
      )


}

export default Ios