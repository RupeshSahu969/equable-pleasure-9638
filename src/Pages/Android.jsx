import { Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer/Footer'
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding'
import mac from "../Styles/mac.css"

const Android = () => {

    return (
        <div className='mac'>
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
                    Free Android time tracking app
                    </h1>
                </div>
                <div>
                    <p>
                    Clockify is the only 100% free timer app for Android that lets you and your team log 
                    <br/>hours from your Android devices while on the go.
                    </p>
                </div>
                <div className='imgg1'>
                    <a href="https://play.google.com/store/apps/details?id=me.clockify.android" target="_blank">
                <img src='https://clockify.me/assets/images/play-store-android.svg' />
                </a>
                </div>
                <div className='img12345'>
                    <img src='https://clockify.me/assets/images/android-time-tracker-light.png' />
                </div>
            </div>
            {/* <div >
                <Footer />
            </div> */}
    
        </div>
      )



}

export default Android