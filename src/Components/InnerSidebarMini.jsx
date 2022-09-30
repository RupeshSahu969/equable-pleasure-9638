import React from 'react'
import styled from 'styled-components'

export const InnerSidebarMini = () => {
    return (
        <InnerSidebarStyled>
            <div id='main'>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/time-tracker.svg" alt="tracker" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/calendar.svg" alt="Calendar" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/dashboard.svg" alt="Dashboard" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/reports.svg" alt="Reports" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/projects.svg" alt="Projects" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/teams.svg" alt="Team" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/clients.svg" alt="Clients" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/tags.svg" alt="Tags" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src="https://app.clockify.me/assets/nav-icons/settings.svg" alt="Settings" />
                    </span>
                </div>
                <div>
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
    height:615px;
    border-right:1px solid #C6D2D9;
    box-sizing: border-box;
}
#main>div{
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

` 