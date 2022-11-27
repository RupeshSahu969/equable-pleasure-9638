import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Calendr from '../Pages/Calendar'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Reports from '../Pages/Reports/Reports'
import Team from '../Pages/Team/Team'
import { Tracker } from '../Pages/Tracker/Tracker'
import { InnerNavbar } from './InnerNavbar'
import { InnerSidebarBig } from './InnerSidebarBig'
import { InnerSidebarMini } from './InnerSidebarMini'

export const DrawerMenu = () => {
    const open = useSelector((state) => state.open)
    // console.log('open:', open)

    return (
        <>
            <InnerCompStyled>
                {
                    open ? (<InnerSidebarBig />) : (<InnerSidebarMini />)
                }
            </InnerCompStyled>
        </>
    )
}

const InnerCompStyled = styled.div`
display: flex;
box-sizing: border-box;
`