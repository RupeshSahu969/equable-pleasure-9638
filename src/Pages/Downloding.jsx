import React from 'react'
import { Link } from 'react-router-dom'
import downloding from "../Styles/downloding.css"


import ReactPlayer from "react-player"

import {
    
    Stack,
    
  } from '@chakra-ui/react';
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding';
  
const Downloding = () => {

  return (
    <div className='downloding'>
        <div style={{
                width:"80%",
                margin:"auto",
                marginTop:"-50px"
                }} >
                <NavbarLanding />
            </div>

        <div className='timer'>
            <div>
                <div>
                    <h1>Time Tracking Apps </h1>
                </div>
                <div>
                    <p>
                    Install Clockify and track time from anywhere — everything is synced online.
                    </p>
                </div>
                <div className='links'> 
                    <div>
                    <div>
                    <Link to="/chrome">
                        <li>
                    Chrome 
                    </li>
                    </Link>
                </div>
                <div>
                <Link to="/firefox">
                    <li>Firefox
                    </li>
                    </Link>
                </div>
                <div>
                <Link to="/edge">
                    <li>Edge </li>
                    </Link>
                </div>
                <div>
                <Link to="/mac">
                    <li>Mac 
                    </li>
                    </Link>
                </div>
                <div><Link to="/window">
                    <li>
                    Windows 
                    </li>
                    </Link>
                </div>
                <div>
                    <Link to="/linux"><li>Linux</li> </Link>
                    
                </div>
                <div>
                <Link to="/android">
                    <li>
                        Android
                        </li>
                        </Link>
                </div>
                <div>
                <Link to="/ios">
                    <li>
                        iOS </li>
                        </Link>
                    
                               
                </div>
                </div>
                </div>
            </div>
        </div>
        
        <div className='brouser'>
            <div>
            <div className='img1'>
                <img  src='https://clockify.me/assets/images/clockify-apps-extension.png'/>
            </div>
            <div>
                <h1>Browser extension</h1>
                <p>Track time via extension.</p>
               <div className='imges'>
                <Link to="/chrome">
                <div>
                <img  src='https://clockify.me/assets/images/chrome-store.svg'/>
                </div>
                </Link>
                <Link to="/firefox">
                <div>
                <img  src='https://clockify.me/assets/images/firefox-store.svg'/>
                </div>
                </Link>
                <Link to="/edge">
                <div>
                <img  src='https://clockify.me/assets/images/edge-store.svg'/>
                </div>
                </Link>
                </div>
            </div>
            </div>
            <hr/>
        </div>
        
        <div className='brouser'>
            <div>
            <div className='img1'>
                <img  src='https://clockify.me/assets/images/clockify-apps-desktop.png'/>
            </div>
            <div>
                <h1>Desktop app</h1>
                <p>Track time on your computer.</p>
               <div className='imges'>
               <Link to="/mac">
                <div>
                <img  src='https://clockify.me/assets/images/download-app-mac.svg'/>
                </div>
                </Link>
                <Link to="/window">
                <div>
                <img  src='https://clockify.me/assets/images/download-app-windows.svg'/>
                </div>
                </Link>
                <Link to="/linux">
                <div>
                <img  src='https://clockify.me/assets/images/download-app-linux.svg'/>
                </div>
                </Link>
                </div>
            </div>
            </div>
            <hr/>
        </div>
        
        <div className='brouser'>
            <div>
            <div className='img1'>
                <img  src='https://clockify.me/assets/images/clockify-apps-mobile.png'/>
            </div>
            <div>
                <h1>Mobile app</h1>
                <p>Track time and expenses on your phone.</p>
               <div className='imges'>
               <Link to="/ios">
                <div>
                <img  src='https://clockify.me/assets/images/app-store-ios.svg'/>
                </div>
                </Link>
                <Link to="/android">
                <div>
                <img  src='https://clockify.me/assets/images/play-store-android.svg'/>
                </div>
                </Link>
                </div>
            </div>
            </div>
            <hr/>
        </div>
        
        <div className='brouser'>
            <div>
            <div className='img1'>
                <img  src='https://clockify.me/assets/images/clockify-apps-kiosk.png'/>
            </div>
            <div>
                <h1>kiosk</h1>
                <p>Set up a shared time clock kiosk on any device.</p>
               
            </div>
            </div>
            <hr/>
        </div>
     
        <div className='brouser'>
            <div>
            <div className='img1'>
                <img  src='https://clockify.me/assets/images/pumble-apps.png'/>
            </div>
            <div>
                <h1>Chat app</h1>
                <p>Chat via Pumble app (desktop and mobile).</p>
               <div className='imges'>
               <Link to="/ios">
                <div>
                <img  src='https://clockify.me/assets/images/app-store-ios.svg'/>
                </div>
                </Link>
                <Link to="/android">
                <div>
                <img  src='https://clockify.me/assets/images/play-store-android.svg'/>
                </div>
                </Link>
                <Link to="/mac">
                
                <div>
                <img  src='https://clockify.me/assets/images/download-app-mac.svg'/>
                </div>
                </Link>
                <Link to="/window">
                <div>
                <img  src='https://clockify.me/assets/images/download-app-windows.svg'/>
                </div>
                </Link>
                </div>
            </div>
            </div>
            <hr/>
        </div>


        <div style={{  marginBottom:"100px",marginTop:"100px" ,color:"blue"}}>
        <Link><p className='demo'>Watch Demo (2:42)</p></Link>
        <div style={{ marginLeft:"24%",marginTop:"30px"}}>
        <Stack mt={10} >
        {/* <Image src='https://clockify.me/assets/images/time-tracker-screenshot.svg'/> */}
        <ReactPlayer playing="false"
         light='https://clockify.me/assets/images/tags-fb-tw/time-tracking-apps.png'
         src='https://clockify.me/assets/images/tags-fb-tw/time-tracking-apps.png'
         width={'70%'} height={'500px'} 
          controls url='https://www.youtube.com/watch?v=g_d2w5xPD0k'  />
      </Stack>
      </div>
      </div>


        <div className='traking'>
            <div>
                <h1>Start tracking time with Clockify</h1>
            
            </div>
            <div className='support'>
                <div>
                    <li>24/7 Support</li>
                </div>
                <div>
                    <li>cancel Anytime</li>
                </div>
                <div>
                    <li>Free Forever</li>
                </div>
            </div>
            <div className='btn'>
                <Link to="/">
                <button>
                    
                    CREATE FREE ACCOUNT
                </button>
                </Link>
            </div>
        </div>

        

    </div>
  )
}

export default Downloding
