import React from 'react'
import styled from 'styled-components'

export const InnerSidebar = () => {
    return (
        <InnerSidebarStyled>
            <div id='main'>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                    </span>
                    <span>TIME TRACKER</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                    </span>
                    <span>Calendar</span>
                </div>
                <div>
                    <span className='para'>Analyze</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                    </span>
                    <span>Dashboard</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                    </span>
                    <span>Reports</span>
                </div>
                <div>
                    <span className='para'>Manage</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                    </span>
                    <span>Projects</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                    </span>
                    <span>Team</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                    </span>
                    <span>Clients</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                    </span>
                    <span>Tags</span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                    </span>
                    <span>Settings</span>
                </div>
            </div>
        </InnerSidebarStyled >
    )
}

const InnerSidebarStyled = styled.div`
#main{
    width:197px;
    height:1000px;
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
    box-sizing: border-box;
    white-space: pre;
    padding: 10px 16px 10px 16px;
    font-size: 1rem;
    text-align: left;
    gap:22px;
}
.para{
    color: #999;
    letter-spacing: 1px;
    font-size: .8571rem;
}
` 