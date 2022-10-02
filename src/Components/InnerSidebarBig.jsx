import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { activeArrow, activeCalendar, activeClients, activeDashboard, activeProjects, activeReports, activeSettings, activeTags, activeTeam, activeTracker } from './Redux/action';

export const InnerSidebarBig = () => {
    const dispatch = useDispatch()
    const tracker = useSelector((state) => state.tracker)
    const calendar = useSelector((state) => state.calendar)
    const dashboard = useSelector((state) => state.dashboard)
    const reports = useSelector((state) => state.reports)
    const projects = useSelector((state) => state.projects)
    const team = useSelector((state) => state.team)
    const clients = useSelector((state) => state.clients)
    const tags = useSelector((state) => state.tags)
    const settings = useSelector((state) => state.settings)
    const arrow = useSelector((state) => state.arrow)


    return (
        <>
            <InnerSidebarStyled>
                <div id='main'>
                    <div className={`animate ${tracker === true ? 'blue' : ''}`} onClick={() => dispatch(activeTracker('tracker'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                        </div>
                        <div>TIME TRACKER</div>
                    </div>
                    <div className={`animate ${calendar === true ? 'blue' : ''}`} onClick={() => dispatch(activeCalendar('calendar'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                        </div>
                        <div>Calendar</div>
                    </div>
                    <div>
                        <div className='para'>Analyze</div>
                    </div>
                    <div className={`animate ${dashboard === true ? 'blue' : ''}`} onClick={() => dispatch(activeDashboard('dashboard'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                        </div>
                        <div>Dashboard</div>
                    </div>
                    <div className={`animate ${reports === true ? 'blue' : ''}`} onClick={() => dispatch(activeReports('reports'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                        </div>
                        <div>Reports</div>
                    </div>
                    <div>
                        <div className='para'>Manage</div>
                    </div>
                    <div className={`animate ${projects === true ? 'blue' : ''}`} onClick={() => dispatch(activeProjects('projects'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                        </div>
                        <div>Projects</div>
                    </div>
                    <div className={`animate ${team === true ? 'blue' : ''}`} onClick={() => dispatch(activeTeam('team'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                        </div>
                        <div>Team</div>
                    </div>
                    <div className={`animate ${clients === true ? 'blue' : ''}`} onClick={() => dispatch(activeClients('clients'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                        </div>
                        <div>Clients</div>
                    </div>
                    <div className={`animate ${tags === true ? 'blue' : ''}`} onClick={() => dispatch(activeTags('tags'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                        </div>
                        <div>Tags</div>
                    </div>
                    <div className={`animate ${settings === true ? 'blue' : ''}`} onClick={() => dispatch(activeSettings('settings'))}>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                        </div>
                        <div>Settings</div>
                    </div>
                    <div className={`animate ${arrow === true ? 'blue' : ''}`} onClick={() => dispatch(activeArrow('arrow'))}>
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