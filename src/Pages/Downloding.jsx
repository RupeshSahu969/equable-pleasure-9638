import React from 'react'
import { Link } from 'react-router-dom'
import downloding from "../Styles/downloding.css"
const Downloding = () => {

  return (
    <div className='downloding'>

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
                        <li>
                    <Link to="/">Chrome </Link>
                    </li>
                </div>
                <div><li><Link to="/">Firefox</Link></li>
                    
                </div>
                <div>
                    <li><Link to="/">Edge </Link></li>
                    
                </div>
                <div>
                    <li><Link to="/">Mac </Link></li>
                    
                </div>
                <div>
                    <li>
                    <Link to="/">Windows </Link>
                    </li>
                </div>
                <div>
                    <li><Link to="/">Linux .</Link></li>
                    
                </div>
                <div>
                    <li><Link to="/">Android .</Link></li>
                    
                </div>
                <div>
                    <li><Link to="/">iOS .</Link></li>
                    
                               
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
                <div>
                <img  src='https://clockify.me/assets/images/chrome-store.svg'/>
                </div>
                <div>
                <img  src='https://clockify.me/assets/images/firefox-store.svg'/>
                </div>
                
                <div>
                <img  src='https://clockify.me/assets/images/edge-store.svg'/>
                </div>
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
                <div>
                <img  src='https://clockify.me/assets/images/download-app-mac.svg'/>
                </div>
                <div>
                <img  src='https://clockify.me/assets/images/download-app-windows.svg'/>
                </div>
                
                <div>
                <img  src='https://clockify.me/assets/images/download-app-linux.svg'/>
                </div>
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
                <div>
                <img  src='https://clockify.me/assets/images/app-store-ios.svg'/>
                </div>
                <div>
                <img  src='https://clockify.me/assets/images/play-store-android.svg'/>
                </div>
                
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
                <div>
                <img  src='https://clockify.me/assets/images/app-store-ios.svg'/>
                </div>
                <div>
                <img  src='https://clockify.me/assets/images/play-store-android.svg'/>
                </div>
                
                <div>
                <img  src='https://clockify.me/assets/images/download-app-mac.svg'/>
                </div>
                <div>
                <img  src='https://clockify.me/assets/images/download-app-windows.svg'/>
                </div>
                </div>
            </div>
            </div>
            <hr/>
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
                <Link>
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
