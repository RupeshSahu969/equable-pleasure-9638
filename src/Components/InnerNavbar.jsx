import {
    Box, Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import { DrawerMenu } from "./DrawerMenu"
import { authFun, openFun } from "./Redux/action"

export const InnerNavbar = () => {
    const dispatch = useDispatch()
    const open = useSelector((state) => state.open)
    const auth = useSelector((state) => state.auth)


    return (
        <>
            <InnerNavbarStyled>
                <div id='main'>
                    <div>
                        <div onClick={() => dispatch(openFun(!open))} color='red'>
                            <svg id='menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#666" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        <div id='logo'>
                            <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="logo" />
                        </div>
                    </div>
                    <div>
                        <div id="dropDownBtn">Bega95091's works...</div>
                        <div>
                            <button id='btnUpgrade'>UPGRADE</button>
                        </div>
                        <div>
                            <img src="https://app.clockify.me/assets/nav-icons/help.svg" alt="question" />
                        </div>
                        <div id="notification">
                            <img src="https://app.clockify.me/assets/nav-icons/notification.svg" alt="notify" />
                        </div>
                        <div>
                            {/* <div id='login'>BE</div> */}
                            <Menu>
                                <MenuButton as={Box} className='login'>
                                    be
                                </MenuButton>
                                <MenuList>
                                    <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'14px'}>Bega95091</Box>
                                    <Box m={'7px'} mt={'2px'} mb={'2px'} p={'5px'} fontSize={'12px'} color={'#7a7676'}>bega95091@gmail.com</Box>
                                    <MenuItem borderTop={'1px solid #C6D2D9'} className='loginList'>Profile settings</MenuItem>
                                    <MenuItem className='loginList'>Download apps</MenuItem>
                                    <MenuItem className='loginList' borderBottom={'1px solid #C6D2D9'} >Try chat app</MenuItem>
                                    <MenuItem className='loginList' onClick={() => dispatch(authFun(!auth))}>Log out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </InnerNavbarStyled>
        </>
    )
}

const InnerNavbarStyled = styled.div`
#main{
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
border-bottom: 1px solid #C6D2D9;
}
#main>div{
display: flex;
align-items: center;
box-sizing: border-box;
}
#main>div>div{
padding: 10px 18px 10px 18px;
cursor: pointer;
}
#menu{
width: 1.5em;
height: 1.5em;
cursor: pointer;
}
#logo{
padding-left: 4px !important;
}
#logo>img{
height: 24px;
}
#dropDownBtn{
transform: rotate(0);
color: #666;
font-size: .9rem;
}
#dropDownBtn::after{
display: inline-block;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0.3em solid;
border-right: 0.3em solid transparent;
border-bottom: 0;
border-left: 0.3em solid transparent;
box-sizing: border-box;
}
#btnUpgrade{
padding: 0.25rem 0.5rem;
border: 1px solid #03a9f4;
font-size: .75rem;
line-height: 1.4;
border-radius: 2px;
color: #03a9f4;
border-color: #03a9f4;
text-align: center;
box-sizing: border-box;
}
#btnUpgrade:hover{
color: white;
background-color: #03a9f4;
}
.login{
min-width: 32px;
min-height: 32px;
border-radius: 50%;
background: #03A9F4;
color: #fff;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.9rem;
line-height: 1.5;
box-sizing: border-box;
text-align: center;
}
.loginList{
font-size: 14px;
color:#6b6767;
padding-top: 8px;
padding-bottom: 8px;
&:hover{
    color:black;
}
}
`