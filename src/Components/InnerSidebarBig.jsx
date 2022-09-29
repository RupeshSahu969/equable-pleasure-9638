import 'aos/dist/aos.css';
import React from 'react';
import styled from 'styled-components';

export const InnerSidebarBig = () => {
    return (
        <>
            <InnerSidebarStyled>
                <div id='main'>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                        </div>
                        <div>TIME TRACKER</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                        </div>
                        <div>Calendar</div>
                    </div>
                    <div>
                        <div className='para'>Analyze</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                        </div>
                        <div>Dashboard</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                        </div>
                        <div>Reports</div>
                    </div>
                    <div>
                        <div className='para'>Manage</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                        </div>
                        <div>Projects</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                        </div>
                        <div>Team</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                        </div>
                        <div>Clients</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                        </div>
                        <div>Tags</div>
                    </div>
                    <div className='animate'>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                        </div>
                        <div>Settings</div>
                    </div>
                    <div className='animate'>
                        <div className='arrow'>
                            <img src="https://app.clockify.me/assets/ui-icons/chevron-down.svg" alt="arrow" />
                        </div>
                        <div>Show more</div>
                    </div>
                </div>
            </InnerSidebarStyled >
        </>
    )
}

const InnerSidebarStyled = styled.div`
    position: fixed;
    overflow: hidden;
    transition: all 1s ease-in-out;
    /* transition: All 0.4s cubic-bezier(1,-0.2,.25,.95); */
    @media screen and (max-width:800px){
        transform: translateX(-100%);
    }
#main{ 
    transform: translateX(0px);
    width:197px;
    height:615px;
    border-right:1px solid #C6D2D9;
    font-weight: 400;
    line-height: 1.5;
    color: #333;  
    text-transform: uppercase;
    box-sizing: border-box;
}
#main>div{
    display: flex;
    align-items: center;
    justify-content: left;
    box-sizing: border-box;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    gap:22px;
}
.arrow{
    margin-left: 4px;
}
.arrow+div{
    margin-left: 4px;
    color: #999;
}
.animate{
    cursor: pointer;
    transition: all .3s transform;  
    position: relative;  
    &::before{                    
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 50%;
              background-color: #486d86;
              transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
              opacity: 0.21;
    } 
    &:hover::before{     
              width: 100%;
              height: 100%;
    }
}
.para{
    color: #999;
    letter-spacing: 1px;
    font-size: .8571rem;
}
`