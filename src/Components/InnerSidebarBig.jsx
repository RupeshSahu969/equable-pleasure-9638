import React, { useState } from 'react';
import styled from 'styled-components';

export const InnerSidebarBig = () => {
    const [trackerState, setTrackerState] = useState(false)
    const [calendarState, setCalendarState] = useState(false)
    const [dashboard, setDashboard] = useState(false)
    const [reports, setReports] = useState(false)
    const [projects, setProjects] = useState(false)
    const [team, setTeam] = useState(false)
    const [clients, setClients] = useState(false)
    const [tags, setTags] = useState(false)
    const [settings, setSettings] = useState(false)
    const [arrow, setArrow] = useState(false)


    const handleActive = (id) => {
        switch (id) {
            case 'tracker': return (
                setTrackerState(true),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'calendar': return (
                setTrackerState(false),
                setCalendarState(true),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'dashboard': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(true),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'reports': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(true),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'projects': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(true),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'team': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(true),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'clients': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(true),
                setTags(false),
                setSettings(false),
                setArrow(false)
            )
            case 'tags': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(true),
                setSettings(false),
                setArrow(false)
            )
            case 'settings': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(true),
                setArrow(false)
            )
            case 'arrow': return (
                setTrackerState(false),
                setCalendarState(false),
                setDashboard(false),
                setReports(false),
                setProjects(false),
                setTeam(false),
                setClients(false),
                setTags(false),
                setSettings(false),
                setArrow(true)
            )
            default: return id
        }
    }

    return (
        <>
            <InnerSidebarStyled>
                <div id='main'>
                    <div className={`animate ${trackerState === true ? 'blue' : ''}`} onClick={() => handleActive('tracker')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                        </div>
                        <div>TIME TRACKER</div>
                    </div>
                    <div className={`animate ${calendarState === true ? 'blue' : ''}`} onClick={() => handleActive('calendar')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                        </div>
                        <div>Calendar</div>
                    </div>
                    <div>
                        <div className='para'>Analyze</div>
                    </div>
                    <div className={`animate ${dashboard === true ? 'blue' : ''}`} onClick={() => handleActive('dashboard')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                        </div>
                        <div>Dashboard</div>
                    </div>
                    <div className={`animate ${reports === true ? 'blue' : ''}`} onClick={() => handleActive('reports')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                        </div>
                        <div>Reports</div>
                    </div>
                    <div>
                        <div className='para'>Manage</div>
                    </div>
                    <div className={`animate ${projects === true ? 'blue' : ''}`} onClick={() => handleActive('projects')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                        </div>
                        <div>Projects</div>
                    </div>
                    <div className={`animate ${team === true ? 'blue' : ''}`} onClick={() => handleActive('team')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                        </div>
                        <div>Team</div>
                    </div>
                    <div className={`animate ${clients === true ? 'blue' : ''}`} onClick={() => handleActive('clients')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                        </div>
                        <div>Clients</div>
                    </div>
                    <div className={`animate ${tags === true ? 'blue' : ''}`} onClick={() => handleActive('tags')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                        </div>
                        <div>Tags</div>
                    </div>
                    <div className={`animate ${settings === true ? 'blue' : ''}`} onClick={() => handleActive('settings')}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                        </div>
                        <div>Settings</div>
                    </div>
                    <div className={`animate ${arrow === true ? 'blue' : ''}`} onClick={() => handleActive('arrow')}>
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
    overflow: hidden;
                    position: relative;
                    animation-name: animate;
                    animation-duration: .4s;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    animation-timing-function: ease-in;
                    @keyframes animate {
                        from {
                        width: 0px;
            }

                    to {
                        width: 197px;
            }

        }
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

.blue{
    background-color: #bcc8cf;
}
`