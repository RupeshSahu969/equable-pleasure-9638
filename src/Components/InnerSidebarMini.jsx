import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { activeArrow, activeCalendar, activeClients, activeDashboard, activeProjects, activeReports, activeSettings, activeTags, activeTeam, activeTracker } from './Redux/action';

export const InnerSidebarMini = () => {
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

    const navigate = useNavigate();

    return (
        <InnerSidebarStyled>
            <div id='main'>
                <div className={`animate ${tracker === true ? 'blue' : ''}`} onClick={() => {
                    dispatch(activeTracker('tracker'))
                    navigate("/tracker");

                }}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                    </span>
                </div>
                <div className={`animate ${calendar === true ? 'blue' : ''}`} onClick={() => {
                    dispatch(activeCalendar('calendar'))
                    navigate("/calendar")

                }}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                    </span>
                </div>
                <div className={`animate ${dashboard === true ? 'blue' : ''}`} onClick={() => {
                    dispatch(activeDashboard('dashboard'))
                    navigate("/dashboard")

                }}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                    </span>
                </div>
                <div className={`animate ${reports === true ? 'blue' : ''}`} onClick={() => dispatch(activeReports('reports'))}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                    </span>
                </div>
                <div className={`animate ${projects === true ? 'blue' : ''}`} onClick={() => {
                    dispatch(activeProjects('projects'))
                    navigate("/projects")

                }}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                    </span>
                </div>
                <div className={`animate ${team === true ? 'blue' : ''}`} onClick={() => {
                    dispatch(activeTeam('team'))
                    navigate("/team")

                }}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                    </span>
                </div>
                <div className={`animate ${clients === true ? 'blue' : ''}`} onClick={() => dispatch(activeClients('clients'))}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                    </span>
                </div>
                <div className={`animate ${tags === true ? 'blue' : ''}`} onClick={() => dispatch(activeTags('tags'))}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                    </span>
                </div>
                <div className={`animate ${settings === true ? 'blue' : ''}`} onClick={() => dispatch(activeSettings('settings'))}>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                    </span>
                </div>
                <div className={`animate ${arrow === true ? 'blue' : ''}`} onClick={() => dispatch(activeArrow('arrow'))}>
                    <span>
                        <img src="https://app.clockify.me/assets/ui-icons/chevron-down.svg" alt="arrow" />
                    </span>
                </div>
            </div>
        </InnerSidebarStyled >
    )
}

const InnerSidebarStyled = styled.div`
  
#main{ 
    width:65px;
    height:100%;
    border-right:1px solid #C6D2D9;
    box-sizing: border-box;
    position: relative;
            animation-name: animateMini;
            animation-duration: .4s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
}
         
@keyframes animateMini {
            from {
                width: 0px;
            }

            to {
                width: 65px;
            }

        }
.animate{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    cursor: pointer;
    transition: all .3s ease-in-out;  
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

.blue{
    background-color: #bcc8cf;
}
` 