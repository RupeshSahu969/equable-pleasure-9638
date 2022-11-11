import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { DrawerMenu } from '../Components/DrawerMenu'
import { InnerNavbar } from '../Components/InnerNavbar'
import Calendr from './Calendar'
import Dashboard from './Dashboard/Dashboard'
import Projects from './Projects/Projects'

import Team from './Team/Team'
import { Tracker } from './Tracker/Tracker'

export const InnerMainRoute = () => {
    return (
        <>
            <InnerNavbar />
            <FlexStyled>
                <div className={'menu'}><DrawerMenu /></div>
                <div className='innerComp'>
                    <Routes>
                        <Route path={'/tracker'} element={<Tracker />} />
                        <Route path={'/calendar'} element={<Calendr />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        {/* <Route path='/reports' element={} /> */}
                        <Route path='/team' element={<Team />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path={'*'} element={<Tracker />} />
                        {/* <Route path='*' element={<h1>404 page not found</h1>} /> */}
                    </Routes>
                </div>
            </FlexStyled>
        </>
    )
}

const FlexStyled = styled.div`
display: flex;
.menu{
    width:auto;
}
.innerComp{
    width:100%;
    height:auto;
}
`