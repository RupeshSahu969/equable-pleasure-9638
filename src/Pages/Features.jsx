import React from 'react'
import features from "../Styles/features.css"
import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

import {
    
    Stack,
    
  } from '@chakra-ui/react';
import NavbarLanding from '../Components/NavbarLanding/NavbarLanding';
  


const Features = () => {

    const [timer1, setTimer2] = useState(30);

  const vRef = useRef(null);

  const starVideo = () => {
    vRef.current.play();
  };
  const pausVideo = () => {
    vRef.current.pause();
  };

  const stop_30_Video = () => {
    setTimer2(timer1 + 30);
    vRef.current.currentTime = [timer1];
  };

  return (

    <div className='features'>
        <div style={{
                width:"80%",
                margin:"auto",
                marginTop:"-50px"
                }} >
                <NavbarLanding/>
            </div>
        
            <div className='pro'>
                <h1>Features</h1>
            </div>
    <div className='features1'>

        <div className='timekeep'>
            <h1>TIMEKEEPING</h1>
            <div>
        <div className='div1'>Time Tracker</div>
        <div className='div1'>kiosk</div>
        <div className='div1'>Apps</div>
        
        <div className='div1'>Timesheet</div>
        <div className='div1'>Calendar</div>
        <div className='div1'>Itegrations</div>
        </div>
        </div>
        <div className='timekeep'>
        
            <h1>REPOTING</h1>
            <div>
        <div className='div1'>Dashboard</div>
        <div className='div1'>Activity</div>
        
        <div className='div1'>Reports</div>
        
        <div className='div1'>Projects</div>
        <div className='div1'>Apps</div>
        
        <div className='div1'>Timesheet</div>
        </div>
        </div>
        <div className='timekeep'>
        
            <h1>MANAGEMENT</h1>
            <div>
        <div className='div1'>Team</div>
        <div className='div1'>Time Off</div>
            <div className='div1'>Expenses</div>
            
            <div className='div1'>Scheduling</div>
            <div className='div1'>Approval</div>
            <div className='div1'>Invoicing</div>
        </div>
        </div>


    
    </div>
    <hr/>
    <div className='timertrack'>
        <div>
            <div>
            <h1>Timer tracker</h1>
            </div>
            <div>
            <p>Start and stop timer as you work, or enter hours manually.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-tracker-screenshot.svg' alt='timertrack' />
        </div>
        <div className='timeset'>
            <div>
                <div>
                    <h1>Timer</h1>
                    <div>
                        <p>Track time using a stopwatch.</p>
                    </div>
                </div>
                <div>
                    <h1>Add time</h1>
                    <div>
                        <p>Enter and edit hours manually.</p>
                    </div>
                </div>
                <div>
                    <h1>Continue</h1>
                    <div>
                        <p>
                        Continue tracking with one click.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Billable</h1>
                    <div>
                        <p>
                        Mark hours as billable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
    </div>

    <div className='timersheet'>
        <div>
            <div>
            <h1>Timesheet</h1>
            </div>
            <div>
            <p>Log your weekly activities in less than a minute.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-timesheet-screenshot.svg' alt='timersheet' />
        </div>

        <div className='timeset'>
            <div>
                <div>
                    <h1>Activites</h1>
                    <div>
                        <p>Select activity and enter time.
</p>
                    </div>
                </div>
                <div>
                    <h1>Templates</h1>
                    <div>
                        <p>Quickly load activities each week.

</p>
                    </div>
                </div>
                <div>
                    <h1>Approval</h1>
                    <div>
                        <p>
                        Submit and approve timesheets.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Reminder</h1>
                    <div>
                        <p>
                        Reminder for due timesheets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </div>

    <div className='kiosk'>
        <div>
            <div>
            <h1>Kiosk</h1>
            </div>
            <div>
            <p>Clock in with your PIN code from a shared device.

.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-kiosk-screenshot.png' />
        </div>

        <div className='timeset'>
            <div>
                <div>
                    <h1>Clock-in</h1>
                    <div>
                        <p>Punch in from a shared device.
</p>
                    </div>
                </div>
                <div>
                    <h1>Breaks</h1>
                    <div>
                        <p>Track employee breaks.</p>
                    </div>
                </div>
                <div>
                    <h1>Pin</h1>
                    <div>
                        <p>
                        Sign in with personal code.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Activity</h1>
                    <div>
                        <p>
                        See how much you've worked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

        </div>
    </div>

    <div className='calendar'>
        <div>
            <div>
            <h1>Calendar</h1>
            </div>
            <div>
            <p>Visualize your time and block out activities.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-calendar-screenshot.svg'/>
        </div>
        <div className='timeset'>
            <div>
                <div>
                    <h1>Visulize</h1>
                    <div>
                        <p>See how your day looks like.</p>
                    </div>
                </div>
                <div>
                    <h1>Add</h1>
                    <div>
                        <p>Block hours with a click.</p>
                    </div>
                </div>
                <div>
                    <h1>Edit</h1>
                    <div>
                        <p>
                        Edit blocks by resizing.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Connect</h1>
                    <div>
                        <p>
                        Add events from Outlook/Google.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </div>

    <div className='app'>
        <div>
            <div>
            <h1>Apps</h1>
            </div>
            <div className='links'> 
                    <div>
                    <div>
                        <li>
                    <Link to="/chrome">Chrome </Link>
                    </li>
                </div>
                <div><li><Link to="/firefox">Firefox</Link></li>
                    
                </div>
                <div>
                    <li><Link to="/edge">Edge </Link></li>
                    
                </div>
                <div>
                    <li><Link to="/mac">Mac </Link></li>
                    
                </div>
                <div>
                    <li>
                    <Link to="/window">Windows </Link>
                    </li>
                </div>
                
                <div>
                    <li><Link to="/ios">iOS .</Link></li>
                    
                               
                </div>
                </div>
                </div>
            <div>
            <p>Track time using desktop and mobile app.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-apps-screenshot.png'/>
        </div>
        </div>
    </div>

    {/* <div className='integration'>
        <div>
            <div>
            <h1>Integrations</h1>
            </div>
            <div>
            <p>Connect Clockify with other apps.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/integrations/time-tracking-integrations-quickbooks.png'/>
        </div>
        <div>
            <img src='https://clockify.me/assets/images/integrations/time-tracking-integrations-trello.png'/>
        </div>
        <div>
            <img src='https://clockify.me/assets/images/integrations/time-tracking-integrations-asana.png'/>
        </div>
        <div>
            <img src='https://clockify.me/assets/images/integrations/time-tracking-integrations-jira.png'/>
        </div>
        </div>
    </div> */}

    <div className='dash'>
        <div>
            <div>
            <h1>Dashboard</h1>
            </div>
            <div>
            <p>See where you spend time and what your team is working on.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-dashboard-screenshot.svg'/>
        </div>

        <div className='timeset'>
            <div>
                <div>
                    <h1>Breakdowns</h1>
                    <div>
                        <p>Overview by: day, activity, user.</p>
                    </div>
                </div>
                <div>
                    <h1>Filters</h1>
                    <div>
                        <p>Drill down into your data.</p>
                    </div>
                </div>
                <div>
                    <h1>Share</h1>
                    <div>
                        <p>
                        Share reports with clients via link.
                        </p>
                    </div>
                </div>
                <div>
                    <h1>Export</h1>
                    <div>
                        <p>
                        Download PDF, CSV, or Excel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        

        </div>
    </div>

    <div className='repot1'>
        <div>
            <div>
            <h1>Reports</h1>
            </div>
            <div>
            <p>See who worked on what, how much money you earn,
                <br/> review your team's time, and export the data.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-reports-screenshot.svg' alt='timertrack' />
        </div>
        </div>
    </div>

    <div className='activity'>
        <div>
            <div>
            <h1>Activity</h1>
            </div>
            <div>
            <p>See visited sites and what you've worked on.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-locations-screenshot.png'  />
        </div>
        </div>
    </div>

    <div className='project'>
        <div>
            <div>
            <h1>Project</h1>
            </div>
            <div>
            <p>Track time on projects, and keep an eye on progress and budget.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-projects-screenshot.svg'  />
        </div>
        </div>
    </div>

    <div className='team'>
        <div>
            <div>
            <h1>Team</h1>
            </div>
            <div>
            <p>Invite your team to track time in your account.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-team-screenshot.svg'  />
        </div>
        </div>
    </div>

    <div className='timeoff'>
        <div>
            <div>
            <h1>Time Off</h1>
            </div>
            <div>
            <p> Track your team's holidays and time off requests.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-timeoff-screenshot.svg'  />
        </div>
        </div>
    </div>

    <div className='approval'>
        <div>
            <div>
            <h1>Appoval</h1>
            </div>
            <div>
            <p> Officially approve your team's timesheets and expenses.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-approval-screenshot.svg'  />
        </div>
        </div>
    </div>

    <div className='expenses'>
        <div>
            <div>
            <h1>Expenses</h1>
            </div>
            <div>
            <p>Record fixed-fees and other project expenses.</p>
            </div>
            <div>
            <img src='https://clockify.me/assets/images/features/features-expenses-screenshot.svg'  />
        </div>
        </div>
    </div>

    <div style={{  marginBottom:"100px",marginTop:"200px"}}>
        <Link><p className='demo'>Watch Demo (12:36)</p></Link>
        <div style={{ marginLeft:"20%",marginTop:"30px"}}>
        <Stack mt={10} >
        {/* <Image src='https://clockify.me/assets/images/time-tracker-screenshot.svg'/> */}
        <ReactPlayer playing="false"
        light='https://i.ytimg.com/vi/NMZhFs_b0Aw/maxresdefault.jpg'
         src='https://i.ytimg.com/vi/NMZhFs_b0Aw/maxresdefault.jpg'
         width={'70%'} height={'400px'} 
          controls url='https://www.youtube.com/watch?v=NMZhFs_b0Aw'  />
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
                <Link to="/dashboard">
                <button>
                    
                    CREATE FREE ACCOUNT
                </button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Features